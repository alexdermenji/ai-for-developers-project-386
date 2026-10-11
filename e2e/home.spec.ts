import { expect, test } from '@playwright/test'

test('посетитель переходит к записи и возвращается на главную', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Календарь звонков' })).toBeVisible()
  await expect(page.getByText('Выберите удобное время для 30-минутного звонка')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Записаться на звонок' })).toBeInViewport()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await page.getByRole('link', { name: 'Записаться на звонок' }).click()
  await expect(page).toHaveURL('/book')
  await expect(page.getByRole('heading', { name: 'Запись на звонок' })).toBeVisible()
  await page.reload()
  await expect(page.getByText('Выбор времени скоро появится')).toBeVisible()
  await page.getByRole('link', { name: 'На главную' }).click()
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('heading', { name: 'Календарь звонков' })).toBeVisible()
})

test('посетитель открывает страницу записи по прямой ссылке', async ({ page }) => {
  await page.goto('/book')
  await expect(page.getByRole('heading', { name: 'Запись на звонок' })).toBeVisible()
})
