import {Router} from 'express'
import {findClothes} from './domain'

let router = Router()

router.get('/recommendation', (req, res) => {
    const from = new Date(req.query.from as string)
    const to = new Date(req.query.to as string)
    res.send(findClothes(from, to))
  })

export default router