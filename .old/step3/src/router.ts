import express from 'express'

let router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

router.get('/receipts', (req, res) => {
  res.send()
})

export default router