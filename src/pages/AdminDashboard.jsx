import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function AdminDashboard() {
  useEffect(() => {
    // Sales Trend Chart
    const salesCtx = document.getElementById('salesChart')?.getContext('2d');
    if (salesCtx) {
      new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Sales ($)',
            data: [520, 780, 650, 920, 850, 1100, 950],
            borderColor: '#BF5700',
            backgroundColor: 'rgba(191, 87, 0, 0.1)',
            fill: true,
            tension: 0.4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(245, 245, 220, 0.1)' },
              ticks: { color: '#F5F5DC', font: { family: 'Space Grotesk' } }
            },
            x: {
              grid: { display: false },
              ticks: { color: '#F5F5DC', font: { family: 'Space Grotesk' } }
            }
          }
        }
      });
    }

    // Order Status Chart
    const orderStatusCtx = document.getElementById('orderStatusChart')?.getContext('2d');
    if (orderStatusCtx) {
      new Chart(orderStatusCtx, {
        type: 'doughnut',
        data: {
          labels: ['Pending', 'In Progress', 'Out for Delivery', 'Completed'],
          datasets: [{
            data: [12, 8, 5, 99],
            backgroundColor: ['#BF5700', '#FFD700', '#2F4F4F', '#36454F'],
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-charcoal/[.02] p-4 dark:bg-black/20 sm:p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Cards */}
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-charcoal/80 dark:text-cream/80">Total Revenue</h3>
            <span className="material-symbols-outlined text-primary">payments</span>
          </div>
          <p className="mt-2 text-3xl font-bold">$4,280.50</p>
          <p className="mt-1 text-sm text-green-500">+2.5% vs yesterday</p>
        </div>
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-charcoal/80 dark:text-cream/80">Orders Today</h3>
            <span className="material-symbols-outlined text-primary">shopping_cart</span>
          </div>
          <p className="mt-2 text-3xl font-bold">124</p>
          <p className="mt-1 text-sm text-red-500">-1.2% vs yesterday</p>
        </div>
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-charcoal/80 dark:text-cream/80">Reservations</h3>
            <span className="material-symbols-outlined text-primary">calendar_month</span>
          </div>
          <p className="mt-2 text-3xl font-bold">32</p>
          <p className="mt-1 text-sm text-green-500">+10% vs yesterday</p>
        </div>
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-charcoal/80 dark:text-cream/80">Avg. Order Value</h3>
            <span className="material-symbols-outlined text-primary">price_check</span>
          </div>
          <p className="mt-2 text-3xl font-bold">$34.52</p>
          <p className="mt-1 text-sm text-green-500">+3.7% vs yesterday</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sales Trend */}
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Sales Trend</h3>
            <div className="flex items-center gap-2 rounded-full bg-charcoal/10 p-1 text-sm dark:bg-cream/10">
              <button className="rounded-full px-3 py-1 bg-background-light dark:bg-surface-dark shadow-sm">Daily</button>
              <button className="rounded-full px-3 py-1">Weekly</button>
              <button className="rounded-full px-3 py-1">Monthly</button>
            </div>
          </div>
          <div className="mt-4 h-80">
            <canvas id="salesChart"></canvas>
          </div>
        </div>
        {/* Order Status */}
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark">
          <h3 className="text-lg font-bold">Order Status</h3>
          <div className="mt-4 flex h-80 items-center justify-center">
            <canvas id="orderStatusChart"></canvas>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#BF5700]"></div><span>Pending (12)</span></div>
            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#FFD700]"></div><span>In Progress (8)</span></div>
            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#2F4F4F]"></div><span>Out for Delivery (5)</span></div>
            <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#36454F]"></div><span>Completed (99)</span></div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Recent Orders */}
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Orders</h3>
            <a className="text-sm font-semibold text-primary hover:underline" href="#">View All</a>
          </div>
          <div className="mt-4 flow-root">
            <div className="-mx-5 -my-2 overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle sm:px-5">
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
                    <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">#P4E-8765</td><td className="whitespace-nowrap px-3 py-4 text-sm">John Doe</td><td className="whitespace-nowrap px-3 py-4 text-sm">$45.50</td><td className="whitespace-nowrap px-3 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">Completed</span></td></tr>
                    <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">#P4E-8764</td><td className="whitespace-nowrap px-3 py-4 text-sm">Jane Smith</td><td className="whitespace-nowrap px-3 py-4 text-sm">$28.00</td><td className="whitespace-nowrap px-3 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">In Progress</span></td></tr>
                    <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">#P4E-8763</td><td className="whitespace-nowrap px-3 py-4 text-sm">Mike Johnson</td><td className="whitespace-nowrap px-3 py-4 text-sm">$62.75</td><td className="whitespace-nowrap px-3 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Out for Delivery</span></td></tr>
                    <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">#P4E-8762</td><td className="whitespace-nowrap px-3 py-4 text-sm">Sarah Chen</td><td className="whitespace-nowrap px-3 py-4 text-sm">$19.99</td><td className="whitespace-nowrap px-3 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">Cancelled</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Upcoming Reservations */}
        <div className="rounded-lg bg-background-light p-5 shadow-sm dark:bg-surface-dark">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Upcoming Reservations</h3>
            <a className="text-sm font-semibold text-primary hover:underline" href="#">View All</a>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-charcoal/5 p-3 dark:bg-cream/5"><div><p className="font-semibold">The Bear Den (Party of 8)</p><p className="text-sm text-charcoal/80 dark:text-cream/80">6:30 PM - David Miller</p></div><span className="text-sm font-medium">Confirmed</span></div>
            <div className="flex items-center justify-between rounded-lg bg-charcoal/5 p-3 dark:bg-cream/5"><div><p className="font-semibold">Main Dining (Party of 2)</p><p className="text-sm text-charcoal/80 dark:text-cream/80">7:00 PM - Emily White</p></div><span className="text-sm font-medium">Confirmed</span></div>
            <div className="flex items-center justify-between rounded-lg bg-charcoal/5 p-3 dark:bg-cream/5"><div><p className="font-semibold">Patio (Party of 4)</p><p className="text-sm text-charcoal/80 dark:text-cream/80">7:15 PM - Chris Garcia</p></div><span className="text-sm font-medium text-primary">Pending</span></div>
            <div className="flex items-center justify-between rounded-lg bg-charcoal/5 p-3 dark:bg-cream/5"><div><p className="font-semibold">The Lookout (Party of 6)</p><p className="text-sm text-charcoal/80 dark:text-cream/80">8:00 PM - Jessica Lee</p></div><span className="text-sm font-medium">Confirmed</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
