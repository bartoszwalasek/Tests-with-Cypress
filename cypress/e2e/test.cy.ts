import { login, general, userAccount, mainPage } from "../support/selectors";
import testUser from "../fixtures/testUser.json";

describe("template spec", () => {
  beforeEach("Login to the App", () => {
    cy.openUrlAndCheckTitle("/", "A place to practice your automation skills!");
    cy.findByTextAndClick("Login or register");
    cy.findTypeAndCheckValue(login.inputLogin, testUser.login, testUser.login);
    cy.get(login.inputPassword, { timeout: 20000 }).type("test_pass_wsb", {
      log: false,
    });
    // cy.clearInputAndType(login.inputPassword, "test_pass_wsb")
    cy.findSelectorAndClick(login.buttonLogin);
    cy.assertUrl("account/account");
  });

  it("passes", () => {
    cy.findSelectorTextAndClick(mainPage.dropdownCurrency, " US Dollar");
    cy.findByTextAndClick("€ Euro");
    cy.assertUrl("currency=EUR");
    cy.findSelectorAndClick(mainPage.tabMen);
    cy.findSelectorTextAndClick(mainPage.optionTabSkinCare, "Skincare");
    cy.findSelectorTextAndClick(
      general.contentPanel,
      "Men+Care Clean Comfort Deodorant"
    );
    cy.clearInputAndType(general.productQy, "1");
    cy.findSelectorAndClick(general.cart);
    cy.assertUrl("checkout/cart");
    cy.findElementAndCheckText(
      general.productList,
      "Men+Care Clean Comfort Deodorant"
    );
  });

  afterEach("Logout from the App", () => {
    cy.findSelectorAndClick(mainPage.navigationBarCustomer);
    cy.getSelectorFindSelectorAndClick(
      userAccount.myAccountContainer,
      '[href*="account/logout"]'
    );
    cy.findElementAndCheckText(
      userAccount.headerAccountLogout,
      " Account Logout"
    );
  });
});
