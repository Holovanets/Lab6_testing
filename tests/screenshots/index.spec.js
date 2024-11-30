import { expect, test } from '@playwright/test';

test('Сравнение скриншота главной страницы', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/index-page.png');
});

test('Сравнение скриншота заголовка на главной странице', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');
  const header = await page.locator('h1');
  expect(await header.screenshot()).toMatchSnapshot('screenshots/index-page-header.png');
});
