import app from '../src/index'
import request from 'supertest'

// TEST SERVERS
// .NET - TestServer
// Python - fastapi.testclient
// GO - net/http/httptest and apitest

it(`When GET /pong then return pong`, async () => {
  expect(1).toBe(1)
})