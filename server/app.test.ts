import { once } from 'node:events'
import type { AddressInfo } from 'node:net'
import { expect, test } from 'vitest'
import { app } from './app.ts'

test('сервер запускается и отвечает', async () => {
  const server = app.listen(0, '127.0.0.1')

  try {
    await once(server, 'listening')

    const { port } = server.address() as AddressInfo
    const response = await fetch(`http://127.0.0.1:${port}/`)

    expect(response.status).toBe(200)
    expect(await response.text()).toBe('Hello World!')
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error)
        else resolve()
      })
    })
  }
})