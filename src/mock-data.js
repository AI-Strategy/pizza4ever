// src/mock-data.js

export const orders = [
  {
    id: '#P4E-1259',
    customer: 'Jane D.',
    type: 'Delivery',
    status: 'New',
    time: '5 mins ago',
    items: [
      { name: 'Pepperoni Pizza', quantity: 1 },
      { name: 'Garlic Knots', quantity: 1 },
      { name: 'Coke', quantity: 1 },
    ],
    due: '15 min',
    notes: 'Extra cheese, no onions.',
    paid: true,
    total: 45.50,
  },
  {
    id: '#P4E-1258',
    customer: 'Mike R.',
    type: 'Pickup',
    status: 'New',
    time: '8 mins ago',
    items: [
      { name: 'Margherita Pizza', quantity: 1 },
      { name: 'Salad', quantity: 1 },
    ],
    due: '12 min',
    paid: true,
    total: 28.00,
  },
  {
    id: '#P4E-1257',
    customer: 'Sarah L.',
    type: 'Delivery',
    status: 'New',
    time: '10 mins ago',
    items: [
      { name: 'Supreme Pizza', quantity: 2 },
      { name: 'Wings', quantity: 1 },
      { name: 'Sprite', quantity: 2 },
    ],
    due: '20 min',
    paid: false,
    total: 62.75,
  },
  {
    id: '#P4E-1256',
    customer: 'Tom H.',
    type: 'Pickup',
    status: 'In Progress',
    time: 'Cooking: 5/15 min',
    items: [{ name: 'BBQ Chicken Pizza', quantity: 1 }],
    total: 21.50,
  },
  {
    id: '#P4E-1255',
    customer: 'Chris P.',
    type: 'Delivery',
    status: 'In Progress',
    time: 'Cooking: 12/20 min',
    items: [
        { name: 'Veggie Pizza', quantity: 1 },
        { name: 'Coke', quantity: 1 },
    ],
    total: 19.99,
  },
  {
    id: '#P4E-1254',
    customer: 'Anna K.',
    type: 'Pickup',
    status: 'Ready',
    time: 'Ready for 3 min',
    items: [{ name: 'Cheese Pizza', quantity: 1 }],
    total: 15.00,
  },
];

export const salesData = {
  daily: [520, 780, 650, 920, 850, 1100, 950],
  weekly: [3500, 4200, 3900, 5000],
  monthly: [15000, 18000, 16500, 21000, 20000, 23000, 22000, 25000, 24000, 27000, 26000, 30000],
};

export const orderStatusData = {
  pending: 12,
  inProgress: 8,
  delivery: 5,
  completed: 99,
};

export const employees = [
  { id: 1, name: 'Jane D.', role: 'Cook', avatar: '...' },
  { id: 2, name: 'John S.', role: 'Cook', avatar: '...' },
  { id: 3, name: 'Mike R.', role: 'Driver', avatar: '...' },
  { id: 4, name: 'Sarah L.', role: 'Driver', avatar: '...' },
  { id: 5, name: 'Emily C.', role: 'Front of House', avatar: '...' },
  { id: 6, name: 'David P.', role: 'Front of House', avatar: '...' },
];

export const schedule = {
    'Cook': {
        'Mon, Oct 28': [{ employeeId: 1, shift: '9AM - 5PM' }],
        'Tue, Oct 29': [{ employeeId: 2, shift: '9AM - 5PM' }],
        'Wed, Oct 30': [{ employeeId: 1, shift: '9AM - 5PM' }],
        'Thu, Oct 31': [{ employeeId: 2, shift: '9AM - 5PM' }],
        'Fri, Nov 1': [{ employeeId: 1, shift: '11AM - 7PM' }],
        'Sat, Nov 2': [{ employeeId: 2, shift: '11AM - 7PM' }],
        'Sun, Nov 3': [{ employeeId: null, shift: '11AM - 7PM' }],
    },
    'Driver': {
        'Mon, Oct 28': [{ employeeId: 3, shift: '5PM - 11PM' }],
        'Tue, Oct 29': [{ employeeId: 4, shift: '5PM - 11PM' }],
        'Wed, Oct 30': [{ employeeId: 3, shift: '5PM - 11PM' }],
        'Thu, Oct 31': [{ employeeId: null, shift: '5PM - 11PM' }],
        'Fri, Nov 1': [{ employeeId: 4, shift: '5PM - 11PM' }],
        'Sat, Nov 2': [{ employeeId: 3, shift: '5PM - 11PM' }],
        'Sun, Nov 3': [{ employeeId: 4, shift: '5PM - 11PM' }],
    },
    'Front of House': {
        'Mon, Oct 28': [{ employeeId: 5, shift: '12PM - 8PM' }],
        'Tue, Oct 29': [{ employeeId: 5, shift: '12PM - 8PM' }],
        'Wed, Oct 30': [{ employeeId: 6, shift: '12PM - 8PM' }],
        'Thu, Oct 31': [{ employeeId: 5, shift: '12PM - 8PM' }],
        'Fri, Nov 1': [{ employeeId: 6, shift: '12PM - 8PM' }],
        'Sat, Nov 2': [{ employeeId: 5, shift: '12PM - 8PM' }],
        'Sun, Nov 3': [{ employeeId: 6, shift: '12PM - 8PM' }],
    }
};

