# API-Testing-Milestone

## Problem Statement 
As a QA Engineer for a growing software development company, your task is to
ensure the reliability and functionality of the Trello Board REST API. The company is
building tools that integrate with Trello to enhance project management capabilities for its clients.
To maintain high standards of quality and performance, it is crucial to implement
automated API tests covering all aspects of CRUD (Create, Read, Update, Delete)
operations on Trello Boards. Additionally, API responses should be logged for
verification, and status codes should be asserted to confirm the correctness of the operations.

##  Setting Up Trello API
+ Navigate to https://trello.com and create an account.
+ Navigate to Trello API Introduction page.
+ Find for the link https://trello.com/power-ups/admin
+ Click on New, Fill up the details, and Create API key.
+ At the right hand side paragram, you will find a link to generate a Token. Click on the link and generate.
+ Save API key and Token Key.

## Setting up Cypress Application
+ Initialize package, `npm -i init`
+ Create a Cypress app, `npm install cypress --save-dev`
+ Open Cypress app, `npx cypress open`
+ Select E2E testing, Select a Browser, Under specs find your cypress file.

## Setting up File Structure
+ Create a folder Integration under the cypress directory.
+ Create a folder test under the Integration directory.
+ Create a file board_tests.specs.cy.js
+ In cypress.config.js, add relative address of board_tests.specs.cy.js directory in spec pattern.
+ In board_tests.specs.cy.js create a describeAndIt block and write code to perform CRUD.

## References 
+ https://docs.cypress.io/guides/overview/why-cypress
+ https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/
+ https://trello.com/power-ups/admin


