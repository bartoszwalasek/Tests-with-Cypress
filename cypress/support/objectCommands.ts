import { login } from "./selectors";
export {};
declare global {
  namespace Cypress {
    interface Chainable {
      fillLoginInputsAndClickLogin(
        username: string,
        password: string
      ): Chainable<void>;
    }
  }
}

Cypress.Commands.add("fillLoginInputsAndClickLogin", (username, password) => {
  cy.get("selector").type(username);
  cy.get("selector").type(password);
});

Cypress.Commands.add("fillLoginInputsAndClickLogin", (username, password) => {
          cy.get("selector").type(username);
          cy.get("selector").type(password);
        });