export const inventory = {
    'Dough': { level: 85, status: 'Sufficient' },
    'Cheese': { level: 60, status: 'Sufficient' },
    'Tomato Sauce': { level: 35, status: 'Low' },
    'Pepperoni': { level: 15, status: 'Critical' },
};

export const menuItems = [
  {
    name: 'The Grizzly Peak',
    description: 'A beast of a pizza with pepperoni, sausage, and bacon. You\'ll bearly finish it!',
    price: '$24.99',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhBHIau7Hnsg2Fmc4DM6Koy-Uqdk36wSOEYND0z5-Ld0I23fp6Sm5EP9guU_9fnEeNQe7MBwdsqtzVBKdrE-CeJufbWTdq-0xfc2okMLE0j3rrRwic-mujR_mo14Mtmw-gtuJM5SjngEwsOP4nE1QvfzU9hvuOPJI8ASt1b8MaqzXJcYZyL-KSr8nqFyPMxk4GVTd6jcXkYEjmeFe-UKGJXVCHdN3DfvPahjAzkhogi2vwAX3ZYsj25AXnUncV_0Z6XE6Ap0EJGhE',
  },
  {
    name: 'Alpine Veggie',
    description: 'A mountain of fresh veggies including peppers, onions, mushrooms, and olives.',
    price: '$21.99',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvLkgqT57IMy3--gluU66p0jVWSWYwBj7k73CVgaLP0V6Fu9CsxdOtZJi3aRdWGc3uA3vqg_4jeSBm36D_TOUeFGRyeMPsTZpTrDzGV06Z1fF4MPmqmtqnxZdmDKj0LklNMOvt1ghINbXwRW_mivtoAZgymehnltOKXBPVR6Fz_AIlNIDujrueDcU2_k6QL33qP2rcbC0wFTSnRwcQo__O-EILJheTY9m1oXXPO2vAWtkX9M-FaMyZAKQRDCUvBbRhXQWHiWgqt1U',
  },
  {
    name: 'Tahoe Sunset',
    description: 'A beautiful BBQ chicken pizza with red onions and cilantro. It\'s un-grill-ievable!',
    price: '$23.50',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkvyrdoFf-THD_xiS2_dAzyejGSGV0EAasa75RWSNG0LEAz1tXUslh5HPwYe3a6dYsxEmh8TMjXOkM8hC9wIXJsFk5txF2zSgWw7ZDRvnXarSOKza1vIHgjitJGHgzIm5H_BRdzJ-7OxTEu-JHE1D1CmGVfLdjXqb3dxMtMfR5JNHytEGSUdo_rw6c3vgQpQEEPs4DaQDoEoB7SB3I1xfiIYJDOCrFHzFHBrhrBqV9Gbkf3h711UF5y83dmaN7MQAPApRFNY_aCGE',
  },
  {
    name: 'Ponderosa Pesto',
    description: 'A delightful chicken and pesto pizza with sun-dried tomatoes and pine nuts.',
    price: '$22.99',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFgLDaepG-vs3BPoVzEhgxb7sYxjJuViEAdY6m1GMrRfiV76f-ujarxCqz1PX8je-HmnbW70OIP_WaixE842ejan3lNzEMn_lgj7V58FUDhoxniGTLYRHad0vCZTKIS7L_-W5ljlkGhg_Y9zCTE-MYr22Uj91Vm3nSLg2YGwR7dPKXFRDpxMnTHl4GEHJy-pKHr5VUSUJIC6DAa9lEqYvU6A7uxieb2ZdQB-JaXUoT6qY1UlWu5UmQXbBsif5_NK6KaLisN-sabVs',
  },
];
