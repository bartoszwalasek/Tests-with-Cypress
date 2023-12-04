import { loginPage } from "./pageObjects/loginPage";
import { login } from "../support/selectors";

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
      assertUrl(value: string): Chainable<void>;
      openUrlAndCheckTitle(page: string, title: string): Chainable<void>;
      findSelectorTextAndClick(selector: string, text: string): Chainable<void>;
      findElementAndCheckText(selector: string, text: string): Chainable<void>;
      getSelectorFindSelectorAndClick(
        selector: string,
        find: string
      ): Chainable<void>;
      loginBySession(username: string, password: string): Chainable<void>;
      login: typeof login;
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

Cypress.Commands.add("findSelectorTextAndClick", (selector, text) => {
  cy.get(selector).contains(text).click();
});

Cypress.Commands.add("clearInputAndType", (selector, value) => {
  cy.get(selector).clear().type(value);
});

Cypress.Commands.add("assertUrl", (value) => {
  cy.url().should("include", value);
});

Cypress.Commands.add("openUrlAndCheckTitle", (page, title) => {
  cy.visit(page);
  cy.title().should("eq", title);
});

Cypress.Commands.add("findElementAndCheckText", (selector, text) => {
  cy.get(selector).should("contain.text", text);
});

Cypress.Commands.add("getSelectorFindSelectorAndClick", (selector, find) => {
  cy.get(selector).find(find).click();
});

Cypress.Commands.add("loginBySession", (username, password) => {
  cy.session(
    [username, password],
    () => {
      cy.visit("/index.php?rt=account/login");
      loginPage.fillLoginInputsAndClickLogin(username, password);
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});

// const login = (username: string, password: string) => {
//   cy.session(
//     username,
//     () => {
//       cy.visit("/index.php?rt=account/login");
//       cy.get('[name="loginname"]').type(username);
//       cy.get('[name="password"]').type(password);
//       cy.get('')
//     },
//     {
//       cacheAcrossSpecs: true,
//     }
//   );
// };

// Cypress.Commands.addAll({ login });
