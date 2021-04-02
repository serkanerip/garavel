import { app } from '../../app';
import request = require("supertest");

describe('Clickup PingController', () => {
    it('Request /ping should return Pong!', async () => {
        const result = await request(app).get('/clickup/ping').send();

        expect(result.status).toBe(200);
        expect(result.body.data).toBe('Pong!');
    });
});
