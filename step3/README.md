# Step 3
Req: Support 2 operations
1. List receipts
2. Pay receipt by id

* receipts.spec.ts
```
When GET /receipts 
Then Status Code is 200

    expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 404

       7 | `, async () => {
       8 |   const response = await request(app).get('/receipts')
    >  9 |   expect(response.statusCode).toBe(200)
         |                               ^
      10 | })
```
Why write such a simple tests? 

Decision to be made:
1. Choose the place to keep my tests for a requirement, or find the existing one, so I can modify them. 
2. The name of the ressource in my rest API.
3. New router or existing one?

And a problem! Jest test parallelization - ports are in use. 

```
listen EADDRINUSE: address already in use :::3001

       7 | app.use(helloRouter)
       8 |
    >  9 | app.listen(port, () => {
         |     ^
      10 |   return console.log(`Express is listening at http://localhost:${port}`)
      11 | })
```
3 decisions to be mader and 1 problem to deal with. Is it worth a test? I think so.