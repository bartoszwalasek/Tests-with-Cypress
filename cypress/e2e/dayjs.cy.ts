import dayjs from "dayjs";
it.skip("day js library", () => {
  cy.visit("https://jqueryui.com/datepicker/");
  const todaysDate = dayjs().format("DD/MM/YYYY");
  const todaysDatePlus10days = dayjs().add(10, "d").format("DD/MM/YYYY");
  const todaysDatePlus1M = dayjs().subtract(1, "M").format("DD/MM/YYYY");
  cy.log(todaysDatePlus10days);
  cy.log(todaysDate);
  cy.iframe(".demo-frame")
    .find("#datepicker")
    .click()
    .type(todaysDatePlus1M)
    .type("{esc}");
});

it("day js demoqa", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("https://demoqa.com/automation-practice-form");
  cy.get("#dateOfBirthInput").then(function ($input) {
    $input[0].setAttribute("value", "my new value");
  });
  // .then(($value:any) => {
  //     $value.setAttribute('value', '10/12/2023')
  // });
});
