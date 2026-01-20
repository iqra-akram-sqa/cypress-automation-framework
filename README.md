# Cypress Practice Framework

A modern, maintainable Cypress automation framework leveraging the **Page Object Model (POM)** and modular utilities.

---

## 📌 Overview

This project provides a robust and scalable structure for end-to-end testing using Cypress, focusing on **code reusability, readability, and maintainability**.

---

## 📂 Directory Structure

cypress/
├── e2e/
│ └── *.cy.js # Test specifications
├── pages/
│ └── *.js # Page Object classes
├── support/
│ ├── commands.js # Custom Cypress commands
│ ├── e2e.js # Global setup
│ └── utils/
│ └── *.js # Utilities (URLs, helpers)
cypress.config.js # Cypress configuration
README.md # Project documentation


---

## ✨ Key Features

- **Page Object Model (POM)** for maintainable tests  
- **Custom Commands** for reusable actions  
- **Utility Modules** for shared helpers  
- **Plugin Support** (e.g., cypress-xpath)

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
Run tests
