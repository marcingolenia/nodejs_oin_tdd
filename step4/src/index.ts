import express from 'express'
import helloRouter from './router'
import receiptsRouter from './receipts/router'

const app = express()
const port = 3001

app.use(helloRouter)
app.use(receiptsRouter)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
}

export default app