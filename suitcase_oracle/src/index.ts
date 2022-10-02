import express from 'express'

const app = express()
const port = 3001

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
}

export default app