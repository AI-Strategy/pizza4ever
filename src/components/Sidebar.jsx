import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary'
      : 'flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-primary/10 rounded-lg';
  };

  return (
    <aside className="flex h-full flex-col justify-between bg-background-light dark:bg-[#1f2b38] p-4 w-64 border-r border-slate-700">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfghMuJYzjQuAwduOQZaFsN6TIzxq1HaQfUQfI3UdoMpclXmrGtlONyk0l0C2fas7ioZmeNNbj4V9mql1D3_Q65EtVCCmxlCbaFHYHbLDxGvRVRNpma6fDl3Q6If61A7v4qFvnWiNwIu0l3PW7p8VcxuXV2W7heIfml-kMZ1iU3PvVXsN2S8rjyH80NQwJFGdRwYfy3odbRbffjN3EHrEHz_ekaSDPFEsiR8bAdIq7WcYjsgMJye-18ejuvBiQ6gH-S9BNwexqsCc")'}}></div>
          <div className="flex flex-col">
            <h1 className="text-slate-800 dark:text-white text-base font-bold leading-normal">Pizza 4 Ever</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Order Dashboard</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <Link to="/" className={getLinkClasses('/')}>
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-medium leading-normal">Dashboard</p>
          </Link>
          <Link to="/orders" className={getLinkClasses('/orders')}>
            <span className="material-symbols-outlined">receipt_long</span>
            <p className="text-sm font-medium leading-normal">All Orders</p>
          </Link>
          <Link to="/menu" className={getLinkClasses('/menu')}>
            <span className="material-symbols-outlined">restaurant_menu</span>
            <p className="text-sm font-medium leading-normal">Menu</p>
          </Link>
          <Link to="/analytics" className={getLinkClasses('/analytics')}>
            <span className="material-symbols-outlined">bar_chart</span>
            <p className="text-sm font-medium leading-normal">Analytics</p>
          </Link>
        </nav>
      </div>
      <div className="flex flex-col gap-4">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Sign Out</span>
        </button>
        <div className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-primary/10 rounded-lg" href="#">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium leading-normal">Settings</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-primary/10 rounded-lg" href="#">
            <span className="material-symbols-outlined">help</span>
            <p className="text-sm font-medium leading-normal">Help &amp; Support</p>
          </a>
        </div>
      </div>
    </aside>
  )
}
