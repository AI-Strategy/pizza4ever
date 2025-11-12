export default function SchedulingAltPage() {
  return (
    <div className="flex-1 p-6 grid grid-cols-1 xl:grid-cols-4 gap-6">
      <div className="xl:col-span-3 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Weekly Schedule</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="hidden sm:inline">View:</span>
              <button className="px-3 py-1 rounded-md bg-brand-green/10 dark:bg-brand-green text-brand-green dark:text-white font-medium">Timeline</button>
              <button className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/10">By Role</button>
              <button className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/10">By Employee</button>
            </div>
          </div>
          <div className="relative w-full overflow-x-auto">
            <div className="grid" style={{gridTemplateColumns: '150px repeat(7, 1fr)', minWidth: '1200px'}}>
              <div className="sticky left-0 bg-white dark:bg-black/20 z-10"></div>
              <div className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200">
                <p>Mon, Oct 30</p>
                <p className="text-xs text-gray-500">62 / 65 Staffed</p>
              </div>
              <div className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200">
                <p>Tue, Oct 31</p>
                <p className="text-xs text-gray-500">60 / 65 Staffed</p>
              </div>
              <div className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200 bg-brand-orange/10">
                <p>Wed, Nov 1</p>
                <p className="text-xs text-brand-orange">55 / 68 Staffed</p>
              </div>
              <div className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200">
                <p>Thu, Nov 2</p>
                <p className="text-xs text-gray-500">64 / 65 Staffed</p>
              </div>
              <div className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200">
                <p>Fri, Nov 3</p>
                <p className="text-xs text-gray-500">70 / 70 Staffed</p>
              </div>
              <div className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200">
                <p>Sat, Nov 4</p>
                <p className="text-xs text-gray-500">72 / 72 Staffed</p>
              </div>
              <div className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200">
                <p>Sun, Nov 5</p>
                <p className="text-xs text-gray-500">71 / 72 Staffed</p>
              </div>
            </div>
            <div className="grid divide-y divide-gray-200 dark:divide-white/10" style={{gridTemplateColumns: '150px repeat(7, 1fr)', minWidth: '1200px'}}>
              <div className="sticky left-0 bg-white dark:bg-black/20 z-10 p-4 font-semibold text-gray-700 dark:text-gray-300 flex items-center">Kitchen</div>
              <div className="p-2 space-y-1"><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>A. Smith:</strong> 7am-3pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>B. Jones:</strong> 11am-7pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>C. Miller:</strong> 5pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>A. Smith:</strong> 7am-3pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>D. Chen:</strong> 11am-7pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>E. Garcia:</strong> 5pm-1am</div></div>
              <div className="p-2 space-y-1 bg-brand-orange/10"><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>A. Smith:</strong> 7am-3pm</div><div className="bg-yellow-500 text-black p-2 rounded-lg text-xs font-medium border border-dashed border-yellow-700">Open (11am-7pm)</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>C. Miller:</strong> 5pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>A. Smith:</strong> 7am-3pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>B. Jones:</strong> 11am-7pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>C. Miller:</strong> 5pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>A. Smith:</strong> 7am-3pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>D. Chen:</strong> 11am-7pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>E. Garcia:</strong> 5pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>B. Jones:</strong> 11am-7pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>C. Miller:</strong> 5pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>D. Chen:</strong> 11am-7pm</div><div className="bg-blue-500 text-white p-2 rounded-lg text-xs"><strong>E. Garcia:</strong> 5pm-1am</div></div>
              <div className="sticky left-0 bg-white dark:bg-black/20 z-10 p-4 font-semibold text-gray-700 dark:text-gray-300 flex items-center">Front of House</div>
              <div className="p-2 space-y-1"><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>F. White:</strong> 11am-8pm</div><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>G. Lee:</strong> 4pm-12am</div></div>
              <div className="p-2 space-y-1"><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>F. White:</strong> 11am-8pm</div><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>G. Lee:</strong> 4pm-12am</div></div>
              <div className="p-2 space-y-1 bg-brand-orange/10"><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>F. White:</strong> 11am-8pm</div><div className="bg-yellow-500 text-black p-2 rounded-lg text-xs font-medium border border-dashed border-yellow-700">Open (4pm-12am)</div></div>
              <div className="p-2 space-y-1"><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>F. White:</strong> 11am-8pm</div><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>G. Lee:</strong> 4pm-12am</div></div>
              <div className="p-2 space-y-1"><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>F. White:</strong> 11am-8pm</div><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>G. Lee:</strong> 4pm-12am</div></div>
              <div className="p-2 space-y-1"><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>F. White:</strong> 11am-8pm</div><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>G. Lee:</strong> 4pm-12am</div></div>
              <div className="p-2 space-y-1"><div className="bg-teal-500 text-white p-2 rounded-lg text-xs"><strong>F. White:</strong> 11am-8pm</div></div>
              <div className="sticky left-0 bg-white dark:bg-black/20 z-10 p-4 font-semibold text-gray-700 dark:text-gray-300 flex items-center">Bar Staff</div>
              <div className="p-2 space-y-1"><div className="bg-purple-500 text-white p-2 rounded-lg text-xs"><strong>H. Davis:</strong> 3pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-purple-500 text-white p-2 rounded-lg text-xs"><strong>H. Davis:</strong> 3pm-1am</div></div>
              <div className="p-2 space-y-1 bg-brand-orange/10"><div className="bg-purple-500 text-white p-2 rounded-lg text-xs"><strong>H. Davis:</strong> 3pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-purple-500 text-white p-2 rounded-lg text-xs"><strong>H. Davis:</strong> 3pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-purple-500 text-white p-2 rounded-lg text-xs"><strong>H. Davis:</strong> 3pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-purple-500 text-white p-2 rounded-lg text-xs"><strong>H. Davis:</strong> 3pm-1am</div></div>
              <div className="p-2 space-y-1"><div className="bg-purple-500 text-white p-2 rounded-lg text-xs"><strong>H. Davis:</strong> 3pm-1am</div></div>
              <div className="sticky left-0 bg-white dark:bg-black/20 z-10 p-4 font-semibold text-gray-700 dark:text-gray-300 flex items-center">Catering</div>
              <div className="p-2 space-y-1"></div>
              <div className="p-2 space-y-1"><div className="bg-pink-500 text-white p-2 rounded-lg text-xs"><strong>Event:</strong> Lakeside Wedding (12pm-6pm)</div></div>
              <div className="p-2 space-y-1 bg-brand-orange/10"></div>
              <div className="p-2 space-y-1"></div>
              <div className="p-2 space-y-1"></div>
              <div className="p-2 space-y-1"><div className="bg-pink-500 text-white p-2 rounded-lg text-xs"><strong>Event:</strong> Ski Resort Party (4pm-10pm)</div></div>
              <div className="p-2 space-y-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:col-span-1 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Wildcard Factors</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg">
              <span className="material-symbols-outlined text-brand-orange mt-1">ac_unit</span>
              <div>
                <p className="font-bold text-brand-orange">Heavy Snow Forecast</p>
                <p className="text-sm text-brand-orange/80 dark:text-brand-orange/90">Wed, Nov 1. Expect higher demand and potential staff travel delays.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-pink-500/10 border-l-4 border-pink-500 rounded-r-lg">
              <span className="material-symbols-outlined text-pink-500 mt-1">celebration</span>
              <div>
                <p className="font-bold text-pink-600 dark:text-pink-400">Major Catering Event</p>
                <p className="text-sm text-pink-700/80 dark:text-pink-400/90">Sat, Nov 4. Requires dedicated staff, reducing on-site availability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Staffing Analysis (Wed, Nov 1)</h3>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Comparison of scheduled vs. anticipated &amp; historical needs.</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Kitchen</span>
                  <span className="text-gray-500 dark:text-gray-400">18 / 22 Needed</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5">
                  <div className="bg-brand-orange h-2.5 rounded-full" style={{width: '81%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Front of House</span>
                  <span className="text-gray-500 dark:text-gray-400">10 / 12 Needed</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '83%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Bar Staff</span>
                  <span className="text-gray-500 dark:text-gray-400">5 / 5 Needed</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10">
          <div className="flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">On-Call Staff</h2>
            <button className="text-sm font-medium text-brand-green hover:underline">Manage List</button>
          </div>
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
            <div className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhckRooLXHqJzreS_sG8kBKBEScwqh1szYXDbKMSEKpzOxsuQJprXrJx-IWAWaxmHPdUuz7Pj0SIuaApo1IjgeKss2Y4ff3guHfC2eplAJJUcwjhMXXqPJBFqbWnl1yfBQpC8LMKnmO3LhzTmnwe0sB7znkDr4UVGown4DB08o7zVy98CTWwPQ94E298n2Jn2doRXAvgwd31V8xrWOV43AyP7-Ayt_MCzEOBl8LrlB9M8TNshQBuQJneXLLzDdBl-iugFIQYhUa5s")'}}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Maria Rodriguez</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Kitchen, FOH</p>
                </div>
              </div>
              <button className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
                <span className="material-symbols-outlined text-lg">call</span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhckRooLXHqJzreS_sG8kBKBEScwqh1szYXDbKMSEKpzOxsuQJprXrJx-IWAWaxmHPdUuz7Pj0SIuaApo1IjgeKss2Y4ff3guHfC2eplAJJUcwjhMXXqPJBFqbWnl1yfBQpC8LMKnmO3LhzTmnwe0sB7znkDr4UVGown4DB08o7zVy98CTWwPQ94E298n2Jn2doRXAvgwd31V8xrWOV43AyP7-Ayt_MCzEOBl8LrlB9M8TNshQBuQJneXLLzDdBl-iugFIQYhUa5s")'}}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">David Kim</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Bar</p>
                </div>
              </div>
              <button className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
                <span className="material-symbols-outlined text-lg">call</span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhckRooLXHqJzreS_sG8kBKBEScwqh1szYXDbKMSEKpzOxsuQJprXrJx-IWAWaxmHPdUuz7Pj0SIuaApo1IjgeKss2Y4ff3guHfC2eplAJJUcwjhMXXqPJBFqbWnl1yfBQpC8LMKnmO3LhzTmnwe0sB7znkDr4UVGown4DB08o7zVy98CTWwPQ94E298n2Jn2doRXAvgwd31V8xrWOV43AyP7-Ayt_MCzEOBl8LrlB9M8TNshQBuQJneXLLzDdBl-iugFIQYhUa5s")'}}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Chloe Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Kitchen</p>
                </div>
              </div>
              <button className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
                <span className="material-symbols-outlined text-lg">call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
