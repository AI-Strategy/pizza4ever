const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;
const data = require('./data');

const JWT_SECRET = 'a-super-secret-key-that-should-be-in-an-env-file';

app.use(cors());
app.use(express.json());

const mockUser = {
  email: 'admin@pizza4ever.com',
  password: 'password123',
  name: 'Admin User',
  role: 'General Manager',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR1Pe3Vla00vAU3yulcaH_efxTZiUz4XwHjSjT-CPs6n1rt1rL9FsofCj1rOSlz6PoQfdEniLJ6KoApPFbt8LRQH4JUSzSPz1pF4-Db6HMOYJD6ywYKvtO8Hrnxy27XB9RAhUjSDe4AW2b1GkwU0MMG_KTkiLgI08f3Q85Q10vOIYtHGQGcByH6nZ_b993EciLeWB81joE7vdWil1GUksmax60--bnuJGlo1auYQW053WQsnpaWKoDOu7u3suup3nzMbR40tdndvI'
};

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};


app.get('/', (req, res) => {
  res.send('Jules Backend is running!');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === mockUser.email && password === mockUser.password) {
    const token = jwt.sign({ email: mockUser.email, name: mockUser.name, role: mockUser.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({
      user: {
        email: mockUser.email,
        name: mockUser.name,
        role: mockUser.role,
        avatar: mockUser.avatar
      },
      token,
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Checkout Endpoint (Public)
app.post('/api/checkout', (req, res) => {
    const newOrder = req.body;

    // Basic validation
    if (!newOrder || !newOrder.items || !newOrder.total) {
        return res.status(400).json({ message: 'Invalid order data' });
    }

    // Generate a new order ID
    const newOrderId = `#P4E-${Math.floor(Math.random() * 10000)}`;

    const order = {
        id: newOrderId,
        customer: newOrder.customer || 'Guest',
        type: newOrder.type || 'Pickup',
        status: 'New',
        time: 'just now',
        items: newOrder.items,
        due: '15 min', // mock due time
        paid: true, // assume payment is handled
        total: newOrder.total,
        notes: newOrder.notes || ''
    };

    data.orders.unshift(order); // Add to the beginning of the list
    res.status(201).json(order);
});


// Dashboard Endpoints
app.get('/api/dashboard/stats', authenticateToken, (req, res) => {
    // In a real app, this would be calculated
    const totalRevenue = data.orders.filter(o => o.paid).reduce((sum, o) => sum + o.total, 0);
    const ordersToday = data.orders.length;
    const reservations = 32; // mock
    const avgOrderValue = totalRevenue / (ordersToday || 1);

    res.json({
        totalRevenue: { value: totalRevenue, change: 2.5 },
        ordersToday: { value: ordersToday, change: -1.2 },
        reservations: { value: reservations, change: 10 },
        avgOrderValue: { value: avgOrderValue.toFixed(2), change: 3.7 }
    });
});

app.get('/api/dashboard/sales-trend', authenticateToken, (req, res) => {
    const { period } = req.query; // daily, weekly, monthly
    res.json(data.salesData[period] || data.salesData.daily);
});

app.get('/api/dashboard/order-status', authenticateToken, (req, res) => {
    res.json(data.orderStatusData);
});

app.get('/api/orders', authenticateToken, (req, res) => {
    const categorizedOrders = {
        new: data.orders.filter(o => o.status === 'New'),
        inProgress: data.orders.filter(o => o.status === 'In Progress'),
        ready: data.orders.filter(o => o.status === 'Ready'),
    };
    res.json(categorizedOrders);
});

// Order Management Endpoints
const findOrder = (orderId) => {
    // The '#' is part of the ID in the mock data, but might not be URL-safe.
    // Let's be lenient and find the order with or without the leading '#'.
    const idToFind = orderId.startsWith('#') ? orderId : `#${orderId}`;
    return data.orders.find(o => o.id === idToFind);
}

app.post('/api/orders/:orderId/accept', authenticateToken, (req, res) => {
    const order = findOrder(req.params.orderId);
    if (order) {
        order.status = 'In Progress';
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

app.post('/api/orders/:orderId/ready', authenticateToken, (req, res) => {
    const order = findOrder(req.params.orderId);
    if (order) {
        order.status = 'Ready';
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

app.post('/api/orders/:orderId/complete', authenticateToken, (req, res) => {
    const order = findOrder(req.params.orderId);
    if (order) {
        order.status = 'Completed';
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});


app.listen(port, () => {
  console.log(`Jules backend listening at http://localhost:${port}`);
});
