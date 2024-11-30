import { expect, test } from '@playwright/test';

test('Проверка загрузки постов на главной странице', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');
  const firstPost = await page.locator('h3').first();
  await expect(firstPost).toBeVisible();
  await expect(firstPost).toContainText(/.+/); 
});

test('Переход к деталям поста', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');
  const firstLink = await page.locator('a').first();
  await firstLink.click();
  await expect(page).toHaveURL(/post.html\?id=\d+/); 
});

test('Проверка отображения деталей поста', async ({ page }) => {
  await page.goto('http://localhost:3000/post.html?id=1');
  setInterval(()=>{},200)
  const postTitle = await page.locator('h2');
  await expect(postTitle).toBeVisible();
  await expect(postTitle).toContainText(/.+/);
});
