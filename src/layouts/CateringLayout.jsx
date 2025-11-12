import React from 'react';
import { Link } from 'react-router-dom';

const CateringLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <aside className="flex w-80 flex-col border-r border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc9YmH7baNCwgZzO0E_wuNADBmsvbXjLzcyxsnv7uZdco5xgyorhgoYvUX01_5d6ZO5UlzwoN2JatuGOzIQ9zhKI8Dj9ejD529rwAF4hW3cd9iA-uR1lIFPrMQkwg1adcKcblrTi8MMN7O5xnTPMSnAxJhCSqvJmlRCNapSYU4awtpsu-fPhWI6FgdWjw4LDjsiQuMEK_GCbkTt6-LKnu-4s9S7HU026WpDYO8Tu2SbdBo1WsFp220trEjo6c8q68VxMptb4QrQbA")' }}></div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Pizza 4 Ever</h1>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Catering Assistant</p>
            </div>
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="px-3 text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Popular Packages</h2>
          <nav className="flex flex-col gap-1">
            <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-primary bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-primary">local_pizza</span>
              <span className="text-sm font-semibold">The Sierra Package</span>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">local_pizza</span>
              <span className="text-sm font-medium">The Tahoe Package</span>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">local_pizza</span>
              <span className="text-sm font-medium">The Mountain Party</span>
            </a>
          </nav>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <h2 className="px-3 text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark mb-2">Need Help?</h2>
          <nav className="flex flex-col gap-1">
            <a href="#" className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">call</span>
              <span className="text-sm font-medium">Speak to a human</span>
            </a>
            <a href="#" className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">mail</span>
              <span className="text-sm font-medium">Email Us</span>
            </a>
          </nav>
        </div>
      </aside>
      <main className="flex flex-1 flex-col bg-background-light dark:bg-background-dark">
        {children}
      </main>
    </div>
  );
};

export default CateringLayout;
