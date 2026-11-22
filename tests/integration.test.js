
const request = require('supertest');
const app = require('../server');

describe('Student Management System Integration Tests', () => {

    test('Homepage should return HTTP 200', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<!DOCTYPE html>');
    });

    test('Contact page should return HTTP 200', async () => {
        const response = await request(app).get('/contact.html');

        expect(response.statusCode).toBe(200);
    });

    test('Login page should return HTTP 200', async () => {
        const response = await request(app).get('/login.html');

        expect(response.statusCode).toBe(200);
    });

    test('Registration page should return HTTP 200', async () => {
        const response = await request(app).get('/register.html');

        expect(response.statusCode).toBe(200);
    });

    test('API health endpoint should return HTTP 200', async () => {
        const response = await request(app).get('/api/health');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
    });

});
