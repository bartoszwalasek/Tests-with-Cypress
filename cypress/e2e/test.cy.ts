import { login, general, userAccount, mainPage } from "../support/selectors";
import testUser from "../fixtures/testUser.json";
import { generalObject } from "../support/pageObjects/generalOjects";
import { loginPage } from "../support/pageObjects/loginPage";

describe("template spec", () => {
  beforeEach("Login to the App", () => {
    generalObject.loginToTheApp(testUser.login, testUser.password);
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

  // afterEach("Logout from the App", () => {
  //   cy.findSelectorAndClick(mainPage.navigationBarCustomer);
  //   cy.getSelectorFindSelectorAndClick(
  //     userAccount.myAccountContainer,
  //     '[href*="account/logout"]'
  //   );
  //   cy.findElementAndCheckText(
  //     userAccount.headerAccountLogout,
  //     " Account Logout"
  //   );
  // });
});
