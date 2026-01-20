# Cypress Automation Framework

A modern, scalable end-to-end automation testing framework built with Cypress using the Page Object Model (POM) and modular utilities.

---

## Overview

This project demonstrates best practices for web automation testing using Cypress.  
It is designed to be maintainable, reusable, and easy to scale, making it suitable for real-world QA automation projects.

The framework follows industry standards commonly used in professional QA teams.

---

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)

---
## Project Structure
<pre>
cypress/
 ├── e2e/
 │   └── *.cy.js              # Test specifications
 ├── pages/
 │   └── *.js                 # Page Object classes
 ├── fixtures/
 │   └── *.json               # Test data
 ├── support/
 │   ├── commands.js          # Custom Cypress commands
 │   ├── e2e.js               # Global configuration
 │   └── utils/
 │       └── *.js             # Utility/helper functions
cypress.config.js             # Cypress configuration
package.json                  # Project dependencies
README.md                     # Project documentation
</pre>



---

## Key Features

- Page Object Model (POM) to separate test logic from UI locators
- Custom commands for reusable actions
- Data-driven testing using fixtures
- Utility modules for shared helpers and constants
- Clean and scalable framework structure

---

## Getting Started
### Prerequisites
<pre>
- Node.js (LTS)
- Git  
</pre>pre>

### Install Dependencies
<pre>
npm install
</pre>pre>


### Open Cypress Test Runner
<pre>
npx cypress open
</pre>


### Run Tests in Headless Mode
<pre>
npx cypress run
</pre>


---

### Writing Tests
- Place test files inside cypress/e2e/
- Create page objects inside cypress/pages/
- Keep assertions inside test files
- Reuse logic via custom commands and utilities


---

### Example Test (Page Object Based)
<pre>
import LoginPage from '../pages/LoginPage';

describe('Login Page Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid credentials', () => {
    loginPage.enterUsername('username');
    loginPage.enterPassword('password');
    loginPage.submit();
    loginPage.assertLoginSuccess();
  });
});
</pre>

---

### Use Cases Covered
- UI validation
- Login functionality
- Form handling
- Assertions and validations
- Reusable test components



