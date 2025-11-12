import { useState, useEffect } from 'react';
import KanbanBoard from '../components/KanbanBoard';
import KanbanColumn from '../components/KanbanColumn';
import OrderCard from '../components/OrderCard';
import { orders as initialOrders } from '../mock-data';

let orderCounter = 1260; // Start from a number higher than the mock data

export default function Dashboard() {
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prevOrders => {
        let newOrdersList = [...prevOrders];
        let changed = false;

        // Try to advance an order from "In Progress" to "Ready"
        const inProgressIndex = newOrdersList.findIndex(o => o.status === 'In Progress');
        if (inProgressIndex !== -1 && Math.random() > 0.7) { // 30% chance
          const order = newOrdersList[inProgressIndex];
          newOrdersList[inProgressIndex] = { ...order, status: 'Ready', time: 'Ready for 0 min' };
          changed = true;
        }

        // If no order was advanced, try to move one from "New" to "In Progress"
        if (!changed) {
            const newIndex = newOrdersList.findIndex(o => o.status === 'New');
            if (newIndex !== -1 && Math.random() > 0.5) { // 50% chance
                const order = newOrdersList[newIndex];
                newOrdersList[newIndex] = { ...order, status: 'In Progress', time: 'Cooking: 0/15 min' };
                changed = true;
            }
        }

        // Update timers for all orders
        newOrdersList = newOrdersList.map(order => {
            if (order.status === 'Ready' && order.time.startsWith('Ready for')) {
                const minutes = parseInt(order.time.match(/(\\d+)/)[0] || '0') + 1;
                return { ...order, time: `Ready for ${minutes} min`};
            }
            if (order.status === 'In Progress' && order.time && order.time.startsWith('Cooking')) {
                const parts = order.time.match(/(\\d+)\/(\\d+)/);
                if (parts) {
                    let current = parseInt(parts[1]);
                    const total = parseInt(parts[2]);
                    if (current < total) {
                        return { ...order, time: `Cooking: ${current + 1}/${total} min` };
                    }
                }
            }
            if (order.status === 'New' && order.time.endsWith('ago')) {
                 const minutes = parseInt(order.time.match(/(\\d+)/)[0] || '0') + 1;
                 return { ...order, time: `${minutes} mins ago`};
            }
            return order;
        });

        // Add a new order occasionally
        if (Math.random() > 0.85) { // 15% chance
          const newOrder = {
            id: `#P4E-${orderCounter++}`,
            customer: 'New Customer',
            type: Math.random() > 0.5 ? 'Delivery' : 'Pickup',
            status: 'New',
            time: '1 min ago',
            items: Math.floor(Math.random() * 5) + 1,
            due: `${Math.floor(Math.random() * 15) + 10} min`,
            paid: Math.random() > 0.3,
          };
          newOrdersList = [newOrder, ...newOrdersList];
        }

        return newOrdersList;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const newOrders = orders.filter(order => order.status === 'New');
  const inProgressOrders = orders.filter(order => order.status === 'In Progress');
  const readyOrders = orders.filter(order => order.status === 'Ready');

  return (
    <KanbanBoard>
      <KanbanColumn title="New Orders" count={newOrders.length}>
        {newOrders.map(order => <OrderCard key={order.id} order={order} />)}
      </KanbanColumn>
      <KanbanColumn title="In Progress" count={inProgressOrders.length}>
        {inProgressOrders.map(order => <OrderCard key={order.id} order={order} />)}
      </KanbanColumn>
      <KanbanColumn title="Ready" count={readyOrders.length}>
        {readyOrders.map(order => <OrderCard key={order.id} order={order} />)}
      </KanbanColumn>
    </KanbanBoard>
  );
}
