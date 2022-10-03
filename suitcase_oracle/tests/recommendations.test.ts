import app from '../src/index'
import request from 'supertest'

it(`I want to receive 1 tshirt & 1 pair of socks and 1 panties per day recommendation`, async () => {
    // Arrange
    const expectedClothes = ['2 tshirt', '2 pair of socks', '2 panties']
    // Act
    const response = await request(app).get('/recommendation?from=2022-10-03&to=2022-10-05')
    // Assert
    expect(response.body).toStrictEqual(expectedClothes)
})