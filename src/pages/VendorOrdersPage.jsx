import { useEffect, useState } from 'react';

const InventoryItem = ({ item }) => {
    let statusColor = 'text-gray-500';
    let bgColor = 'bg-gray-200';
    if (item.status === 'Sufficient') {
        statusColor = 'text-green-600 dark:text-green-400';
        bgColor = 'bg-green-500';
    } else if (item.status === 'Low') {
        statusColor = 'text-yellow-600 dark:text-yellow-400';
        bgColor = 'bg-yellow-500';
    } else if (item.status === 'Critical') {
        statusColor = 'text-brand-orange';
        bgColor = 'bg-brand-orange';
    }

    const level = parseInt(item.onHand) / parseInt(item.parLevel) * 100;

    return (
        <div className="flex flex-col gap-2 p-4 px-6">
            <div className="flex gap-4 justify-between items-center">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{item.name}</p>
                <p className={`${statusColor} text-sm font-normal leading-normal`}>{item.onHand}</p>
            </div>
            <div className="rounded-full bg-gray-200 dark:bg-white/10 h-2"><div className={`h-2 rounded-full ${bgColor}`} style={{width: `${level}%`}}></div></div>
            <p className={`${statusColor} text-sm font-normal leading-normal`}>{item.status}</p>
        </div>
    );
};

export default function VendorOrdersPage() {
    const [inventory, setInventory] = useState([]);
    const [vendorOrders, setVendorOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const [invRes, voRes] = await Promise.all([
                    fetch('http://localhost:3001/api/inventory', { headers: { 'Authorization': `Bearer ${token}` } }),
                    fetch('http://localhost:3001/api/vendor-orders', { headers: { 'Authorization': `Bearer ${token}` } }),
                ]);
                if(invRes.ok) setInventory(await invRes.json());
                if(voRes.ok) setVendorOrders(await voRes.json());
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);

  return (
    <div className="flex-1 p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Forecasting &amp; Alerts</h3>
          {/* Static content for now */}
        </div>
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Order Volume vs. Snowfall (Last 30 Days)</h3>
           <div className="w-full flex items-end justify-center bg-gray-50 dark:bg-white/5 rounded-lg p-4 h-[400px]">
            <img alt="Line and bar chart showing order volume vs snowfall over the last 30 days" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3NKQYL2r_yJphye9s1QIYedXeqkALjXwXj58FOS_AqnMWzJjLD9GbJaGyXDEkmklEnayYw9KjOIWlDWDJZFwy3g2sikJlRgvQc93KkvkIivUNPVWIKixHHzhhTg05auKBBa1mahOgiGg91nfzFcj_adHvfcCqNRN6ufbQhXq6KLJeY0oc6jOMHynsFlKaG51eFOlLKZJB0S81p1QaZ0FJcgBpK3pa1aggrYRa_6Bxb3HcHj_u9qJpRZGPVfC4UI13PdHGkAczwY8" />
          </div>
        </div>
      </div>
      <div className="xl:col-span-1 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10">
          <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pt-5 pb-3">Current Inventory</h2>
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
            {inventory.map(item => <InventoryItem key={item.id} item={item} />)}
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10">
          <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pt-5 pb-3">Order History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">PO Number</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vendor</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {vendorOrders.map(order => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{order.vendor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm"><span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300`}>{order.status}</span></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-right">${order.total.toFixed(2)}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
