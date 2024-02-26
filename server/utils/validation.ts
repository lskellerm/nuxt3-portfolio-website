import createDOMNPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Create a JSDOM window object to be use with DOMPurify
const window = new JSDOM('').window;
const DOMPurify = createDOMNPurify(window);

export function sanitizeInput(input: string): string {
  /***
   * Basic input sanitization using DOMPurify
   * @param {string}  input - The input string to be sanitized
   * @returns {string} - The sanitized input string
   */
  return DOMPurify.sanitize(input);
}

export function validateInput(data: any): { field: string; message: string }[] {
  const errors: { field: string; message: string }[] = [];

  if (!data.firstName)
    errors.push({ field: 'firstName', message: 'First name is required' });
  if (!data.lastName)
    errors.push({ field: 'lastName', message: 'Last name is required' });
  if (!data.email || !validateEmail(data.email))
    errors.push({
      field: 'email',
      message:
        'Valid email is required, please ensure you have provided a valid email'
    });
  if (!data.message)
    errors.push({ field: 'message', message: 'Message is required' });

  return errors;
}

function validateEmail(email: string): boolean {
  /***
   * Basic email validation using a regular expression pattern for email strings
   * @param {string} email - The email string to be validated
   * @returns {boolean} - The result of the validation
   */
  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return emailRegex.test(email);
}
