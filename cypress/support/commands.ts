export {};
declare global {
  namespace Cypress {
    interface Chainable {
      findTypeAndCheckValue(
        selector: string,
        text: string,
        value: string
      ): Chainable<void>;
      findByTextAndClick(text: string): Chainable<void>;
      findSelectorAndClick(selector: string): Chainable<void>;
      clearInputAndType(selector: string, value: string): Chainable<void>;
      assertUrl(assert: string, value: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("findTypeAndCheckValue", (selector, text, value) => {
  cy.get(selector).type(text).should("have.value", value);
});

Cypress.Commands.add("findByTextAndClick", (text) => {
  cy.contains(text).click();
});

Cypress.Commands.add("findSelectorAndClick", (selector) => {
  cy.get(selector).click();
});

Cypress.Commands.add("clearInputAndType", (selector, value) => {
  cy.get(selector).clear().type(value);
});

Cypress.Commands.add("assertUrl", (assert, value) => {
  cy.url().should(assert, value);
});
