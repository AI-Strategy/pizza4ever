import React from 'react';

const LocalEmployeeCardPage = () => {
    return (
        <main className="flex flex-col gap-16 md:gap-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-5">
            <div className="mt-8 md:mt-12">
                <div className="flex min-h-[480px] flex-col gap-6 rounded-xl items-center justify-center p-8 text-center bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(26, 67, 20, 0.4) 0%, rgba(26, 67, 20, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU0gak2vnBXGZyCWyPCEgdYI5i3MwS0wpL2pNyDRi996_O7eJKBQwU1o3Vbn0-ymHhrQjwd0eGiUzSGCZUNqMT7mYcyfL-_h5OF6CLXFBwHrtwRsajPp0UvvHTVjPlQOpHw1sEh-ub9FyyeTOSRTVn1LePc5huXDxsbSPWUyhBaMzxhUjZWMwdx2IJNNXv0HYGVgZy4I1xJVhkvCCBOGetMZMdg-uUH6urQxiUYNpNMSdNfmVSHGZnTM3L5Vhq9k9X1aUCxNvuOG8")` }}>
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Locals Only: The Ultimate Pizza Perk.</h1>
                        <p className="text-lg text-p4e_cream md:text-xl">Tahoe employees get treated like the legends they are.</p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-p4e_orange text-white text-base font-bold tracking-wide hover:bg-p4e_orange-light transition-colors">
                        <span className="truncate">Get Your Card</span>
                    </button>
                </div>
            </div>
            <section className="flex flex-col gap-6">
                <div className="px-4">
                    <h2 className="font-display text-3xl font-bold tracking-tighter text-p4e_charcoal dark:text-p4e_cream sm:text-4xl">The Goods</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Perks cards */}
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* "Are you in the club?" and "Get Hooked Up" sections */}
            </section>
        </main>
    );
};

export default LocalEmployeeCardPage;
