// pages/mainPage.ts

import { Page, Locator, expect } from '@playwright/test';

export default class MainPage {

    readonly page: Page;

    // Locators
    readonly zennoPosterLink: Locator;
    readonly capMonsterLink: Locator;
    readonly zennoBoxLink: Locator;

    readonly zennoPosterHeading: Locator;

    constructor(page: Page) {
        this.page = page;

        this.zennoPosterLink = page.getByRole('link', {
            name: 'ZennoPoster logo ZennoPoster',
            exact: true
        });

        this.capMonsterLink = page.getByRole('link', {
            name: 'CapMonster Cloud logo CapMonster Cloud',
            exact: true
        });

        this.zennoBoxLink = page.getByRole('link', {
            name: 'ZennoBox logo ZennoBox',
            exact: true
        });

        this.zennoPosterHeading = page.getByRole('heading', {
            name: 'ZennoPoster is able to repeat'
        });
    }

    // Actions
    async open() {
        await this.page.goto('https://zennolab.com/en/');
    }

    async clickZennoPoster() {
        await this.zennoPosterLink.click();
    }

    async clickCapMonster() {
        await this.capMonsterLink.click();
    }

    async clickZennoBox() {
        await this.zennoBoxLink.click();
    }

    // Assertions
    async expectZennoPosterPageLoaded() {
        await expect(this.zennoPosterHeading).toBeVisible();
    }
}