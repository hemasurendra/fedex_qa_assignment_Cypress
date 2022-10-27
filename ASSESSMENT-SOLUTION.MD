# Solution

### Environment

Environment setup

##### Make sure below software is available
* Git
* Node.js

To check all these items installed properly, run one by one in your terminal:
```shell
node -v;
git --version;
node --version;
```

***

### Installation

How to install dependencies

1. Navigate to the folder in which framework will be stored, and run in your terminal copied link (with HTTPS path):
```shell
git clone https://github.com/srinivasbudh/cypress-e2e-automation.git
```
2. Navigate into the downloaded "cypress-e2e-automation" repository folder
```shell
cd cypress-e2e-automation/
```
3. Install all required dependencies:
```shell
npm install
```
</details>

***

### Test run

How to run tests

#### Before tests run
Before running the e2e cypress tests you need to **start the application** <br>
Please run in your terminal:
```shell
npm run start
```
### Bugs
* Found one bug, when user searches in planet for a invalid value (a click or a double on space bar), application should throw "Not Found" message. Instead results are displayed. There is a scenario which fails for this case.

# Assessment Solution

* Used Cypress with Cucumber style for the end to end tests for both people and planet search, including the failed scenario for multiple data.
* Added two api specs for validating the api calls for the test data present with Jasmine (describe and it style)

#### Cypress run
To run the cypress tests you can use the command:
```shell
npm run test
```
 - run cucumber only tests:
```shell
npm run test:e2e
```
- run integration only tests:
```shell
npm run test:integration
```

### Report
  How to view test reports

  Cypress by defaults captures videos and also screenshots for failed scenarios and store it under cypress folder.

  I have used `cypress-mochawesome-reporter` for capturing test results and these reports can be accessed in path `cypress/reports/index.html`