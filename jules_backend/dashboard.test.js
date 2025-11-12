const request = require('supertest');
const app = require('./index');

describe('Dashboard Endpoints', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'admin@pizza4ever.com',
        password: 'password123',
      });
    token = res.body.token;
  });

  it('should return a 401 for /api/dashboard/stats without a token', async () => {
    const res = await request(app).get('/api/dashboard/stats');
    expect(res.statusCode).toEqual(401);
  });

  it('should return stats with a valid token', async () => {
    const res = await request(app)
      .get('/api/dashboard/stats')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('totalRevenue');
    expect(res.body).toHaveProperty('ordersToday');
  });

  it('should return sales trend data with a valid token', async () => {
    const res = await request(app)
      .get('/api/dashboard/sales-trend')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return order status data with a valid token', async () => {
    const res = await request(app)
      .get('/api/dashboard/order-status')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('pending');
    expect(res.body).toHaveProperty('inProgress');
  });
});
