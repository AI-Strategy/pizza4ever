const request = require('supertest');
const app = require('./index');

describe('Auth Endpoints', () => {
  it('should login successfully with correct credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'admin@pizza4ever.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('user');
  });

  it('should fail to login with incorrect credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'admin@pizza4ever.com',
        password: 'wrongpassword',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Invalid credentials');
  });
});
