import { SES } from '@aws-sdk/client-ses';
import { useCompiler } from '#vue-email';

// Create config object for SES
const config = {
  region: process.env.AWS_SES_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

// Create a new instance of the SES client using the config object
const ses = new SES(config);

export default defineEventHandler(
  async (event): Promise<{ message: string }> => {
    /***
     * Endpoint to send an email using the AWS SES API
     * @param {object} event - The event object
     * @returns {Promise<{ message: string }>} - The response object containing a message string
     */

    // Read the body of the request
    const body = await readBody(event);

    // Parse the body of the request for the specific email data from client form
    const { firstName, lastName, email, message } = body;

    const template = await useCompiler('ContactEmail.vue', {
      props: {
        name: 'Luis',
        sender: `${firstName} ${lastName}`,
        email,
        message
      }
    });

    // Define parameters needed by SES send function
    const params = {
      Source: process.env.AWS_SES_SENDER,
      Destination: {
        ToAddresses: ['lskeller.dev@gmail.com']
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: template.html
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Contact Form Submission from ${email}`
        }
      }
    };

    try {
      // Attempt to send the email using the AWS SES API
      await ses.sendEmail(params);
      return {
        message: `Hi ${firstName}, thanks for reaching out! I will get back to you soon!`
      };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage:
          'Internal Server Error, unable to send email at this time. Please try again later.'
      });
    }
  }
);
