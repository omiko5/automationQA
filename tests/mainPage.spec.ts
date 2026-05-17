// tests/main.spec.ts

import { test } from '@playwright/test';
import MainPage from '../pages/mainPage';

test.describe('Main Page Tests', () => {

    test('should navigate to ZennoPoster page', async ({ page }) => {

        const mainPage = new MainPage(page);

        await mainPage.open();

        await mainPage.clickZennoPoster();

        await mainPage.expectZennoPosterPageLoaded();
    });

});