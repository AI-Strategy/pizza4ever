import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
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
        <Link to="/menu" className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-base font-bold text-primary-contrast shadow-lg transition-transform hover:scale-105">
          <span className="truncate">Explore Our Menu</span>
        </Link>
      </div>
    </div>
  </section>
);

const IntroSection = () => (
    <section className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-content dark:text-dark-content md:text-5xl">Born in the Heart of the Sierras</h2>
            <p className="text-md text-content-subtle dark:text-dark-content-subtle md:text-lg">Our journey began with a simple passion: to create unforgettable pizza inspired by the rugged beauty and adventurous spirit of Lake Tahoe. We're dedicated to a mission that combines artisanal techniques, locally sourced ingredients, and a touch of modern innovation to bring you a truly unique culinary experience.</p>
        </div>
    </section>
);

const PhilosophySection = () => (
    <section className="py-20 md:py-32 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-24">
            <div>
                <h2 className="mb-4 font-display text-3xl font-bold text-content dark:text-dark-content md:text-5xl">Our Philosophy</h2>
                <p className="mb-8 text-content-subtle dark:text-dark-content-subtle md:text-lg">It's simple: culinary skill meets mountain character. We believe in the power of fresh, locally sourced ingredients and time-honored artisanal techniques. But we also embrace the edge of technology to perfect our craft and enhance your experience.</p>
                <div className="flex flex-col space-y-6">
                    {/* Philosophy points */}
                </div>
            </div>
            {/* Timeline */}
        </div>
    </section>
);

const QuoteSection = () => (
    <section className="bg-primary py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="font-display text-2xl italic leading-relaxed text-primary-contrast md:text-4xl">"Every pizza we make is a tribute to the mountains that inspire us. It's more than food; it's a piece of our story, shared with you."</p>
            <p className="mt-6 font-semibold text-primary-contrast/90">- Jane Doe, Founder</p>
        </div>
    </section>
);

const CTASection = () => (
    <section className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-content dark:text-dark-content md:text-5xl">Experience the Taste of the Mountains</h2>
            <p className="mb-8 text-content-subtle dark:text-dark-content-subtle md:text-lg">Ready to taste the difference? Every slice tells a story. Order online for pickup or delivery and start your own Pizza 4 Ever adventure.</p>
            <Link to="/menu" className="mx-auto flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-base font-bold text-primary-contrast shadow-lg transition-transform hover:scale-105">
                <span className="truncate">Order Now</span>
            </Link>
        </div>
    </section>
);


const HomePage = () => {
  return (
    <div className="flex-grow">
      <HeroSection />
      <IntroSection />
      <PhilosophySection />
      <QuoteSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
