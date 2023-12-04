import testUser from "../fixtures/testUser.json";
describe("session tests", () => {
  beforeEach(() => {
    cy.loginBySession(testUser.login, testUser.password);
  });

  it("load session 1", () => {
    cy.visit("/index.php?rt=account/edit");
    cy.get("#AccountFrm_firstname").should("be.visible");
  });

  it("load session 2", () => {
    cy.visit("/index.php?rt=account/history");
    cy.contains(" My Order History").should("not.be.visible");
  });
});
