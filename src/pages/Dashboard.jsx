import { useState, useEffect, useCallback } from 'react';
import { orders as initialOrders } from '../mock-data';

// Helper function to generate a new random order
const generateNewOrder = (currentOrders) => {
    const newIdNumber = Math.max(...currentOrders.map(o => parseInt(o.id.split('-')[1]))) + 1;
    const customerNames = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'Elijah', 'Charlotte', 'William', 'Sophia'];
    const pizzaTypes = ['Pepperoni', 'Margherita', 'Supreme', 'Veggie', 'Hawaiian', 'BBQ Chicken'];

    return {
        id: `#P4E-${newIdNumber}`,
        customer: `${customerNames[Math.floor(Math.random() * customerNames.length)]} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}.`,
        type: Math.random() > 0.5 ? 'Delivery' : 'Pickup',
        status: 'New',
        time: '1 min ago',
        items: [{ name: pizzaTypes[Math.floor(Math.random() * pizzaTypes.length)], quantity: 1 }],
        due: `${Math.floor(Math.random() * 10) + 10} min`,
        paid: Math.random() > 0.2,
        cookTime: Math.floor(Math.random() * 10) + 10, // Cook time between 10-20 seconds for simulation
        createdAt: Date.now(),
    };
};


export default function Dashboard() {
  const [orders, setOrders] = useState(initialOrders.map(o => ({...o, cookTime: Math.floor(Math.random() * 10) + 10, createdAt: Date.now() - (Math.random() * 5 * 60000) })));
  const [lastUpdated, setLastUpdated] = useState('just now');

  // Main simulation tick
  const runSimulationTick = useCallback(() => {
    setOrders(currentOrders => {
        let updatedOrders = [...currentOrders];

        // 1. Process orders in progress
        updatedOrders = updatedOrders.map(order => {
            if (order.status === 'In Progress') {
                const elapsedTime = (Date.now() - order.startTime) / 1000;
                if (elapsedTime >= order.cookTime) {
                    return { ...order, status: 'Ready', time: 'Ready just now' };
                }
                return {...order, time: `Cooking: ${Math.floor(elapsedTime)}/${order.cookTime}s`};
            }
            return order;
        });

        // 2. Occasionally add a new order
        if (Math.random() > 0.8) { // 20% chance to add a new order each tick
            const newOrder = generateNewOrder(updatedOrders);
            updatedOrders.push(newOrder);
        }

        // Update relative time for all orders
        return updatedOrders.map(order => {
            if (order.status === 'New' || order.status === 'Ready') {
                const minutesAgo = Math.floor((Date.now() - order.createdAt) / 60000);
                if(minutesAgo < 1) return {...order, time: 'just now'};
                return {...order, time: `${minutesAgo} min ago`};
            }
            return order;
        });
    });
    setLastUpdated('just now');
  }, []);

  useEffect(() => {
    const interval = setInterval(runSimulationTick, 2000); // Run simulation every 2 seconds
    return () => clearInterval(interval);
  }, [runSimulationTick]);

  const handleAcceptOrder = (orderId) => {
    setOrders(currentOrders =>
      currentOrders.map(o =>
        o.id === orderId ? { ...o, status: 'In Progress', startTime: Date.now() } : o
      )
    );
  };

  const handleMarkAsReady = (orderId) => {
    setOrders(currentOrders =>
      currentOrders.map(o =>
        o.id === orderId ? { ...o, status: 'Ready', time: 'Ready just now', createdAt: Date.now() } : o
      )
    );
  };

  const handleCompleteOrder = (orderId) => {
    setOrders(currentOrders => currentOrders.filter(o => o.id !== orderId));
  };

  const newOrders = orders.filter(order => order.status === 'New');
  const inProgressOrders = orders.filter(order => order.status === 'In Progress');
  const readyOrders = orders.filter(order => order.status === 'Ready');

  return (
    <>
      <header className="flex justify-between items-center gap-4 px-6 py-3 border-b border-slate-700 bg-background-light dark:bg-background-dark">
        <div className="flex flex-wrap justify-between gap-3 flex-1">
          <div className="flex min-w-72 flex-col gap-2">
            <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">Real-time Order Dashboard</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Last updated: {lastUpdated}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 dark:text-slate-300 text-sm">Accepting New Orders</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10">
                <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10">
                <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      <div className="px-6 py-4 border-b border-slate-700 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-grow p-4 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-blue-400">ac_unit</span>
                <div>
                    <p className="text-slate-900 dark:text-white font-bold">Heavy Snowfall Expected</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Lake Tahoe: 8-12 inches. Expect increased delivery volume and potential delays.</p>
                </div>
            </div>
            <div className="flex-grow p-4 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-primary">celebration</span>
                <div>
                    <p className="text-slate-900 dark:text-white font-bold">Holiday: President's Day</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Holiday hours are in effect. Anticipate higher than normal order volumes all day.</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex items-start gap-4">
                <div className="bg-primary/20 text-primary p-3 rounded-lg"><span className="material-symbols-outlined">schedule</span></div>
                <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg. Delivery Time</p>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold">28 min</p>
                </div>
            </div>
             <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex items-start gap-4">
                <div className="bg-primary/20 text-primary p-3 rounded-lg"><span className="material-symbols-outlined">shopping_bag</span></div>
                <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg. Pick-up Time</p>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold">15 min</p>
                </div>
            </div>
             <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex items-start gap-4">
                <div className="bg-primary/20 text-primary p-3 rounded-lg"><span className="material-symbols-outlined">receipt_long</span></div>
                <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Orders Per Hour</p>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold">12</p>
                </div>
            </div>
             <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex items-start gap-4">
                <div className="bg-primary/20 text-primary p-3 rounded-lg"><span className="material-symbols-outlined">attach_money</span></div>
                <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Today's Sales</p>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold">$1,234.56</p>
                </div>
            </div>
        </div>

        <label className="flex flex-col min-w-40 h-12 w-full max-w-md mt-4">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-base font-normal leading-normal" placeholder="Search by Order ID or Customer Name" value=""/>
            </div>
        </label>
      </div>

      <div className="flex-1 flex gap-6 p-6 overflow-x-auto">
        <div className="flex-shrink-0 w-96 flex flex-col gap-4">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 flex items-center gap-2">New Orders <span className="bg-primary/20 text-primary text-sm font-bold px-2 py-1 rounded-full">{newOrders.length}</span></h2>
            <div className="flex flex-col gap-4">
                {newOrders.map(order => (
                    <div key={order.id} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-md border border-primary/50">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex flex-col">
                                <p className="font-bold text-slate-800 dark:text-white text-lg">{order.id}</p>
                                <p className="text-slate-600 dark:text-slate-300">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-2 bg-[#3498DB]/20 text-[#3498DB] px-3 py-1 rounded-full text-sm font-medium">
                                <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
                                <span>{order.type}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                            <span>{order.time}</span>
                            <span className="font-semibold">{order.items.length} Items</span>
                            <span>Due in: {order.due}</span>
                        </div>
                        {order.notes &&
                          <div className="border-t border-slate-700 pt-3 mb-4">
                              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1"><span className="font-semibold">Notes:</span> {order.notes}</p>
                          </div>
                        }
                        <div className="flex justify-between items-center">
                            {order.paid && <span className="text-green-400 font-bold">PAID</span>}
                            <button onClick={() => handleAcceptOrder(order.id)} className="flex w-full max-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Accept Order</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex-shrink-0 w-96 flex flex-col gap-4">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 flex items-center gap-2">In Progress <span className="bg-[#3498DB]/20 text-[#3498DB] text-sm font-bold px-2 py-1 rounded-full">{inProgressOrders.length}</span></h2>
            <div className="flex flex-col gap-4">
                {inProgressOrders.map(order => (
                    <div key={order.id} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-md">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex flex-col">
                                <p className="font-bold text-slate-800 dark:text-white text-lg">{order.id}</p>
                                <p className="text-slate-600 dark:text-slate-300">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-2 bg-[#9B59B6]/20 text-[#9B59B6] px-3 py-1 rounded-full text-sm font-medium">
                                <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
                                <span>{order.type}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
                            <span className="font-semibold text-[#3498DB]">{order.time}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-4">
                            <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: `${((Date.now() - order.startTime) / 1000 / order.cookTime) * 100}%` }}></div>
                        </div>
                        <button onClick={() => handleMarkAsReady(order.id)} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3498DB] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Mark as Ready</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex-shrink-0 w-96 flex flex-col gap-4">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 flex items-center gap-2">Ready <span className="bg-[#27AE60]/20 text-[#27AE60] text-sm font-bold px-2 py-1 rounded-full">{readyOrders.length}</span></h2>
            <div className="flex flex-col gap-4">
                {readyOrders.map(order => (
                    <div key={order.id} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-md">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex flex-col">
                                <p className="font-bold text-slate-800 dark:text-white text-lg">{order.id}</p>
                                <p className="text-slate-600 dark:text-slate-300">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-2 bg-[#9B59B6]/20 text-[#9B59B6] px-3 py-1 rounded-full text-sm font-medium">
                                <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
                                <span>{order.type}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                            <span className="font-semibold text-[#27AE60]">{order.time}</span>
                        </div>
                        <button onClick={() => handleCompleteOrder(order.id)} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-600 hover:bg-slate-700 text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Complete Order</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}
