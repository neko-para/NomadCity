import { createServer } from 'vite'

const server = await createServer({
  configFile: './vite.config.ts'
})

console.log('http://localhost:5173/')

await server.listen()
