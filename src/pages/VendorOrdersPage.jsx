export default function VendorOrdersPage() {
  return (
    <div className="flex-1 p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Forecasting &amp; Alerts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg">
                <span className="material-symbols-outlined text-brand-orange mt-1">campaign</span>
                <div>
                  <p className="font-bold text-brand-orange">High Demand Predicted</p>
                  <p className="text-sm text-brand-orange/80 dark:text-brand-orange/90">High demand predicted this weekend due to snowstorm. Consider increasing stock.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-400/10 border-l-4 border-yellow-400 rounded-r-lg">
                <span className="material-symbols-outlined text-yellow-500 mt-1">warning</span>
                <div>
                  <p className="font-bold text-yellow-600 dark:text-yellow-400">Delivery Alert</p>
                  <p className="text-sm text-yellow-700/80 dark:text-yellow-400/90">Potential delivery delays expected due to road conditions.</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3-Day Snow Forecast</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-400">ac_unit</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Friday</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">6-10 inches expected</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-400">ac_unit</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Saturday</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">2-4 inches expected</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-yellow-400">sunny</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Sunday</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Clear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Order Volume vs. Snowfall (Last 30 Days)</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Visualizing the correlation between weather and order volume.</p>
          <div className="w-full flex items-end justify-center bg-gray-50 dark:bg-white/5 rounded-lg p-4 h-[400px]">
            <img alt="Line and bar chart showing order volume vs snowfall over the last 30 days" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3NKQYL2r_yJphye9s1QIYedXeqkALjXwXj58FOS_AqnMWzJjLD9GbJaGyXDEkmklEnayYw9KjOIWlDWDJZFwy3g2sikJlRgvQc93KkvkIivUNPVWIKixHHzhhTg05auKBBa1mahOgiGg91nfzFcj_adHvfcCqNRN6ufbQhXq6KLJeY0oc6jOMHynsFlKaG51eFOlLKZJB0S81p1QaZ0FJcgBpK3pa1aggrYRa_6Bxb3HcHj_u9qJpRZGPVfC4UI13PdHGkAczwY8" />
          </div>
        </div>
      </div>
      <div className="xl:col-span-1 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10">
          <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pt-5 pb-3">Current Inventory</h2>
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
            <div className="flex flex-col gap-2 p-4 px-6">
              <div className="flex gap-4 justify-between items-center">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Dough</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal">85%</p>
              </div>
              <div className="rounded-full bg-gray-200 dark:bg-white/10 h-2"><div className="h-2 rounded-full bg-green-500" style={{width: '85%'}}></div></div>
              <p className="text-green-600 dark:text-green-400 text-sm font-normal leading-normal">Sufficient</p>
            </div>
            <div className="flex flex-col gap-2 p-4 px-6">
              <div className="flex gap-4 justify-between items-center">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Cheese</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal">60%</p>
              </div>
              <div className="rounded-full bg-gray-200 dark:bg-white/10 h-2"><div className="h-2 rounded-full bg-green-500" style={{width: '60%'}}></div></div>
              <p className="text-green-600 dark:text-green-400 text-sm font-normal leading-normal">Sufficient</p>
            </div>
            <div className="flex flex-col gap-2 p-4 px-6">
              <div className="flex gap-4 justify-between items-center">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Tomato Sauce</p>
                <p className="text-yellow-600 dark:text-yellow-400 text-sm font-normal leading-normal">35%</p>
              </div>
              <div className="rounded-full bg-gray-200 dark:bg-white/10 h-2"><div className="h-2 rounded-full bg-yellow-500" style={{width: '35%'}}></div></div>
              <p className="text-yellow-600 dark:text-yellow-400 text-sm font-normal leading-normal">Low</p>
            </div>
            <div className="flex flex-col gap-2 p-4 px-6">
              <div className="flex gap-4 justify-between items-center">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Pepperoni</p>
                <p className="text-brand-orange text-sm font-normal leading-normal">15%</p>
              </div>
              <div className="rounded-full bg-gray-200 dark:bg-white/10 h-2"><div className="h-2 rounded-full bg-brand-orange" style={{width: '15%'}}></div></div>
              <p className="text-brand-orange text-sm font-normal leading-normal">Critical</p>
            </div>
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
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">#PO-00754</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Sierra Produce Co.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Oct 26, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Delivered</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-right">$450.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">#PO-00753</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Mountain Meats</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Oct 25, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">Shipped</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-right">$1,280.50</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">#PO-00752</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Tahoe Dairy Supply</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Oct 24, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-right">$890.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">#PO-00751</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Sierra Produce Co.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Oct 23, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Delivered</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-right">$320.75</td>
                </tr>
                <tr className="hidden sm:table-row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">#PO-00750</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Lakeview Bakery</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Oct 22, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Delivered</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-right">$150.25</td>
                </tr>
                <tr className="hidden sm:table-row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">#PO-00749</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Mountain Meats</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Oct 21, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Cancelled</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-right">$750.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
