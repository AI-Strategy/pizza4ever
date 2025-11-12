const request = require('supertest');
const app = require('./index');

describe('Scheduling Endpoints', () => {
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

  it('should fetch the schedule', async () => {
    const res = await request(app)
      .get('/api/schedule')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new shift', async () => {
    const res = await request(app)
      .post('/api/schedule/shift')
      .set('Authorization', `Bearer ${token}`)
      .send({
        role: 'Cook',
        day: 'Mon, Nov 4',
        employeeId: null,
        time: '9AM - 5PM',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should update a shift', async () => {
    const res = await request(app)
        .put('/api/schedule/shift/1')
        .set('Authorization', `Bearer ${token}`)
        .send({ employeeId: 2 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.employeeId).toEqual(2);
  });

  it('should fetch time-off requests', async () => {
    const res = await request(app)
      .get('/api/time-off/requests')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new time-off request', async () => {
    const res = await request(app)
        .post('/api/time-off/requests')
        .set('Authorization', `Bearer ${token}`)
        .send({ employeeId: 1, startDate: '2024-11-05', endDate: '2024-11-05', reason: 'Vacation' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.status).toEqual('Pending');
  });

  it('should update a time-off request status', async () => {
    const res = await request(app)
        .put('/api/time-off/requests/1/status')
        .set('Authorization', `Bearer ${token}`)
        .send({ status: 'Approved' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('Approved');
  });
});
