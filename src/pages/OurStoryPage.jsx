import React from 'react';
import { Link } from 'react-router-dom';

const OurStoryPage = () => {
  return (
    <main className="flex-grow">
      <section className="relative w-full">
        <div
          className="flex h-[60vh] md:h-[70vh] flex-col items-center justify-center gap-8 bg-cover bg-center bg-no-repeat p-6 text-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPV3wz62Zyv37P4yqCHuuwbUurIsKCXGMfg3FTbURaFJreWMchRoBb8pUH3ZKAIY5fzBXl9qYk6iOz1U3E7hUmxAnHF90YMUKSp_c7s2DiC3kASxxuzEe5RmH8_mL6uzWSDN3qS8ljbxUpCEhnw_bKCa17HXq3IQL-Ee0wT1CYV0MHL7RZaW8EbpcxLSXzrUKhQg7SjuwBm-SZjFHx5WXlrrQehRlujTDhpkmcqhW2bIuhRu8EyPCRcT9AKQIgJHNrJjkHjkAk-j0")' }}
        >
          <div className="absolute inset-0 bg-p-neutral/50"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex max-w-4xl flex-col gap-4 text-center">
              <h1 className="font-display text-4xl font-bold leading-tight text-p-white md:text-6xl">Forged by Fire & Forest</h1>
              <p className="text-md font-body text-p-white/90 md:text-xl">Discover the story of Pizza 4 Ever, where culinary skill meets mountain-town character.</p>
            </div>
            <Link to="/menu" className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-p-brand px-8 text-base font-bold text-p-white shadow-lg transition-transform hover:scale-105">
              <span className="truncate">Explore Our Menu</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-p-text-primary dark:text-p-text-white md:text-5xl">Born in the Heart of the Sierras</h2>
          <p className="text-md text-p-text-secondary dark:text-p-white/80 md:text-lg">Our journey began with a simple passion: to create unforgettable pizza inspired by the rugged beauty and adventurous spirit of Lake Tahoe.</p>
        </div>
      </section>

      <section className="bg-p-neutral-accent dark:bg-p-neutral/50 py-20 md:py-32 px-6">
          {/* Gallery can be a separate component */}
      </section>

      <section className="py-20 md:py-32 px-6">
          {/* Philosophy and timeline */}
      </section>

      <section className="bg-p-brand py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl italic leading-relaxed text-p-white md:text-4xl">"Every pizza we make is a tribute to the mountains that inspire us."</p>
          <p className="mt-6 font-semibold text-p-white/90">- Jane Doe, Founder</p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-p-text-primary dark:text-p-text-white md:text-5xl">Experience the Taste of the Mountains</h2>
          <Link to="/menu" className="mx-auto flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-p-brand px-8 text-base font-bold text-p-white shadow-lg transition-transform hover:scale-105">
            <span className="truncate">Order Now</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default OurStoryPage;
