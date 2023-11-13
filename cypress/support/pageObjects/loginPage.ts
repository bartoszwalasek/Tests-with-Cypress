import { login, general, userAccount, mainPage } from "../selectors";

export class Login {
  openMainPageAndClickLogin() {
    cy.openUrlAndCheckTitle("/", "A place to practice your automation skills!");
    cy.findByTextAndClick("Login or register");
  }
  fillLoginInputsAndClickLogin(username: string, password: string) {
    cy.get(login.inputLogin).type(username);
    cy.get(login.inputPassword).type(password);
  }
}

export const loginPage = new Login();
