describe("template spec", () => {
  beforeEach("Login to the App", () => {
    cy.visit("/");
    cy.title().should("eq", "A place to practice your automation skills!");
    cy.contains("Login or register").click();
    cy.get('[name="loginname"]')
      .type("test_user_wsb")
      .should("have.value", "test_user_wsb");
    cy.get('[name="password"]').type("test_pass_wsb");
    cy.get('[title="Login"]').click();
    cy.url().should("include", "account/account");
  });

  it("passes", () => {
    cy.get(".block_6 > .nav > .dropdown > .dropdown-toggle > .caret").click();
    cy.contains("€ Euro").click();
    cy.url().should("include", "currency=EUR");
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click();
    cy.get("ul.thumbnails").contains("Skincare").click();
    cy.get(".contentpanel").contains("Men+Care Clean Comfort Deodorant").click();
    cy.get("#product_quantity").clear().type("1");
    cy.get(".cart").click();
    cy.url().should("include", "checkout/cart");
    cy.get('.product-list').should("contain.text", "Men+Care Clean Comfort Deodorant")
  });

  // afterEach("Logout from the App", () => {
  //   cy.get("#customernav").click();
  //   cy.get(".sidewidt").find('[href*="account/logout"]').click();
  //   cy.get(".maintext").should("contain.text", " Account Logout");
  // });
});
