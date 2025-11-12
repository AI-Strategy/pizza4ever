import React from 'react';

const wines = [
    { name: 'Pinot Noir', region: 'Sonoma Coast, California', pairing: 'Pairs with Spicy Fennel Sausage Pizza', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtLR6BYdbkYvWsgx784SsRGm_zhuPbEkDMtiExB5GG47Q4bm0sX1s7aVoxw1iMwFmF-dLVYqaWDbTGwqcQzjvdrngHxvq5QMxLSgEz_riFLOJUUhWTk2OuNNyFvlUnghSyv9y7BV7npG8WKSHoqIFruSgE6ZUXsJLDuJZnmPF_dVjbWqMOwMSOf-bNcb7gWGebkdB-zJ7ezx5-cldHS5O47JOXrylZ9WWao7LhbR5t73egRDwICrBmRqlOXCC1Uq4AwMpmwEncnQU' },
    { name: 'Chardonnay', region: 'Napa Valley, California', pairing: 'Pairs with Wood-Fired Salmon', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuQNBKMlVOzFv-46P4ylCPCuuuh21S-c8XNTqrY9970COoMmgRbFk7mGo__O7YNRotdN9qpPzBtCOoOSxLXSUWl09MqVQNn5A84-eHRAlCFVDH_oqJdD530eFCdbMTVV9kETFWDPFQTq-tK5C46dowj8Xz89r8wNX9KvLAhIAOnNJdTmAnEdKrrmCIBZOYP9lRp5_ebVBmu6k4yn07aw7iwsa-X5R0CzQJATyJut15oGKq0KHptWQ29iUmccmS7Jko3RDbj4CqzHA' },
    { name: 'Sauvignon Blanc', region: 'Marlborough, New Zealand', pairing: 'Pairs with Margherita Pizza', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6P7Od8Dqb40rvJ2vLn1-j-PbwNZbYpCOgKBm26zga2w4s8j665MhP_FFB6Pha85_Dpb4ybxTor71CL3rgOBl3_6Xr0KCUJ2qm1z6mnxRCqJ8YsEPfUYkgAD1KqDF3g-gZ6kj_6YIlTdul4y51iou4VtOkeUGPFOaZ4Y7MgzIQEqunYNbZz_cJM122TmpY4-d--03YR4djNSCicRedWrTPdndtT9Z2ESlG1UBkt5jQr996soJs0c2O48qFICfrHgfxSsy3SfzaePM' },
];

const WineCurationPage = () => {
    return (
        <main className="flex-1 w-full bg-stone-950 dark">
            <div className="@container">
                <div className="@[480px]:p-6">
                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 text-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuArg8Hs4qZLSGXM5BNTRaLIwZEd7d1Uuo2upK7ZLnctIGPRvmmIH_2lOd5Ib9onL-5DWWqedG166sVA522FNxufiEWlrek4wzykNNU6jlcFRaK6y_N1zjRyIH073NVSwXeG-tsxVVLsyex0dHbkJ6pFq1PPF65CTo9GJE9aicqjilmLaruEiwJeHFQk-4TJciPiiRVqqtQUTY8K9JL0tUEcYBQcBlNAHPCQvqFOkBptIa4fac82DKymlVs0cQP0AcIz1frcEh5gUgM")` }}>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-serif text-4xl font-normal leading-tight text-stone-50 @[480px]:text-6xl">Our Wine Curation</h1>
                            <p className="text-stone-200 text-base font-normal leading-normal max-w-lg">Explore our hand-selected wines, perfectly paired with our mountain-town flavors.</p>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-stone-50 text-base font-bold tracking-wide hover:bg-primary-dark transition-colors">
                            <span className="truncate">Explore The List</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-10 lg:px-20 py-16 sm:py-24">
                <div className="mb-8">
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-50">The Cellar</h2>
                </div>
                <div className="flex gap-2 p-1 flex-wrap">
                    {/* Filter chips */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8">
                    {wines.map((wine, index) => (
                        <div key={index} className="flex flex-col gap-4 group">
                            <div className="w-full overflow-hidden rounded-xl">
                                <img className="aspect-[3/4] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={wine.image} alt={`Bottle of ${wine.name}`} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold leading-snug text-stone-100">{wine.name}</p>
                                <p className="text-sm font-normal text-stone-400">{wine.region}</p>
                                <p className="text-sm font-normal text-stone-400">{wine.pairing}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default WineCurationPage;
