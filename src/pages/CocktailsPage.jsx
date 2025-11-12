import React from 'react';

const cocktails = [
    { name: 'Tahoe Sunset Spritz', description: 'A refreshing blend of Aperol, prosecco, and a hint of elderflower.', pairing: 'Pairs with: Margherita', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_-Wpt7LlByi3FgRmkcD3SVl7zWaHkPSukYgPPgU_xebrCVfIF5MH2sB4-vHXjZzCyauRS34b62gUmJrK01qswwDikpjo5G0wb1PooDSx1RWCXo7AAnzJqwK_lnO4SeGvwT0k-IgqJhJbhT8BBOf634_qhLuhPkiNC8MahRPqVQOquwLQ9-0HaNZUCyBAtQK8DnKSFjpculVmHwsZzX7_WLuDHv_cw9qV_4uesZ_D64F7Itucz7XdocQ-921nzObMCv9V2rx9gr3A' },
    { name: 'Incline Old Fashioned', description: 'A classic, robust old fashioned with a touch of mountain-pine bitters.', pairing: 'Pairs with: The Carnivore', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2dJO2CjTN0TsNq4uHb0Hegn-U886iQoxFzDgao1wFbOBEc8dTqQ3CyS9NZLBaHIwsiTU5PQx2FJxPUpIeqklMH7zggHfMzuZr9CgAsO4JqJCx9F8gYbslxTakLI-GGuqoY9h1CucupmctOoJRd1rd9QpKR23KQ0z-xc80RNNVsQlBRZn5YQ77CIp1FSi8PeK_hq4G5Bm4sqj1Y6s0A4U9KpmscRcFMzWKAiWTjvd8t1HgpEwA4R00Ac3WdMdHPsujiMGQO8yE8S8' },
    { name: 'Emerald Bay Gimlet', description: 'A crisp and clean gimlet featuring locally distilled gin and fresh lime.', pairing: 'Pairs with: Veggie Supreme', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQoFGp8LeeuG6AQOjt4fn452UtlQZxSw6tSU_tymyqIjs3kWYSRzDK1AQGecrhstELc2oKr2HwxD0gRxpF8B49v6P85KeVZEbK9XiWD_Fw9F9jqbnUh2NtZyay3AM_boewti38KmYieuWBEYcFPkZhMizVzaO2X83v-eWW-9M1XhlG37Bm7UUaWKjcN2D4NL_cmD34V2kffWwMwCsdVTVvEc8wTXX99ZZA4AXtPTW369qIN5eSBJSEowzLzfWHtw5p2oNFOcBakG4' },
];

const CocktailsPage = () => {
    return (
        <main className="flex flex-col gap-12 md:gap-16 lg:gap-20">
            <div className="@container mt-8 lg:mt-12">
                <div className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-6 text-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3RtnjxVYimlDxbzXfLJg9CaGaphU_e-eijMXXg_DDKzsyDj4One6n9F72EbShwwyn9GDmGwb2FCJUVQ0_HBjI6VSJiXAtW3To0ZwgTxyI_JL3UHdE9cnZybpdWDAXAeormAdFWH6h5nMm6xTD5prSx0LFWY3WLqULQG6yYUzHg1opVpwvn8UYlPV-64xlLCTgqNCCS3QqHvgbo8eHyeUcTzZMIF9JC-mIfAGLZn1CgMphTdrTE8NTRMA-xpMF_MguC500kL8GoPU")` }}>
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="text-white font-display text-4xl font-bold leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl">Artisanal Cocktails, Crafted for the Mountains</h1>
                        <h2 className="text-neutral-200 text-base font-normal leading-relaxed md:text-lg">Discover the perfect sip to complement every slice, inspired by the spirit of Lake Tahoe.</h2>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:brightness-110 transition">
                        <span className="truncate">Start Your Order</span>
                    </button>
                </div>
            </div>
            <div>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.015em] px-0 pb-4 pt-0">Our Cocktails</h2>
                {/* Filter chips */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {cocktails.map((cocktail, index) => (
                    <div key={index} className="flex flex-col gap-4 group">
                        <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center transform transition-transform duration-300 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url("${cocktail.image}")` }}></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-display text-lg font-semibold">{cocktail.name}</p>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal">{cocktail.description}</p>
                            <p className="text-text-secondary-light/80 dark:text-text-secondary-dark/80 text-sm font-normal mt-1">{cocktail.pairing}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default CocktailsPage;
