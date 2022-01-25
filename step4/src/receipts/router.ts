import express from 'express'
import { receipts } from './data'
import { mapToDto } from './receiptDto'

let router = express.Router()

router.get('/receipts', (req, res) => {
  res.send(receipts.map(mapToDto))
})

export default router