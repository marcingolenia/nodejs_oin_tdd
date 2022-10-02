import app from "../src/index"
import request from 'supertest'

it(`
When GET / 
Then Hello World!
`, async () => {
  const response = await request(app).get('/')
  expect(response.text).toBe('Hello World!')
})

// OR

it(`
When GET / 
Then Hello World!
`, () => 
  request(app)
    .get('/')
    .then(response => { 
      expect(response.text).toBe('Hello world')
    })
)