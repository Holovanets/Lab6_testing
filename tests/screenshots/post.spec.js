import { expect, test } from '@playwright/test';

test('Сравнение скриншота страницы деталей поста', async ({ page }) => {
  await page.goto('http://localhost:3000/post.html?id=1');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/post-page.png');
});

test('Сравнение скриншота заголовка на странице деталей поста', async ({ page }) => {
  await page.goto('http://localhost:3000/post.html?id=1');
  const header = await page.locator('h2');
  expect(await header.screenshot()).toMatchSnapshot('screenshots/post-page-header.png');
});
