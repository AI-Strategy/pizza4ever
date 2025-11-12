const request = require('supertest');
const app = require('./index');

describe('Inventory and Vendor Order Endpoints', () => {
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

  // Inventory Tests
  it('should fetch inventory items', async () => {
    const res = await request(app)
      .get('/api/inventory')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new inventory item', async () => {
    const res = await request(app)
      .post('/api/inventory')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test Item',
        category: 'Dry Goods',
        onHand: '10 units',
        parLevel: '10 units',
        status: 'In Stock',
        lastUpdated: '1h ago'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should update an inventory item', async () => {
    const res = await request(app)
        .put('/api/inventory/1001')
        .set('Authorization', `Bearer ${token}`)
        .send({ onHand: '55 lbs' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.onHand).toEqual('55 lbs');
  });

  // Vendor Order Tests
  it('should fetch vendor orders', async () => {
    const res = await request(app)
      .get('/api/vendor-orders')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new vendor order', async () => {
    const res = await request(app)
        .post('/api/vendor-orders')
        .set('Authorization', `Bearer ${token}`)
        .send({ vendor: 'Test Vendor', date: 'Oct 27, 2023', status: 'Pending', total: 100.00 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should update a vendor order status', async () => {
    const res = await request(app)
        .put('/api/vendor-orders/PO-00752/status')
        .set('Authorization', `Bearer ${token}`)
        .send({ status: 'Shipped' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('Shipped');
  });
});
