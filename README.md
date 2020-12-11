# Roman Numerals App -- Take Home Assessment

The challenge is to:
- Create a roman numeral convertor web application.
- Create CI pipeline that will deploy web application to a load-balanced environment.

It's up to you how you want to complete the tasks.

You can use:
- Local environment (Docker) only
- Any CI service, provisioning tool and cloud environment you feel comfortable with. We recommend creating a free tier account so you don't incur any costs.

# App Requirements

- The app purpose is to convert a roman numeral to a number.
- For the sake of simplicity, the roman numeral is passed as a query parameter, example `http://localhost:3000/?roman=MCMLIV`. The app is already built to handle work this way, all you need to do is to complete the `romanNumeralTranslator` function.
- The application server should return the response: `Hi there! I'm being served from {hostname}. The result of MCMLIV conversion is 1954`

# CI Pipeline Requirements

- Deployment pipeline must run when a feature branch is pushed to GitHub or Pull Request is created. If you use local environment, feel free to any other method to trigger your build.
- Deployment pipeline must have `test`, `build` and `deploy` stages.
- Pipeline must fail if any of the stages fail.
- Deploy to a target environment when the pipeline is successful.
- Target environment should consist of:
  - A load-balancer accessible via HTTPS on port 443.
  - Two application servers (this repository) accessible via HTTP on port 3000.

## Context

We are testing:
- Problem solving capabilities.
- Ability to implement modern automated infrastructure.
- General knowledge of system administration.

Your solution you should emphasize readability, maintainability and DevOps methodologies.

## Submit your solution

Create a public Github repository and push your solution in it. Commit often - we would rather see a history of trial and error than a single monolithic push. When you're finished, send us the URL to the repository.

## Running this web application

This is a NodeJS application. The following commands will be needed:
- `yarn install` install the dependencies of the app.
- `yarn test` runs the application tests.
- `yarn start` starts the http server.

Note: the NodeJS version should be 12.13.0
