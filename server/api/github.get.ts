import { Octokit } from 'octokit';
import { Endpoints } from '@octokit/types';

// Create an instance of Octokit with my GitHub token
const octokit: Octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

// Get the parameter and response types from the GitHub API
type getRepobyOwnerParams =
  Endpoints['GET /users/{username}/repos']['parameters'];
type getRepoByOwnerResponse =
  Endpoints['GET /users/{username}/repos']['response'];

type repoData = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null | undefined;
};

// Define the parameters for the request
const params: getRepobyOwnerParams = {
  username: 'lskellerm'
};

export default defineEventHandler(async (): Promise<repoData[]> => {
  try {
    // Retrieve the list of repos from the GitHub API
    const reposResponse: getRepoByOwnerResponse = await octokit.request(
      'GET /users/{username}/repos',
      params
    );

    // Transform the response to only include the data needed for the project cards
    const extracedRepoData: repoData[] = reposResponse.data.map((repo) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language
    }));
    return extracedRepoData;
  } catch (err) {
    // Return the error if the request to the GitHub API fails
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error, unable to fetch repos from GitHub'
    });
  }
});

export type { repoData };
