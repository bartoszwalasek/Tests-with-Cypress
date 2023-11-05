describe("template spec", () => {
  beforeEach("Login to the App", () => {
    cy.visit("/");
    cy.title().should("eq", "A place to practice your automation skills!");
    cy.findByTextAndClick("Login or register");
    cy.findTypeAndCheckValue(
      '[name="loginname"]',
      "test_user_wsb",
      "test_user_wsb"
    );
    cy.clearInputAndType('[name="password"]', "test_pass_wsb")
    cy.findSelectorAndClick('[title="Login"]');
    cy.assertUrl("include", "account/account");
  });

  it("passes", () => {
    cy.get(".dropdown-toggle").contains(" US Dollar").click();
    cy.contains("€ Euro").click();
    cy.assertUrl("include", "currency=EUR");
    cy.findSelectorAndClick(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=58"]'
    );
    cy.get("ul.thumbnails").contains("Skincare").click();
    cy.get(".contentpanel")
      .contains("Men+Care Clean Comfort Deodorant")
      .click();
    cy.clearInputAndType("#product_quantity", "1");
    cy.findSelectorAndClick(".cart")
    cy.assertUrl("include", "checkout/cart");
    cy.get(".product-list").should(
      "contain.text",
      "Men+Care Clean Comfort Deodorant"
    );
  });

  afterEach("Logout from the App", () => {
    cy.get("#customernav").click();
    cy.get(".sidewidt").find('[href*="account/logout"]').click();
    cy.get(".maintext").should("contain.text", " Account Logout");
  });
});
