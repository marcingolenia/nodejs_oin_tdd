import app from "../src/index"
import request from 'supertest'

it(`
When GET /receipts 
Then Status Code is 200
`, async () => {
  const response = await request(app).get('/receipts')
  expect(response.statusCode).toBe(200)
})