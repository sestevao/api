import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe("Users", () => {
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async()=>{
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });


    it("Should be able to create a new user.", async() => {
        const response = await request(app).post("/users").send({
            name: "John Doe",
            email: "johndoe@example.com"
        });

        expect(response.status).toBe(201);
    });    


    it('Should not be able to create a user with the same email.', async () => {
        const response = await request(app).post('/users').send({
            email: 'johndoe@example.com',
            name: 'John Doe'
        });

        expect(response.status).toBe(400);
    });
})

