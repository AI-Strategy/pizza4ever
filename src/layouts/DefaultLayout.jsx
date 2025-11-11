import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { href: '/', label: 'Orders', icon: 'receipt_long' },
    { href: '/admin-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/menu', label: 'Menu', icon: 'restaurant_menu' },
    { href: '/reservations', label: 'Reservations', icon: 'event_seat' },
    { href: '/customers', label: 'Customers', icon: 'group' },
    { href: '/analytics', label: 'Analytics', icon: 'bar_chart' },
];

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className="flex h-full flex-col justify-between bg-background-light dark:bg-[#1f2b38] p-4 w-64 border-r border-slate-700">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Pizza 4 Ever logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfghMuJYzjQuAwduOQZaFsN6TIzxq1HaQfUQfI3UdoMpclXmrGtlONyk0l0C2fas7ioZmeNNbj4V9mql1D3_Q65EtVCCmxlCbaFHYHbLDxGvRVRNpma6fDl3Q6If61A7v4qFvnWiNwIu0l3PW7p8VcxuXV2W7heIfml-kMZ1iU3PvVXsN2S8rjyH80NQwJFGdRwYfy3odbRbffjN3EHrEHz_ekaSDPFEsiR8bAdIq7WcYjsgMJye-18ejuvBiQ6gH-S9BNwexqsCc")'}}></div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-800 dark:text-white text-base font-bold leading-normal">Pizza 4 Ever</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Order Dashboard</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-2 mt-4">
                    {navLinks.map(link => (
                         <Link
                            key={link.href}
                            to={link.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${pathname === link.href ? 'bg-primary/20 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-primary/10'}`}
                        >
                            <span className="material-symbols-outlined">{link.icon}</span>
                            <p className="text-sm font-medium leading-normal">{link.label}</p>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default function DefaultLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
