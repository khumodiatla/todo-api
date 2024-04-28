const request = require('supertest');
const app = require('../app');
const Database = require('../database');

const db = new Database();

describe('Test authentication - user signin', () => {
    beforeAll(async() => {
        await db.connect();
    });

    test('Should signin user and generate a token', (done) => {
        request(app)
            .post('/users/signin')
            .send({
                "username": "costa_silva",
                "password": "123456sdd"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('_id');
                expect(res.body).toHaveProperty('token');
                done();
            })
    });

    test('Should return 400 if user with the given username does not exist', (done) => {
        request(app)
            .post('/users/signin')
            .send({
                "username": "dani_silva",
                "password": "123456sdd"
            })
            .expect(404, done);
    });

    test('Should return 400 if any of the required fields like password is missing', (done) => {
        request(app)
            .post('/users/signin')
            .send({
                "username": "dani_silva",
            })
            .expect(400, done);
    });

    test('Should return 401 if user password does not match the hashed password', (done) => {
        request(app)
            .post('/users/signin')
            .send({
                "username": "costa_silva",
                "password": "12344"
            })
            .expect(401, done);
    });

    afterAll(async() => {
        await db.disconnect();
    });
});