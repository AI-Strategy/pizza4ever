import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { href: '/admin-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/', label: 'Orders', icon: 'receipt_long' },
    { href: '/menu', label: 'Menu', icon: 'restaurant_menu' },
    { href: '/reservations', label: 'Reservations', icon: 'event_seat' },
    { href: '/customers', label: 'Customers', icon: 'group' },
    { href: '/analytics', label: 'Analytics', icon: 'bar_chart' },
];

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className="sticky top-0 h-screen w-16 flex-col items-center border-r border-charcoal/20 bg-background-light py-4 dark:border-cream/10 dark:bg-background-dark md:flex md:w-64 md:items-stretch">
            <div className="flex items-center gap-3 px-4 md:px-6">
                <div className="size-8 shrink-0 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h1 className="hidden text-lg font-bold md:block">Pizza 4 Ever</h1>
            </div>
            <nav className="mt-8 flex flex-1 flex-col gap-2">
                {navLinks.map(link => (
                     <Link
                        key={link.href}
                        to={link.href}
                        className={`flex items-center gap-3 rounded-lg px-4 py-2.5 ${pathname === link.href ? 'bg-primary/20 text-primary' : 'hover:bg-charcoal/10 dark:hover:bg-cream/10'}`}
                    >
                        <span className="material-symbols-outlined">{link.icon}</span>
                        <span className="hidden font-semibold md:block">{link.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2">
                <Link to="#" className="flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-charcoal/10 dark:hover:bg-cream/10">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="hidden font-semibold md:block">Settings</span>
                </Link>
                <Link to="/login" className="flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-charcoal/10 dark:hover:bg-cream/10">
                    <span className="material-symbols-outlined">logout</span>
                    <span className="hidden font-semibold md:block">Logout</span>
                </Link>
            </div>
        </aside>
    );
};

const Header = () => (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-charcoal/20 bg-background-light/80 px-4 backdrop-blur-sm dark:border-cream/10 dark:bg-background-dark/80 sm:px-6">
        <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-charcoal/10 dark:hover:bg-cream/10 md:hidden">
                <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-xl font-bold">Dashboard Overview</h2>
        </div>
        <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-charcoal/10 dark:hover:bg-cream/10">
                <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAR1Pe3Vla00vAU3yulcaH_efxTZiUz4XwHjSjT-CPs6n1rt1rL9FsofCj1rOSlz6PoQfdEniLJ6KoApPFbt8LRQH4JUSzSPz1pF4-Db6HMOYJD6ywYKvtO8Hrnxy27XB9RAhUjSDe4AW2b1GkwU0MMG_KTkiLgI08f3Q85Q10vOIYtHGQGcByH6nZ_b993EciLeWB81joE7vdWil1GUksmax60--bnuJGlo1auYQW053WQsnpaWKoDOu7u3suup3nzMbR40tdndvI")'}}></div>
        </div>
    </header>
);

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-cream">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-charcoal/[.02] p-4 dark:bg-black/20 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
