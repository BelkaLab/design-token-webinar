![Belka logo](belka.png 'Belka')

## Table of contents

- [Overview](#overview)
- [TokensBrücke Setup](#tokensbrücke-setup)
- [Project Structure](#project-structure)

## Overview

This repo is an example designed to manage and automate the integration of design tokens into your projects.

It utilizes Style Dictionary for token transformation and GitHub Actions to automate the build process.

Additionally, it incorporates the TokensBrücke Figma plugin, which helps in syncing design tokens from Figma to your GitHub repository and opening pull requests.\

Here is the [Figma file](https://www.figma.com/design/Im3BQtjCRwdPfROSNvcEgj/Webinar-Intro-to-Design-Tokens-for-Devs?node-id=62-2&m=dev) that you can duplicate.

These tools work together to ensure that design tokens are consistently up-to-date, streamlining the development workflow through a series of automated steps and scripts.

This example can be set up as a standalone project or within a monorepo, e.g. under a `design-tokens` directory or as an external project named `design-tokens`.

## TokensBrücke Setup

1. You need to create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). You can create a **Fine-grained personal access token** or a **Personal access token (classic)**.

   Fine-grained personal access token - Repository permissions

   - **Contents**: Read and write.
   - **Metadata**: Read-only.
   - **Pull requests**: Read and write.

   Personal access token (classic) - Scopes

   - [x] **repo**
     - [x] repo:status
     - [x] repo_deployment
     - [x] public_repo
     - [x] repo:invite
     - [x] security_events

2. In the plugin settings paste the token into the `Personal access token` field.

3. Add an owner name, repository name and a branch name.

4. In the file name field you can specify a path to the file. If the file doesn't exist, it will be created. If the file exists, it will be overwritten. File name should include the file extension, e.g. `tokens/design.tokens.json`.

5. You can also specify a commit message.

6. Specify PR fields.

   - **PR title**: you can specify a title for the PR. If you leave it empty, the plugin will use `chore(tokens): update tokens` as a default title.
   - **PR body**: you can specify a body for the PR. If you leave it empty, the plugin won't add any body to the PR.

## Project Structure

Most of the code lives in the following files.

- `scripts/sd-build.cjs`: configures and extends Style Dictionary for building design tokens. It uses `tokens/**/*.tokens.json` as input and outputs the result as CSS variables to `src/styles/variables.css`.

- `.github/workflows/build-design-tokens.yml`: a GitHub Action workflow that builds and updates the current pull request with the latest design tokens. Triggered by PRs to the main branch, runs the build script and commits the changes back to the PR.
