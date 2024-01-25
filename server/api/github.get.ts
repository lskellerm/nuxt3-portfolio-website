import { Octokit } from 'octokit';
import { Endpoints } from '@octokit/types';

// Create an instance of Octokit with my GitHub token
const octokit: Octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

// Get the parameter and response types from the GitHub API
type getRepoForAuthedUserParams = Endpoints['GET /user/repos']['parameters'];
type getRepoForAuthedUserResponse = Endpoints['GET /user/repos']['response'];

type repoData = {
  name: string;
  description: string | null;
  html_url: string;
  technologies: (string | null | undefined)[];
};

// Define the parameters for the request
const params: getRepoForAuthedUserParams = {
  visibility: 'all',
  affiliation: 'owner',
  sort: 'created'
};
console.log(process.env.GITHUB_ACCESS_TOKEN);

export default defineEventHandler(async (): Promise<repoData[]> => {
  try {
    // Retrieve the list of repos from the GitHub API
    const reposResponse: getRepoForAuthedUserResponse = await octokit.request(
      'GET /user/repos',
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        ...params
      }
    );
    // Transform the response to only include the data needed for the project cards
    const extractedRepoData: repoData[] = reposResponse.data
      .filter((repo) => repo.name !== 'padas-vue' && !repo.name.includes('DSA'))
      .map((repo) => ({
        name:
          repo.name === 'padas-flask'
            ? 'Padas'
            : repo.name === 'kpi dashboard'
              ? 'KPI Dashboard'
              : repo.name.replace(/-/g, ' '),
        description: repo.description,
        html_url: repo.html_url,
        technologies: repo.name.includes('Coffee-Supply')
          ? ['PHP', 'MariaDB', 'JavaScript', 'AJAX']
          : repo.name.includes('nuxt3-portfolio')
            ? ['TypeScript', 'Vue', 'Nuxt', 'Vue', 'TailwindCSS', 'AWS ']
            : repo.name.includes('kpi')
              ? ['Java', 'JavaFX', 'SceneBuilder']
              : repo.name.includes('padas')
                ? [
                    'JavaScript',
                    'Python',
                    'Flask',
                    'Vue',
                    'Vuetify',
                    'PostgreSQL',
                    'TailwindCSS',
                    'AWS'
                  ]
                : [repo.language]
      }));

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
