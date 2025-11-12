import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Pizza Menu' },
  { to: '/about', label: 'About' },
  { to: '/shop', label: 'Shop' },
];

const ShopLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background text-on-surface">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 px-4 sm:px-10 py-3">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-4 text-on-surface">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-on-surface text-lg font-bold leading-tight tracking-[-0.015em]">Pizza 4 Ever</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium leading-normal ${isActive ? 'text-primary' : 'text-on-surface/80 hover:text-on-surface'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4 sm:gap-8">
          <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-full h-full">
              <div className="text-subtle flex border border-solid border-black/10 bg-white items-center justify-center pl-4 rounded-l-full border-r-0">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-on-surface focus:outline-0 focus:ring-0 border border-solid border-black/10 bg-white focus:border-black/20 h-full placeholder:text-subtle px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" />
            </div>
          </label>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 border border-solid border-black/10 bg-white text-on-surface gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shopping_cart</span>
          </button>
        </div>
      </header>
      <main className="flex flex-col gap-10 mt-5">
        <div className="layout-content-container flex flex-col max-w-[960px] mx-auto flex-1 w-full">
            {children}
        </div>
      </main>
      <footer className="mt-16 border-t border-solid border-black/10 px-4 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[960px] mx-auto">
            {/* Footer content from Screen 4 */}
        </div>
      </footer>
    </div>
  );
};

export default ShopLayout;
