import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { href: '/admin-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/menu', label: 'Menu Management', icon: 'restaurant_menu' },
    { href: '/', label: 'Orders', icon: 'receipt_long' },
    { href: '/integrations', label: 'Integrations', icon: 'integration_instructions' },
];

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className="flex w-64 flex-col bg-white/5 p-4">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Pizza 4 Ever company logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBffwnWAgi89vjRZ2TuSeawNfZjeE4MfVYDNJjzyUCrV_FddhI2i_-yN25hdORfdxdrterg0jNkxnV5AMZFAo9IfBehFNG9y_JgMszCcEs2nNaKToswt1xc21TnNMJTgE6A6mQmZY_5G4QabVl8ZXf1Tb_zIiiK_aeUwM3oQ8DUYcn9C1phLfXZw7xZn9gANXMN4aVRxlv0tOyBS4XfeIwmYdUJpYx3Lj79weQlPpIHyFSXDiWVHfkpDcMDZxChTAHhSAIJW7oqqpg")'}}></div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-base font-bold leading-normal">Pizza 4 Ever</h1>
                        <p className="text-white/60 text-sm font-normal leading-normal">Admin Panel</p>
                    </div>
                </div>
            </div>
            <nav className="mt-8 flex flex-1 flex-col gap-2">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname === link.href ? 'bg-primary/20 text-primary' : 'text-white/60 transition-colors hover:bg-white/10 hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined" style={pathname === link.href ? {fontVariationSettings: "'FILL' 1"} : {}}>{link.icon}</span>
                        <p className={`text-sm font-medium leading-normal ${pathname === link.href ? 'font-bold' : ''}`}>{link.label}</p>
                    </Link>
                ))}
            </nav>
            <div className="flex flex-col gap-1">
                <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                    <span className="material-symbols-outlined">settings</span>
                    <p className="text-sm font-medium leading-normal">Settings</p>
                </Link>
                <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                    <span className="material-symbols-outlined">support_agent</span>
                    <p className="text-sm font-medium leading-normal">Support</p>
                </Link>
            </div>
        </aside>
    );
};

export default function IntegrationsLayout({ children }) {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display">
      <Sidebar />
      <main className="relative flex-1 overflow-y-auto">
        {children}
      </main>
      <div className="fixed bottom-6 right-6">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform hover:scale-105">
            <span className="material-symbols-outlined text-3xl">smart_toy</span>
        </button>
      </div>
    </div>
  );
}
