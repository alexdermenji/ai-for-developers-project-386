// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, test, vi } from 'vitest'
import App from './App'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false, media: query, onchange: null,
    addEventListener: vi.fn(), removeEventListener: vi.fn(),
    addListener: vi.fn(), removeListener: vi.fn(), dispatchEvent: vi.fn(),
  })),
})
afterEach(() => {
  cleanup()
  window.history.replaceState({}, '', '/')
})

test('посетитель видит описание сервиса и ссылку на запись', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Календарь звонков' })).toBeVisible()
  expect(screen.getByText('Выберите удобное время для 30-минутного звонка')).toBeVisible()
  expect(screen.getByRole('link', { name: 'Записаться на звонок' })).toHaveAttribute('href', '/book')
})

test('посетитель открывает страницу записи напрямую и видит возврат на главную', () => {
  window.history.replaceState({}, '', '/book')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Запись на звонок' })).toBeVisible()
  expect(screen.getByText('Выбор времени скоро появится')).toBeVisible()
  expect(screen.getByRole('link', { name: 'На главную' })).toHaveAttribute('href', '/')
})
