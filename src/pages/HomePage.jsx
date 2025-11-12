import React from 'react';
import { menuItems } from '../mock-data';

const HeroSection = () => (
  <div className="@container mb-6">
    <div className="p-0 @[480px]:p-4">
      <div
        className="flex min-h-[480px] flex-col gap-6 rounded-lg bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr7S18YMHYXkDX61sYHnW0XAqUGquBlGyW0VZCpxXcs-809phD69PXOvTKaNskzQdPMrnC7fmvrcoZHWDoDq_x9YbBGlAAqs31-3P66pq_ZuMEImQVLKXtRHHR8opsc7_oPIueIOXAbWo2Kc5JII8U1CRpJGOEdDBk9QV5MPLk2-FG0SnkIUr1R94412bWZ1J9RuLOfSYeFaFaY5-TYGz68WIohEFjhVcZ5dra75_n5WwaHDYaankXX0ishPbRCjF5p6b56MiO4Wc")`,
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-cream text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            Your Mountain of Flavor Awaits
          </h1>
          <h2 className="text-cream text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            Freshly made pizzas available for online ordering. Get started now!
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
          <span className="truncate">Start Your Order</span>
        </button>
      </div>
    </div>
  </div>
);

const MenuCategoryChips = () => (
  <div className="sticky top-[73px] z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm py-4">
    <div className="flex gap-3 overflow-x-auto pb-2">
      <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary px-4">
        <p className="text-white text-sm font-medium leading-normal">Signature Pizzas</p>
      </div>
      <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-charcoal/10 dark:bg-cream/10 px-4 text-charcoal dark:text-cream">
        <p className="text-sm font-medium leading-normal">From the Grill</p>
      </div>
      <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-charcoal/10 dark:bg-cream/10 px-4 text-charcoal dark:text-cream">
        <p className="text-sm font-medium leading-normal">Cocktails</p>
      </div>
      <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-charcoal/10 dark:bg-cream/10 px-4 text-charcoal dark:text-cream">
        <p className="text-sm font-medium leading-normal">Fur Buddy Bites</p>
      </div>
      <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-charcoal/10 dark:bg-cream/10 px-4 text-charcoal dark:text-cream">
        <p className="text-sm font-medium leading-normal">Sides & Apps</p>
      </div>
    </div>
  </div>
);

const BuildYourOwnCard = () => (
  <div className="p-4 @container border-b border-charcoal/20 dark:border-cream/20">
    <div className="flex flex-col items-stretch justify-start rounded bg-charcoal/5 dark:bg-cream/5 @xl:flex-row @xl:items-start p-4">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD27f5Lmkt2m75ZYH-oTooaJn-inedM0_ynca8XQdvHx6M94RxCjusf_Wi0zYjn1rW9_rITk68tC7A7s7v4gsX4RoaqKgwGd6pk1ubwkaRvcMnKgCTWsRn0WaxFzsndMDt39xiqgSrxYYAMuc91KuViSpB3ydOzsyTToNsl2lt38klEPrGflwWkj225XBAS_bGoepEwh58xctBhvoIHxv049utMtSuZ0JcM24nQRHucI3u6HmO3aXK4L2IZyPGEaO1aM5gHsoxEmhY")`,
        }}
      ></div>
      <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
        <p className="text-charcoal dark:text-cream text-lg font-bold leading-tight tracking-[-0.015em]">Build Your Own Pizza</p>
        <div className="flex items-end gap-3 justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-charcoal/80 dark:text-cream/80 text-base font-normal leading-normal">
              Unleash your inner pizzaiolo. Choose your size, crust, sauce, and toppings to create your masterpiece.
            </p>
            <p className="text-charcoal/80 dark:text-cream/80 text-base font-normal leading-normal">Starts at $15.99</p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary text-white text-sm font-medium leading-normal">
            <span className="truncate">Customize</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const MenuItem = ({ item }) => (
  <div className="flex flex-col gap-3 pb-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded"
      style={{ backgroundImage: `url("${item.image}")` }}
    ></div>
    <div>
      <p className="text-charcoal dark:text-cream text-base font-medium leading-normal">{item.name}</p>
      <p className="text-charcoal/80 dark:text-cream/80 text-sm font-normal leading-normal">{item.description}</p>
      <p className="text-charcoal/80 dark:text-cream/80 text-sm font-normal leading-normal">{item.price}</p>
    </div>
    <button className="w-full mt-2 flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
      <span className="truncate">Add to Cart</span>
    </button>
  </div>
);

const HomePage = () => {
  return (
    <main className="flex flex-1 flex-col px-4 py-8 md:flex-row md:px-6 lg:px-8 xl:gap-8 xl:px-12">
      <div className="w-full lg:w-2/3">
        <HeroSection />
        <MenuCategoryChips />
        <BuildYourOwnCard />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
          {menuItems.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
      </div>
      {/* Right Column: Cart / Order Summary - I'll implement this later as part of the checkout flow */}
    </main>
  );
};

export default HomePage;
