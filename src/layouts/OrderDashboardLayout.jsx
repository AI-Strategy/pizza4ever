import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { href: '/', label: 'Dashboard', icon: 'dashboard' },
    { href: '/all-orders', label: 'All Orders', icon: 'receipt_long' },
    { href: '/menu', label: 'Menu', icon: 'restaurant_menu' },
    { href: '/analytics', label: 'Analytics', icon: 'bar_chart' },
];

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className="flex h-full w-64 flex-col justify-between border-r border-p4e-grey-accent bg-p4e-white p-4 dark:border-p4e-grey-dark dark:bg-[#1C1C1C]">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Pizza 4 Ever logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfghMuJYzjQuAwduOQZaFsN6TIzxq1HaQfUQfI3UdoMpclXmrGtlONyk0l0C2fas7ioZmeNNbj4V9mql1D3_Q65EtVCCmxlCbaFHYHbLDxGvRVRNpma6fDl3Q6If61A7v4qFvnWiNwIu0l3PW7p8VcxuXV2W7heIfml-kMZ1iU3PvVXsN2S8rjyH80NQwJFGdRwYfy3odbRbffjN3EHrEHz_ekaSDPFEsiR8bAdIq7WcYjsgMJye-18ejuvBiQ6gH-S9BNwexqsCc")'}}></div>
                    <div className="flex flex-col">
                        <h1 className="font-display text-lg font-bold leading-none text-p4e-black dark:text-p4e-white">Pizza 4 Ever</h1>
                        <p className="text-sm font-normal leading-tight text-p4e-grey-dark/60 dark:text-p4e-white/60">Admin Panel</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-2">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname === link.href ? 'bg-p4e-orange/10 text-p4e-orange' : 'text-p4e-grey-dark/80 hover:bg-p4e-orange/10 hover:text-p4e-orange dark:text-p4e-white/80'}`}
                        >
                            <span className={`material-symbols-outlined ${pathname === link.href ? 'text-p4e-orange' : ''}`}>{link.icon}</span>
                            <p className={`text-sm ${pathname === link.href ? 'font-bold' : 'font-medium'}`}>{link.label}</p>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex flex-col gap-4">
                <button className="flex h-11 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-p4e-orange px-4 text-sm font-bold leading-normal text-p4e-white shadow-sm transition-colors hover:bg-p4e-orange-dark">
                    <span className="truncate">Sign Out</span>
                </button>
                <div className="flex flex-col gap-1">
                    <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-p4e-grey-dark/80 hover:bg-p4e-orange/10 hover:text-p4e-orange dark:text-p4e-white/80">
                        <span className="material-symbols-outlined">settings</span>
                        <p className="text-sm font-medium">Settings</p>
                    </Link>
                    <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-p4e-grey-dark/80 hover:bg-p4e-orange/10 hover:text-p4e-orange dark:text-p4e-white/80">
                        <span className="material-symbols-outlined">help</span>
                        <p className="text-sm font-medium">Help &amp; Support</p>
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default function OrderDashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-p4e-grey-light dark:bg-p4e-black">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
