//example test case
describe('My First Cypress Test', () => {
    it('Visits example.com and checks the title', () => {
      cy.visit('https://example.com');
      cy.title().should('include', 'Example Domain');
    });
  });
  