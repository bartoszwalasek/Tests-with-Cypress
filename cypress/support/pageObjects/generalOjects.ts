import { loginPage } from "./loginPage";

export class General {
  loginToTheApp(username: string, password: string) {
    loginPage.openMainPageAndClickLogin();
    loginPage.fillLoginInputsAndClickLogin(username, password);
  }
}

export const generalObject = new General();
