import { orders } from '../mock-data';

const getStatusBadge = (status) => {
  switch (status) {
    case 'Completed':
      return <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">Completed</span>;
    case 'In Progress':
      return <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">In Progress</span>;
    case 'Out for Delivery':
        return <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Out for Delivery</span>;
    case 'Ready':
        return <span className="inline-flex items-center rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">Ready</span>;
    case 'New':
        return <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">New</span>;
    default:
      return <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">Cancelled</span>;
  }
};

export default function AllOrders() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Orders</h1>
        <a className="text-sm font-semibold text-primary hover:underline" href="#">Export CSV</a>
      </div>

      <div className="mt-6 flow-root">
        <div className="-mx-5 -my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle sm:px-5">
            <div className="rounded-lg bg-white dark:bg-slate-800/50 p-5 shadow-sm">
                <table className="min-w-full divide-y divide-charcoal/10 dark:divide-cream/10">
                <thead>
                    <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0" scope="col">Order ID</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold" scope="col">Customer</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold" scope="col">Total</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 dark:divide-cream/10">
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">{order.id}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm">{order.customer}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm">${order.items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm">{getStatusBadge(order.status)}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
