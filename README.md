# Playwright Automation Framework

This repository contains an automation framework built with Playwright
 and TypeScript, covering both UI and API testing.

## It demonstrates 
- End-to-End UI Testing with Page Object Model (POM)
- API Testing with Playwright Fixtures & Custom API Client
- Data-driven testing via JSON files
- Positive & Negative test scenarios
- Test reports with Playwright Test runner and Allure report
- Continuous Integration with GitHub Actions

## Setup & Installation
### 1- clone the repo
```
https://github.com/EmanHamzawy/PlaywrightE2EandAPI.git

```
### 2- Install dependencies:
```
npm install
npm i -D @playwright/test allure-playwright
npm i -D allure-commandline
```
### 3- Run Tests
```
// to run all tests
npx playwright test

// to run API tests only
npx playwright test tests/API

// to run E2E tests only
npx playwright test tets/E2E
```
### 4- Show HTML report
```
npx playwright show-report

```
### 5- Show Allure report
```
npx allure generate allure-results --clean && npx allure open

```
## Key Features
- Handles token-based authentication using a reusable APIClient
- Uses fixtures to automatically login before API tests
- Supports positive & negative test flows
- UI automation covers Flutter-Angullar webApp includes Shadow DOM accessibility and Freshnes webApp
- Full data-driven testing with JSON test files

## Continuous Integration (GitHub Actions)
This project is configured to run all tests automatically using GitHub Actions on every push request to the main branch.
