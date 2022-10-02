import express from 'express'
import helloRouter from './router'

const app = express()
const port = 3000

app.use(helloRouter)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
});