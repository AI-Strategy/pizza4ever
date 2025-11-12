import { useEffect, useState } from 'react';

const OrderCard = ({ order, onAccept, onReady, onComplete }) => {
  const handleAccept = () => onAccept(order.id);
  const handleReady = () => onReady(order.id);
  const handleComplete = () => onComplete(order.id);

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-md border border-transparent hover:border-primary/50 transition-all">
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <p className="font-bold text-slate-800 dark:text-white text-lg">{order.id}</p>
          <p className="text-slate-600 dark:text-slate-300">{order.customer}</p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${order.type === 'Delivery' ? 'bg-[#3498DB]/20 text-[#3498DB]' : 'bg-[#9B59B6]/20 text-[#9B59B6]'}`}>
          <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
          <span>{order.type}</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
        <span>{order.time}</span>
        <span className="font-semibold">{order.items.length} Items</span>
        {order.due && <span>Due in: {order.due}</span>}
      </div>
      {order.items.length > 0 && (
        <div className="border-t border-slate-700 pt-3 mb-4">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            {order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
          </p>
          {order.notes && <p className="text-slate-600 dark:text-slate-300 text-sm mt-1"><span className="font-semibold">Notes:</span> {order.notes}</p>}
        </div>
      )}
      <div className="flex justify-between items-center">
        {order.paid ? <span className="text-green-400 font-bold">PAID</span> : <span className="text-red-400 font-bold">UNPAID</span>}
        {order.status === 'New' && <button onClick={handleAccept} className="flex w-full max-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold">Accept Order</button>}
        {order.status === 'In Progress' && <button onClick={handleReady} className="flex w-full max-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3498DB] text-white text-sm font-bold">Mark as Ready</button>}
        {order.status === 'Ready' && <button onClick={handleComplete} className="flex w-full max-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-600 hover:bg-slate-700 text-white text-sm font-bold">Complete Order</button>}
      </div>
    </div>
  );
};

const OrderColumn = ({ title, orders, countColor, ...props }) => (
    <div className="flex-shrink-0 w-96 flex flex-col gap-4">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold px-2 flex items-center gap-2">
            {title}
            <span className={`text-sm font-bold px-2 py-1 rounded-full ${countColor}`}>
                {orders.length}
            </span>
        </h2>
        <div className="flex flex-col gap-4">
            {orders.map(order => <OrderCard key={order.id} order={order} {...props} />)}
        </div>
    </div>
);

export default function AllOrders() {
    const [orders, setOrders] = useState({ new: [], inProgress: [], ready: [] });

    const fetchOrders = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:3001/api/orders', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setOrders(data);
            }
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 5000); // Refresh every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const updateOrderStatus = async (orderId, action) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3001/api/orders/${orderId.replace('#', '')}/${action}`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                fetchOrders(); // Re-fetch orders to update UI
            }
        } catch (error) {
            console.error(`Failed to ${action} order:`, error);
        }
    };

    const handleAccept = (orderId) => updateOrderStatus(orderId, 'accept');
    const handleReady = (orderId) => updateOrderStatus(orderId, 'ready');
    const handleComplete = (orderId) => updateOrderStatus(orderId, 'complete');

    return (
        <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
            <header className="flex justify-between items-center gap-4 px-6 py-3 border-b border-slate-700">
                {/* Header content from design */}
            </header>
            <div className="flex-1 flex gap-6 p-6 overflow-x-auto">
                <OrderColumn title="New Orders" orders={orders.new || []} countColor="bg-primary/20 text-primary" onAccept={handleAccept} />
                <OrderColumn title="In Progress" orders={orders.inProgress || []} countColor="bg-[#3498DB]/20 text-[#3498DB]" onReady={handleReady} />
                <OrderColumn title="Ready" orders={orders.ready || []} countColor="bg-[#27AE60]/20 text-[#27AE60]" onComplete={handleComplete} />
            </div>
        </main>
    );
}
