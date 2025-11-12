import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { href: '/admin-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/scheduling', label: 'Scheduling', icon: 'calendar_month' },
    { href: '/', label: 'Orders', icon: 'receipt_long' },
    { href: '/catering', label: 'Catering', icon: 'local_shipping' },
    { href: '/employees', label: 'Employees', icon: 'group' },
];

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className="flex w-64 flex-col bg-[#111418] p-4 text-white">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Pizza 4 Ever logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDoMYNEIjCjVk6jVKxInAwMHtos8FLkH1wQs2ZkNMNTUm59hjDxXvo26hdFltMROd-IzM7AzRjQLmJ8V2iy7nlCcun4jHTAad7MycA5cMgizaSh7ZdlqSxwE-Tv-Ys5777hK9OWLifQDYbxQ7UCTtEVHyBHyulyeiisjusN-i7JDwsPMZOjlzEPVLhCbOEqn4jakx5vIjNifZ-vcRAxtFrHSmIMayBLuf-vgYfOcDUdu3K5ztIeUQ9_BqdoK4WipvKU37b4mX5T7k")'}}></div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-base font-medium leading-normal">Pizza 4 Ever</h1>
                        <p className="text-[#9dabb9] text-sm font-normal leading-normal">Admin Panel</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {navLinks.map(link => (
                         <Link
                            key={link.href}
                            to={link.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${pathname === link.href ? 'bg-[#283039] text-white' : 'text-white/70 hover:bg-[#283039] hover:text-white transition-colors'}`}
                        >
                            <span className="material-symbols-outlined">{link.icon}</span>
                            <p className="text-sm font-medium leading-normal">{link.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex flex-col gap-4">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Sign Out</span>
                </button>
                <div className="flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-[#283039] hover:text-white transition-colors" href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <p className="text-sm font-medium leading-normal">Settings</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-[#283039] hover:text-white transition-colors" href="#">
                        <span className="material-symbols-outlined">help</span>
                        <p className="text-sm font-medium leading-normal">Help</p>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default function SchedulingLayout({ children }) {
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
