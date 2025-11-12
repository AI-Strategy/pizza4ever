import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { href: '/admin-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/scheduling-alt', label: 'Scheduling', icon: 'calendar_month' },
    { href: '/vendor-orders', label: 'Vendor Orders', icon: 'local_shipping' },
    { href: '/inventory', label: 'Inventory', icon: 'inventory_2' },
    { href: '/reports', label: 'Reports', icon: 'bar_chart' },
];

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className="flex flex-col w-64 bg-background-light dark:bg-background-dark border-r border-gray-200 dark:border-white/10">
            <div className="flex flex-col h-full justify-between p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Pizza 4 Ever company logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKyduMb4K96MIEInI9TAFc9TZFm4mDbAal1Ad3a7oK2Cq7Ua-o6xfMFgV34IQMItzATaAX_4vZsQL9SL2_HawzGVLCep8HBoPEWF173jx1dzNisITwIuEuoOVSH3aYnIksBWjJYaTPlXKZrj40fYy3is0kg9Jz9v-s9iFCyGkdL55nK0JIGB3B9Dgh6itqit22w5KA3wOPGAvcUXf3M0vPRU6WGBQ_SQJ6_JyTJ0WjMzUk3f7dN7M1UzWUfYOhsVjFqI8lp4vZBDg")'}}></div>
                        <div className="flex flex-col">
                            <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">Pizza 4 Ever</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Admin Panel</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2 mt-4">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${pathname === link.href ? 'bg-brand-green/10 text-brand-green dark:text-white dark:bg-brand-green' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}
                            >
                                <span className="material-symbols-outlined">{link.icon}</span>
                                <p className="text-sm font-medium leading-normal">{link.label}</p>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg">
                        <span className="material-symbols-outlined">settings</span>
                        <p className="text-sm font-medium leading-normal">Settings</p>
                    </Link>
                    <Link to="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg">
                        <span className="material-symbols-outlined">help</span>
                        <p className="text-sm font-medium leading-normal">Support</p>
                    </Link>
                </div>
            </div>
        </aside>
    );
};

const Header = () => (
    <header className="flex items-center justify-between sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 px-6 py-3">
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Employee Scheduling</h2>
        <div className="flex flex-1 justify-end items-center gap-4">
            <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 cursor-pointer rounded-lg h-10 px-3 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium">
                    <span className="material-symbols-outlined text-xl">event</span>
                    <span>Oct 28 - Nov 3, 2023</span>
                    <span className="material-symbols-outlined text-xl">arrow_drop_down</span>
                </button>
                <button className="flex items-center gap-2 cursor-pointer rounded-lg h-10 px-3 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                    <span>All Locations</span>
                    <span className="material-symbols-outlined text-xl">arrow_drop_down</span>
                </button>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-brand-green text-white text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap gap-2">
                <span className="material-symbols-outlined text-xl">add</span>
                <span className="truncate">Add Shift</span>
            </button>
            <div className="flex items-center gap-2">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                    <span className="material-symbols-outlined text-xl">notifications</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnIuzMgnMIFEvxGqu8swxouI-KQvOECeTAk3GR9-KxdZdPoX_GvFgRcI6w7AJsOdtWBKlMUITdBv9NIHHEXsEikfdo-D4Txpc0tMCMV7BXgR2rUvbAZFo2i5P13lg_tZtxG09_TENNlF0YqdsbrxNVeHmGUyRgTNvTf2lPPTSeJAITTOspKq_DJXm42EkT0P5QlmVG9n2JyFs7PkFXl58aJ0NOF87CsKOT0lRsrcqQjWfs4qGn4dhYrqycRYDSvl8guv-hCK1czl4")'}}></div>
            </div>
        </div>
    </header>
);

export default function SchedulingAltLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        {children}
      </main>
    </div>
  );
}
