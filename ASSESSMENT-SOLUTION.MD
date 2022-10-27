# Solution

### Environment
<details>
  <summary>Environment setup</summary>

##### Softwares to Install
* Git
* Node.js

Validate the Installations by checking the versions of each:
```shell
node -v;
git --version;
```
</details>

***

### Installation
<details>
  <summary>How to install dependencies</summary>

1. Open the folder where you want to clone/download the project, and open the same folder in terminal and run below git clone command:
```shell
git clone https://github.com/hemasurendra/fedex_qa_assignment_Cypress.git
```
2. Navigate into the repository folder
```shell
cd fedex_qa_assignment_Cypress/
```
3. Install all required npm dependencies:
```shell
npm install
```
</details>

***

### Test run
<details>
  <summary>How to run tests</summary>

#### Before tests run
Before running the end to end cypress tests you need to **start the application** <br>
Please run in your terminal:
```shell
npm run start
```

#### Cypress run
To run all api and Ui tests:
```shell
npm run test
```
 - run cucumber UI only tests:
```shell
npm run test:e2e
```
- run integration only tests:
```shell
npm run test:integration
```

</details>


### Bugs
* Found one bug, when user searches in planet for a invalid value (a click or a double on space bar), application should throw "Not Found" message. Instead results are displayed. There is a scenario which fails for this case.

# Assessment Solution

* Used Cypress with Cucumber style for the end to end tests for both people and planet search, including the failed scenario for multiple data.
* Added two api specs for validating the api calls for the test data present with Jasmine (describe and it style)

### Report
<details>
  <summary>How to view test reports</summary>

  Cypress by defaults captures videos and also screenshots for failed scenarios and store it under cypress folder.

  I have used `cypress-mochawesome-reporter` for capturing test results and these reports can be accessed in path `cypress/reports/index.html`
</details>
