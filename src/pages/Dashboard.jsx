import { useState, useEffect } from 'react';
import { orders as initialOrders } from '../mock-data';

export default function Dashboard() {
  const [orders, setOrders] = useState(initialOrders);
  const [lastUpdated, setLastUpdated] = useState('just now');

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(currentOrders => {
        const ordersInProgress = currentOrders.filter(o => o.status === 'In Progress');
        const ordersNew = currentOrders.filter(o => o.status === 'New');

        if (ordersInProgress.length > 0) {
            const orderToReady = ordersInProgress[0];
            return currentOrders.map(o => o.id === orderToReady.id ? {...o, status: 'Ready'} : o);
        } else if (ordersNew.length > 0) {
            const orderToProgress = ordersNew[0];
            return currentOrders.map(o => o.id === orderToProgress.id ? {...o, status: 'In Progress'} : o);
        }

        return currentOrders;
      });
      setLastUpdated('just now');
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const newOrders = orders.filter(order => order.status === 'New');
  const inProgressOrders = orders.filter(order => order.status === 'In Progress');
  const readyOrders = orders.filter(order => order.status === 'Ready');

  return (
    <>
      <header className="flex items-center justify-between gap-4 border-b border-p4e-grey-accent bg-p4e-white px-6 py-4 dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
        <div className="flex min-w-72 flex-col gap-1">
            <p className="font-display text-2xl font-bold text-p4e-black dark:text-p4e-white">Real-time Order Dashboard</p>
            <p className="text-sm font-normal text-p4e-grey-dark/60 dark:text-p4e-white/60">Last updated: {lastUpdated}</p>
        </div>
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-p4e-grey-dark dark:text-p4e-white">Accepting Orders</span>
                <label className="relative inline-flex cursor-pointer items-center">
                    <input defaultChecked className="peer sr-only" type="checkbox" value=""/>
                    <div className="peer h-6 w-11 rounded-full bg-p4e-grey-accent after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] after:transition-all peer-checked:bg-p4e-orange peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-p4e-grey-dark"></div>
                </label>
            </div>
            <div className="flex items-center gap-2">
                <button className="rounded-full p-2 text-p4e-grey-dark/80 hover:bg-p4e-grey-light hover:text-p4e-black dark:text-p4e-white/80 dark:hover:bg-p4e-grey-dark dark:hover:text-p4e-white">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="rounded-full p-2 text-p4e-grey-dark/80 hover:bg-p4e-grey-light hover:text-p4e-black dark:text-p4e-white/80 dark:hover:bg-p4e-grey-dark dark:hover:text-p4e-white">
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
            </div>
        </div>
      </header>
      <div className="flex flex-col gap-6 border-b border-p4e-grey-accent px-6 py-6 dark:border-p4e-grey-dark">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4 rounded-lg border border-p4e-grey-accent bg-p4e-white p-4 dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
                <div className="rounded-lg bg-p4e-orange/10 p-3 text-p4e-orange">
                    <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-p4e-grey-dark/60 dark:text-p4e-white/60">Avg. Delivery Time</p>
                    <p className="font-display text-2xl font-bold text-p4e-black dark:text-p4e-white">28 min</p>
                </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-p4e-grey-accent bg-p4e-white p-4 dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
                <div className="rounded-lg bg-p4e-orange/10 p-3 text-p4e-orange">
                    <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-p4e-grey-dark/60 dark:text-p4e-white/60">Avg. Pick-up Time</p>
                    <p className="font-display text-2xl font-bold text-p4e-black dark:text-p4e-white">15 min</p>
                </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-p4e-grey-accent bg-p4e-white p-4 dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
                <div className="rounded-lg bg-p4e-orange/10 p-3 text-p4e-orange">
                    <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-p4e-grey-dark/60 dark:text-p4e-white/60">Orders Per Hour</p>
                    <p className="font-display text-2xl font-bold text-p4e-black dark:text-p4e-white">12</p>
                </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-p4e-grey-accent bg-p4e-white p-4 dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
                <div className="rounded-lg bg-p4e-orange/10 p-3 text-p4e-orange">
                    <span className="material-symbols-outlined">attach_money</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-p4e-grey-dark/60 dark:text-p4e-white/60">Today's Sales</p>
                    <p className="font-display text-2xl font-bold text-p4e-black dark:text-p4e-white">$1,234.56</p>
                </div>
            </div>
        </div>
        <label className="flex h-12 min-w-40 w-full max-w-md flex-col">
            <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                <div className="flex items-center justify-center rounded-l-lg border border-r-0 border-p4e-grey-accent bg-p4e-white pl-4 text-p4e-grey-dark/60 dark:border-p4e-grey-dark dark:bg-[#1C1C1C] dark:text-p4e-white/60">
                    <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg border border-l-0 border-p4e-grey-accent bg-p4e-white px-4 text-base font-normal leading-normal text-p4e-black placeholder:text-p4e-grey-dark/60 focus:border-p4e-orange focus:outline-0 focus:ring-0 dark:border-p4e-grey-dark dark:bg-[#1C1C1C] dark:text-p4e-white dark:placeholder:text-p4e-white/60 dark:focus:border-p4e-orange" placeholder="Search by Order ID or Customer Name" value=""/>
            </div>
        </label>
      </div>
      <div className="flex flex-1 gap-6 overflow-x-auto p-6">
        <div className="flex w-96 flex-shrink-0 flex-col gap-4">
            <h2 className="flex items-center gap-2 px-2 font-display text-lg font-bold text-p4e-black dark:text-p4e-white">New Orders <span className="rounded-full bg-p4e-orange/10 px-2 py-0.5 text-sm font-bold text-p4e-orange">{newOrders.length}</span></h2>
            <div className="flex flex-col gap-4">
                {newOrders.map(order => (
                    <div key={order.id} className="rounded-xl border-2 border-p4e-orange bg-p4e-white p-4 shadow-lg dark:bg-[#1C1C1C]">
                        <div className="mb-3 flex items-start justify-between">
                            <div className="flex flex-col">
                                <p className="font-display text-lg font-bold text-p4e-black dark:text-p4e-white">{order.id}</p>
                                <p className="text-p4e-grey-dark/80 dark:text-p4e-white/80">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-p4e-blue/10 px-3 py-1 text-sm font-medium text-p4e-blue">
                                <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
                                <span>{order.type}</span>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center justify-between text-sm text-p4e-grey-dark/60 dark:text-p4e-white/60">
                            <span>{order.time}</span>
                            <span className="font-semibold">{order.items.length} Items</span>
                            <span>Due in: {order.due}</span>
                        </div>
                        <div className="mb-4 border-t border-p4e-grey-accent pt-3 dark:border-p4e-grey-dark">
                            <p className="text-sm text-p4e-grey-dark/80 dark:text-p4e-white/80">
                                {order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                            </p>
                            {order.notes && <p className="mt-1 text-sm text-p4e-grey-dark/80 dark:text-p4e-white/80"><span className="font-semibold">Notes:</span> {order.notes}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-p4e-green">PAID</span>
                            <button className="flex h-11 w-full max-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-p4e-orange px-4 text-sm font-bold leading-normal text-p4e-white shadow-sm transition-colors hover:bg-p4e-orange-dark">
                                <span className="truncate">Accept Order</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex w-96 flex-shrink-0 flex-col gap-4">
            <h2 className="flex items-center gap-2 px-2 font-display text-lg font-bold text-p4e-black dark:text-p4e-white">In Progress <span className="rounded-full bg-p4e-blue/10 px-2 py-0.5 text-sm font-bold text-p4e-blue">{inProgressOrders.length}</span></h2>
            <div className="flex flex-col gap-4">
                {inProgressOrders.map(order => (
                    <div key={order.id} className="rounded-xl border border-p4e-grey-accent bg-p4e-white p-4 shadow-md dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
                        <div className="mb-3 flex items-start justify-between">
                            <div className="flex flex-col">
                                <p className="font-display text-lg font-bold text-p4e-black dark:text-p4e-white">{order.id}</p>
                                <p className="text-p4e-grey-dark/80 dark:text-p4e-white/80">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-p4e-purple/10 px-3 py-1 text-sm font-medium text-p4e-purple">
                                <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
                                <span>{order.type}</span>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center justify-between text-sm text-p4e-grey-dark/60 dark:text-p4e-white/60">
                            <span className="font-semibold text-p4e-blue">Cooking: 5/15 min</span>
                        </div>
                        <button className="flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-p4e-blue px-4 text-sm font-bold leading-normal text-p4e-white shadow-sm transition-colors hover:bg-blue-600">
                            <span className="truncate">Mark as Ready</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex w-96 flex-shrink-0 flex-col gap-4">
            <h2 className="flex items-center gap-2 px-2 font-display text-lg font-bold text-p4e-black dark:text-p4e-white">Ready <span className="rounded-full bg-p4e-green/10 px-2 py-0.5 text-sm font-bold text-p4e-green">{readyOrders.length}</span></h2>
            <div className="flex flex-col gap-4">
                {readyOrders.map(order => (
                    <div key={order.id} className="rounded-xl border border-p4e-grey-accent bg-p4e-white p-4 shadow-md dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
                        <div className="mb-3 flex items-start justify-between">
                            <div className="flex flex-col">
                                <p className="font-display text-lg font-bold text-p4e-black dark:text-p4e-white">{order.id}</p>
                                <p className="text-p4e-grey-dark/80 dark:text-p4e-white/80">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-p4e-purple/10 px-3 py-1 text-sm font-medium text-p4e-purple">
                                <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
                                <span>{order.type}</span>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center justify-between text-sm text-p4e-grey-dark/60 dark:text-p4e-white/60">
                            <span className="font-semibold text-p4e-green">Ready for 3 min</span>
                        </div>
                        <button className="flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-p4e-grey-accent bg-p4e-white px-4 text-sm font-bold leading-normal text-p4e-black shadow-sm transition-colors hover:bg-p4e-grey-light dark:border-p4e-grey-dark dark:bg-[#1C1C1C] dark:text-p4e-white dark:hover:bg-p4e-grey-dark">
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
