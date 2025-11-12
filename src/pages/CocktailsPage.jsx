import React from 'react';

const CocktailsPage = () => {
  const cocktails = [
    {
      name: 'Tahoe Sunset Spritz',
      description: 'A refreshing blend of Aperol, prosecco, and a hint of elderflower.',
      pairing: 'Pairs with: Margherita',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_-Wpt7LlByi3FgRmkcD3SVl7zWaHkPSukYgPPgU_xebrCVfIF5MH2sB4-vHXjZzCyauRS34b62gUmJrK01qswwDikpjo5G0wb1PooDSx1RWCXo7AAnzJqwK_lnO4SeGvwT0k-IgqJhJbhT8BBOf634_qhLuhPkiNC8MahRPqVQOquwLQ9-0HaNZUCyBAtQK8DnKSFjpculVmHwsZzX7_WLuDHv_cw9qV_4uesZ_D64F7Itucz7XdocQ-921nzObMCv9V2rx9gr3A',
    },
    {
      name: 'Incline Old Fashioned',
      description: 'A classic, robust old fashioned with a touch of mountain-pine bitters.',
      pairing: 'Pairs with: The Carnivore',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2dJO2CjTN0TsNq4uHb0Hegn-U886iQoxFzDgao1wFbOBEc8dTqQ3CyS9NZLBaHIwsiTU5PQx2FJxPUpIeqklMH7zggHfMzuZr9CgAsO4JqJCx9F8gYbslxTakLI-GGuqoY9h1CucupmctOoJRd1rd9QpKR23KQ0z-xc80RNNVsQlBRZn5YQ77CIp1FSi8PeK_hq4G5Bm4sqj1Y6s0A4U9KpmscRcFMzWKAiWTjvd8t1HgpEwA4R00Ac3WdMdHPsujiMGQO8yE8S8',
    },
    {
      name: 'Emerald Bay Gimlet',
      description: 'A crisp and clean gimlet featuring locally distilled gin and fresh lime.',
      pairing: 'Pairs with: Veggie Supreme',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQoFGp8LeeuG6AQOjt4fn452UtlQZxSw6tSU_tymyqIjs3kWYSRzDK1AQGecrhstELc2oKr2HwxD0gRxpF8B49v6P85KeVZEbK9XiWD_Fw9F9jqbnUh2NtZyay3AM_boewti38KmYieuWBEYcFPkZhMizVzaO2X83v-eWW-9M1XhlG37Bm7UUaWKjcN2D4NL_cmD34V2kffWwMwCsdVTVvEc8wTXX99ZZA4AXtPTW369qIN5eSBJSEowzLzfWHtw5p2oNFOcBakG4',
    },
    {
      name: 'Sierra Snowfall Sour',
      description: 'A smooth whiskey sour with a creamy foam top, as soft as fresh snow.',
      pairing: 'Pairs with: Whiteout Pizza',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCJ-dm0ob5_75pO-EaSijLOeiHWBht186wei731rBFsdzkVb4K24hC9bAGBOcTaMQTLVMEH-oE88RgyVBi3SENoZa7mbjmkAm08i02mQWY4zfzUftFbMENoXkuW9uDHq6XLyfbbuoqBYJ1wYtNDkQMYjg3vf5cBT5lFCdA9cofs2d7xwxKos4ImqZB4KC33wMyv16bFEkU_PQkFkkbl9nsaRm_Z0iI3VRXPHktMkNENkFXAMaV_z8807Byb4yWxyQjubIl6M-EagE',
    },
    {
      name: 'Alpine Glow Margarita',
      description: 'A vibrant margarita with blood orange and a spicy, salted rim.',
      pairing: 'Pairs with: Spicy Italian',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8jiGBn2fO1YX_3zF4yRqO2mbW0vJDvigj72Qt0GxOR1nOgQ3ka25UeFAzLu99ck1C9_FxAoC8pgl5KvN6Y74XMv1nSHm1nUXaExApxgyfy51BBfgMojqJYnH2qNGxctMxj9tlfnmimbd7YypyBqZBq0RS3ySdVDSLeSBSULvOTZ967hfOWzOiBhEEL7zXv30eeXOU5gWUnbTBccnah-tR7WV65lRZYgtbkVFCHkeK_aGBwHeTGNS7RktqkktGcXAIMhJBsEKbhPE',
    },
    {
      name: 'Granite Peak Mule',
      description: 'A zesty and powerful mule with ginger beer and a squeeze of lime.',
      pairing: 'Pairs with: BBQ Chicken',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHlS0rmYJ6MnfmONhywD3w1VqGaFUKtZsVzmmSUQndlaLtB_u0QK5_EeUWNICRoEJfujxBS_EinBuTPkzgogKn-9ukyO31nOYcG31rLV_oZNfvVYfVAWkXfvssxbhYYdrjAHfWRGZX-ROZv_Kfq6d3v11HSjh-NhTeKQEhPUz7j5e7y9qElke2zcCLrAm7GwlJKktUqAikWpFnASDzc4h-yjBgV6_Us0dvOVohl3Q2cK8dWvCubxwKiroBYyNUzSrPuCD0ZKf8nzA',
    },
  ];

  return (
    <main className="flex flex-col gap-8 md:gap-12">
      {/* HeroSection */}
      <div className="@container mt-5">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3RtnjxVYimlDxbzXfLJg9CaGaphU_e-eijMXXg_DDKzsyDj4One6n9F72EbShwwyn9GDmGwb2FCJUVQ0_HBjI6VSJiXAtW3To0ZwgTxyI_JL3UHdE9cnZybpdWDAXAeormAdFWH6h5nMm6xTD5prSx0LFWY3WLqULQG6yYUzHg1opVpwvn8UYlPV-64xlLCTgqNCCS3QqHvgbo8eHyeUcTzZMIF9JC-mIfAGLZn1CgMphTdrTE8NTRMA-xpMF_MguC500kL8GoPU")`,
            }}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Artisanal Cocktails, Crafted for the Mountains</h1>
              <h2 className="text-slate-200 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-xl mx-auto">Discover the perfect sip to complement every slice, inspired by the spirit of Lake Tahoe.</h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="truncate">Start Your Order</span>
            </button>
          </div>
        </div>
      </div>
      {/* SectionHeader & Chips */}
      <div>
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Cocktails</h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary/20 dark:bg-primary/30 pl-4 pr-4">
            <p className="text-primary text-sm font-medium leading-normal">All</p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700/50 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-600/50 transition-colors">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Gin</p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700/50 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-600/50 transition-colors">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Whiskey</p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700/50 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-600/50 transition-colors">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Vodka</p>
          </div>
        </div>
      </div>
      {/* ImageGrid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {cocktails.map((cocktail) => (
          <div key={cocktail.name} className="flex flex-col gap-3 pb-3 group">
            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url("${cocktail.image}")` }}
              ></div>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">{cocktail.name}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal mt-1">{cocktail.description}</p>
              <p className="text-slate-500 dark:text-slate-500 text-sm font-normal leading-normal mt-2">{cocktail.pairing}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CocktailsPage;
