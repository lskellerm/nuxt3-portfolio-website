import { Octokit } from 'octokit';
import type { Endpoints } from '@octokit/types';

// Create an instance of Octokit to make requests to the GitHub API
const octokit: Octokit = new Octokit();

// Get the parameter and response types from the GitHub API
type getRepoForUserParams =
  Endpoints['GET /users/{username}/repos']['parameters'];
type getRepoForUserResponse =
  Endpoints['GET /users/{username}/repos']['response'];

// Create a type for the data needed for the project cards
type repoData = {
  name: string;
  description: string | null;
  html_url?: string;
  technologies: (string | null | undefined)[];
};

// Define the parameters for the request
const params: getRepoForUserParams = {
  username: 'lskellerm',
  type: 'owner',
  sort: 'created'
};

export default defineEventHandler(async (): Promise<repoData[]> => {
  /***
   * Endpoint to fetch the list of repositories for the user from the GitHub API
   * @returns {Promise<repoData[]>} - The list of repositories for the user'
   * @throws {Error} - If the request to the GitHub API fails
   */
  try {
    // Retrieve the list of repos from the GitHub API
    const reposResponse: getRepoForUserResponse = await octokit.request(
      'GET /users/{username}/repos',
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        ...params
      }
    );
    // Transform the response to only include the data needed for the project cards
    const extractedRepoData: repoData[] = reposResponse.data
      .filter(
        (repo) => !repo.name.includes('DSA') && !repo.name.includes('QRafty')
      )
      .map((repo) => ({
        name:
          repo.name === 'kpi dashboard'
            ? 'KPI Dashboard'
            : repo.name.replace(/-/g, ' '),
        description: repo.name.includes('nuxt3-portfolio')
          ? repo.description +
            ' (this site), built with Nuxt.js, with the goal of learning Nuxt 3, TypeScript, and TailwindCSS, while showcasing my projcts and skills. ' +
            'Fully deployed on AWS using Route 53, Amplify, and CloudFront.'
          : repo.description,
        html_url: repo.html_url,
        technologies: repo.name.includes('Coffee-Supply')
          ? ['PHP', 'MariaDB', 'JavaScript', 'AJAX']
          : repo.name.includes('nuxt3-portfolio')
            ? ['TypeScript', 'Vue', 'Nuxt', 'Vue', 'TailwindCSS', 'AWS ']
            : repo.name.includes('kpi')
              ? ['Java', 'JavaFX', 'SceneBuilder']
              : [repo.language]
      }));

    // Manually add the Padas repo to the list of repos since it is private and not returned by the GitHub API Endpoint
    const padasRepoData: repoData = {
      name: 'Padas',
      description:
        'Full-Stack application that allows users and clinicians to streamline the process of building, distributing, and managing psychological assessments. ' +
        'Deployed on AWS using S3, CloudFront, API Gateway, Lambda, and RDS.',
      technologies: [
        'JavaScript',
        'Python',
        'Flask',
        'Vue',
        'Vuetify',
        'PostgreSQL',
        'TailwindCSS',
        'AWS'
      ]
    };

    extractedRepoData.push(padasRepoData);

    return extractedRepoData;
  } catch (err) {
    // Return the error if the request to the GitHub API fails
    throw createError({
      statusCode: 500,
      statusMessage:
        'Internal Server Error, unable to fetch repos from GitHub: ' + err
    });
  }
});

export type { repoData };
