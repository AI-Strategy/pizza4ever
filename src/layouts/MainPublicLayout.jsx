import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/catering', label: 'Catering' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/shop', label: 'Shop' },
  { to: '/careers', label: 'Careers' },
];

const MainPublicLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-surface dark:bg-dark-surface text-content dark:text-dark-content">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-strong/50 dark:border-dark-surface-strong bg-surface/80 dark:bg-dark-surface/80 px-6 md:px-10 lg:px-20 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-4xl">local_pizza</span>
            <span className="text-3xl font-extrabold tracking-tight text-content dark:text-dark-content">Pizza 4 Ever</span>
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-primary dark:hover:text-primary ${isActive ? 'text-primary' : 'text-content dark:text-dark-content'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link to="/menu">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-primary text-primary-contrast text-base font-bold tracking-[0.015em] hover:opacity-90 transition-opacity">
              <span className="truncate">Order Now</span>
            </button>
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="p-2">
            <span className="material-symbols-outlined !text-3xl">menu</span>
          </button>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-surface-subtle dark:bg-dark-surface-subtle border-t border-surface-strong/50 dark:border-dark-surface-strong">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-primary w-8 h-8">
                <span className="material-symbols-outlined text-4xl">local_pizza</span>
              </div>
              <h2 className="text-xl font-bold">Pizza 4 Ever</h2>
            </div>
            <p className="text-base text-content-subtle dark:text-dark-content-subtle max-w-sm">
              Fusing culinary skill with mountain-town character and cutting-edge tech. The best pizza in Lake Tahoe.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-bold">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-base text-content-subtle dark:text-dark-content-subtle hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-content-subtle dark:text-dark-content-subtle hover:text-primary transition-colors">
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
              </a>
              <a href="#" className="text-content-subtle dark:text-dark-content-subtle hover:text-primary transition-colors">
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-surface-strong/50 dark:border-dark-surface-strong mt-8 pt-8">
          <div className="max-w-7xl mx-auto text-center text-base text-content-subtle dark:text-dark-content-subtle">
            <p>© 2024 Pizza 4 Ever. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPublicLayout;
