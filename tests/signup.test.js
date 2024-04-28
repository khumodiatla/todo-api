const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const Database = require('../database');
const { disconnect } = require('mongoose');

const db = new Database();

describe('Test authentication - user signup', () => {
    beforeAll(async() => {
        await db.connect();
    });

    test('Should create and return a new user', (done) => {
        request(app)
            .post('/users/signup')
            .send({
                "username": "kane_silva",
                "email": "costasilva@gmail.com",
                "firstname": "kane",
                "lastname": "silva",
                "password": "123456sdd"
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('_id');
                done();
            })
    });

    test('Should return 400 if user with the given username already exist', (done) => {
        request(app)
        .post('/users/signup')
        .send({
            "username": "kane_silva",
            "email": "costasilva@gmail.com",
            "firstname": "kane",
            "lastname": "silva",
            "password": "123456sdd"
        })
        .expect(400, done)
    });

    test('Should return 400 if any of the required fields like email is missing', (done) => {
        request(app)
        .post('/users/signup')
        .send({
            "username": "kane_silva",
            "firstname": "kane",
            "lastname": "silva",
            "password": "123456sdd"
        })
        .expect(400, done)
    });

    afterAll(async() => {
        await User.deleteMany();
        await disconnect();
    });
});