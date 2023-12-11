it("elements", () => {
  cy.visit("https://jit.team");
  cy.get("body").then((body) => {
    if (body.find(".CookiesConsentBox__consent-box").length > 0) {
      cy.get(
        ".CookiesConsentBox__consent-box__action-buttons__accept_button"
      ).click();
    }
  });
});
