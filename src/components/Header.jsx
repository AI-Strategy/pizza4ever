export default function Header() {
  return (
    <header className="flex justify-between items-center gap-4 px-6 py-3 border-b border-slate-700 bg-background-light dark:bg-background-dark">
      <div className="flex flex-wrap justify-between gap-3 flex-1">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">Real-time Order Dashboard</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Last updated: just now</p>
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
  )
}
