# React + TypeScript + Vite + Dearborn Coding Club

Check out the backend configuration [here](https://github.com/dearborn-coding-club/website-base-backend)

## Running locally
- Run `npm install`
- Run `npm run dev`

## Building locally
- Run `npm run build`

## Running from the goStatic docker container locally
- Run `docker build . --tag frontend`
  - Builds the docker container with the static asset microservice.
- Run `docker run -p 8043:8043 frontend`
  - Runs the docker container locally with the server ports forwarded.