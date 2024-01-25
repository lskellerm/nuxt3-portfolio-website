![logo](./public/favicon.ico)

# Personal Portfolio Website

## Project Description

This project is a personal portfolio website used to gain development exeperience using the Nuxt.js framework, as well as
designed to showcase my skills and projects as a Software Engineer.

## Technologies Used

- Nuxt.js
- TailwindCSS
- NuxtUI
- Nuxt Image
- Nuxt Aos
- TypeScript
- Iconify
- Vue-Typewriter-Effect
- Dev Containers
- OcktoKit

## Build setup

Below are the instructions to get the portfolio running on your local machine leveraging the vscode devContainers extension

### Prerequisites

- Visual Studio Code
- Docker
- Dev Containers extension

1. **Clone the repository**
   cd Nuxt-Portfolio

2. **Open vs code**

- Open the clone repository in vscode.
- If prompted, select re-open the folder in a devContainer, otherwise use the Command Palette `Ctrl+Shift+P` and search for 'Remote-Containers: Reopen in Container'

3. **Install Dependencies**

- The `postCreateCommand` in the `devContainer.json` file is set to run `yarn install` automatically after the container is created.
- If for some reason you need to run it manually, you can open an integrated terminal in vs code and enter

```bash
# # yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# yarn
yarn dev

```

## Production

Build the application for production:

```bash

# yarn
yarn build


```

Locally preview production build:

```bash

# yarn
yarn preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
