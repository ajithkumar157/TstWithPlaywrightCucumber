# TstWithPlaywrightCucumber
Playwright (TS binding) + Cucumber (BDD)

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

Features

Awesome report with screenshots, videos & logs
Execute tests on multiple environments
Parallel execution
Rerun only failed features
Retry failed tests on CI
Github Actions integrated with downloadable report
Page object model
Sample report

image

Project structure

.github -> yml file to execute the tests in GitHub Actions
src -> Contains all the features & Typescript code
test-results -> Contains all the reports related file
Reports

Mutilple Cucumber Report
Default Cucumber report
Logs
Screenshots of failure
Test videos of failure
Trace of failure
Get Started

Setup:

Clone or download the project
Extract and open in the VS-Code
npm i to install the dependencies
npx playwright install to install the browsers
npm run test to execute the tests
To run a particular test change
  paths: [
            "src/test/features/featurename.feature"
         ] 
Use tags to run a specific or collection of specs
npm run test --TAGS="@test or @add"
Folder structure

src\pages -> All the page (UI screen)
src\test\features -> write your features here
src\test\steps -> Your step definitions goes here
src\hooks\hooks.ts -> Browser setup and teardown logic
src\hooks\pageFixture.ts -> Simple way to share the page objects to steps
src\helper\env -> Multiple environments are handled
src\helper\types -> To get environment code suggestions
src\helper\report -> To generate the report
config/cucumber.js -> One file to do all the magic
package.json -> Contains all the dependencies
src\helper\auth -> Storage state (Auth file)
src\helper\util -> Read test data from json & logger
Tutorials

Learn Playwright - Playwright - TS
BDD in detail - TS binding