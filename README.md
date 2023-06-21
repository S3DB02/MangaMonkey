# MangaMonkey
## The next generation of manga reading.
![License](https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge&color=011910)

Meet MangaMonkey, the best place to read and easily track your manga reading progress.

## Prerequisites

- Node.js
- Docker
- Docker Compose

You can set it up by following these steps:

## 1. Install Node.js

- Open your terminal.
- Check if Node.js is already installed by running:
    ```
    node --version
    ```
- If a version number is returned, you have Node.js installed. If not, you can install Node.js. For Linux distributions like Ubuntu, you can use:
    ```
    sudo apt-get install nodejs
    ```
  On MacOS, you can use [Homebrew](https://brew.sh/):
    ```
    brew install node
    ```
  For Windows, you can download an executable installer from the Node.js website.

## 2. Install Docker

- Follow the instructions from the official Docker website to install Docker for your specific operating system.

## 3. Install Docker Compose

- Docker Compose is included in most Docker installations. If it's not included in your installation, follow the instructions on the official Docker website to install Docker Compose.

## 4. Set Up Your Project

- Check out app specific instructions on their respective branches.
- If you are running the project with Docker, make sure to fill in the environment (.env) file with the appropriate variables. Here is an example of how the `.env` file should look:

    ```
    AUTH0_DOMAIN=your_auth0_domain
    AUTH0_CLIENT_ID=your_auth0_client_id
    AUTH0_CLIENT_SECRET=your_auth0_client_secret
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_HOST=your_database_host
    DB_DIALECT=your_database_dialect
    DB_PORT=your_database_port
    ```

- Before you run Docker, make sure to send the Auth0 instructions to the frontend.
- To run the project with Docker Compose, you can use the command `docker-compose up`.
