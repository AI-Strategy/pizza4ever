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

// Scheduling Endpoints
app.get('/api/schedule', authenticateToken, (req, res) => {
    // In a real app, you'd likely group by day or role.
    // For now, we'll return the flat list of shifts.
    res.json(data.shifts);
});

app.post('/api/schedule/shift', authenticateToken, (req, res) => {
    const newShift = req.body;
    newShift.id = data.shifts.length + 1;
    data.shifts.push(newShift);
    res.status(201).json(newShift);
});

app.put('/api/schedule/shift/:shiftId', authenticateToken, (req, res) => {
    const shift = data.shifts.find(s => s.id === parseInt(req.params.shiftId));
    if (shift) {
        Object.assign(shift, req.body);
        res.json(shift);
    } else {
        res.status(404).json({ message: 'Shift not found' });
    }
});

// Time-Off Endpoints
app.get('/api/time-off/requests', authenticateToken, (req, res) => {
    res.json(data.timeOffRequests);
});

app.post('/api/time-off/requests', authenticateToken, (req, res) => {
    const newRequest = req.body;
    newRequest.id = data.timeOffRequests.length + 1;
    newRequest.status = 'Pending'; // Default status
    data.timeOffRequests.push(newRequest);
    res.status(201).json(newRequest);
});

app.put('/api/time-off/requests/:requestId/status', authenticateToken, (req, res) => {
    const request = data.timeOffRequests.find(r => r.id === parseInt(req.params.requestId));
    if (request) {
        request.status = req.body.status; // 'Approved' or 'Denied'
        res.json(request);
    } else {
        res.status(404).json({ message: 'Time-off request not found' });
    }
});

// Inventory Endpoints
app.get('/api/inventory', authenticateToken, (req, res) => {
    res.json(data.inventoryItems);
});

app.post('/api/inventory', authenticateToken, (req, res) => {
    const newItem = req.body;
    newItem.id = data.inventoryItems.length + 1000; // simple id generation
    data.inventoryItems.push(newItem);
    res.status(201).json(newItem);
});

app.put('/api/inventory/:itemId', authenticateToken, (req, res) => {
    const item = data.inventoryItems.find(i => i.id === parseInt(req.params.itemId));
    if (item) {
        Object.assign(item, req.body);
        res.json(item);
    } else {
        res.status(404).json({ message: 'Inventory item not found' });
    }
});

// Vendor Order Endpoints
app.get('/api/vendor-orders', authenticateToken, (req, res) => {
    res.json(data.vendorOrders);
});

app.post('/api/vendor-orders', authenticateToken, (req, res) => {
    const newOrder = req.body;
    newOrder.id = `PO-00${data.vendorOrders.length + 755}`; // simple id generation
    data.vendorOrders.unshift(newOrder);
    res.status(201).json(newOrder);
});

app.put('/api/vendor-orders/:orderId/status', authenticateToken, (req, res) => {
    const order = data.vendorOrders.find(o => o.id === req.params.orderId);
    if (order) {
        order.status = req.body.status;
        res.json(order);
    } else {
        res.status(404).json({ message: 'Vendor order not found' });
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


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Jules backend listening at http://localhost:${port}`);
  });
}

module.exports = app;
