it("invoke text", () => {
  cy.visit("https://automationteststore.com");
  cy.get(".welcome_msg")
    .invoke("text")
    .then((txt) => {
      Cypress.env("W", txt);
      cy.log(Cypress.env("W"));
    });
});

it("aa", () => {
  cy.log(Cypress.env("W"));
});

it("aa2", () => {
  cy.log(Cypress.env("W"));
});
