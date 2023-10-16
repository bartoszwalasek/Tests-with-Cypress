describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.title().should("eq", "A place to practice your automation skills!");
    cy.contains("Login or register").click();
    cy.get('[name="loginname"]')
      .type("test_user_wsb")
      .should("have.value", "test_user_wsb");
    cy.get('[name="password"]').type("test_pass_wsb");
    cy.get('[title="Login"]').click();
    cy.url().should("include", "account/account");
    cy.get(".sidewidt").find('[href*="account/logout"]').click();
  });
});
