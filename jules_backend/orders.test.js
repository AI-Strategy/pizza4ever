const request = require('supertest');
const app = require('./index');

describe('Order Management Endpoints', () => {
  let token;
  let newOrderId;

  beforeAll(async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'admin@pizza4ever.com',
        password: 'password123',
      });
    token = res.body.token;
  });

  it('should create a new order via /api/checkout', async () => {
    const res = await request(app)
      .post('/api/checkout')
      .send({
        customer: 'Test Customer',
        items: [{ name: 'Test Pizza', quantity: 1 }],
        total: 20.00,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    newOrderId = res.body.id.replace('#', '');
  });

  it('should show the new order in /api/orders', async () => {
    const res = await request(app)
      .get('/api/orders')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    const newOrder = res.body.new.find(order => order.id === `#${newOrderId}`);
    expect(newOrder).toBeDefined();
  });

  it('should accept an order', async () => {
    const res = await request(app)
      .post(`/api/orders/${newOrderId}/accept`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('In Progress');
  });

  it('should mark an order as ready', async () => {
    const res = await request(app)
      .post(`/api/orders/${newOrderId}/ready`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('Ready');
  });

  it('should complete an order', async () => {
    const res = await request(app)
      .post(`/api/orders/${newOrderId}/complete`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('Completed');
  });
});
