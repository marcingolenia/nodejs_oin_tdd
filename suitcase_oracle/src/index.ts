import express from 'express'
import RecommendationRouter from './recommendation/router'

const app = express()
const port = 3002

app.use(RecommendationRouter)
app.get('/ping', (_, res) => res.send('pong'))

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
}

export default app