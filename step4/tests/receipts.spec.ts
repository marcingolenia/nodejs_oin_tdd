import app from "../src/index"
import request from 'supertest'

it(`
When GET /receipts 
Then Status Code is 200
`, async () => {
  const response = await request(app).get('/receipts')
  expect(response.statusCode).toBe(200)
})

it(`
WHEN GET/ receipts
Then List of receipts is retrieved with {Id, IssueDate, Amount, PayedOn}`
, async () => {
  // Arrange + Act
  const response = await request(app).get('/receipts')
  // Asssert
  const receipts: Receipt[] = response.body
  expect(receipts.length).toBeGreaterThan(0)
  receipts.forEach((receipt) => {
    expect(receipt.Id).not.toBeNull()
    expect(receipt.Amount).toBeDefined()
    expect(receipt.IssueDate).toBeDefined()
    expect(receipt.PayedOn).toBeDefined()
  })
})