import { browser, by, element } from "protractor";

export class AppPage {
	public async navigateTo() {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	public async getTitleText() {
		return element(by.css("it-root h1")).getText() as Promise<string>;
	}
}
