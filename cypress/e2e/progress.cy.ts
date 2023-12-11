// https://the-internet.herokuapp.com/dynamic_loading/1
// https://www.globalsqa.com/demo-site/progress-bar/
// new tab: https://the-internet.herokuapp.com/windows
//

it.skip("aa2", () => {
  cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
  cy.get("button").click();
  cy.get("#loading", { timeout: 10000 }).should(
    "have.attr",
    "style",
    "display: none;"
  );
  cy.get("#finish > h4").should("have.text", "Hello World!");
});

it.skip("progress 2", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("https://www.globalsqa.com/demo-site/progress-bar/");
  cy.iframe(".resp-tab-content-active > p > .demo-frame")
    .find("#downloadButton")
    .click();
  cy.iframe(".resp-tab-content-active > p > .demo-frame")
    .find("#progressbar")
    .should("have.attr", "aria-valuenow", "100");
});

it("new tab", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("https://the-internet.herokuapp.com/windows");
  cy.get(".example > a").invoke("removeAttr", "target").click();
  cy.contains("New Window");
});
