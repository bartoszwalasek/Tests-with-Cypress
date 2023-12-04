let a: string;

it("invoke text", () => {
  cy.visit("https://automationteststore.com");
  cy.get(".welcome_msg")
    .invoke("text")
    .then(($txt) => {
      a = $txt;
      cy.log(a);
    });
});

it("aa", () => {
  cy.log(a);
});

it("aa2", () => {
  cy.log(a);
});
