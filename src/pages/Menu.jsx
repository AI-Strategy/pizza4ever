import React from 'react';

// Mock data - replace with actual data fetching
const signaturePizzas = [
    { name: "The Grizzly Peak", description: "A beast of a pizza with pepperoni, sausage, and bacon. You'll bearly finish it!", price: "$24.99", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhBHIau7Hnsg2Fmc4DM6Koy-Uqdk36wSOEYND0z5-Ld0I23fp6Sm5EP9guU_9fnEeNQe7MBwdsqtzVBKdrE-CeJufbWTdq-0xfc2okMLE0j3rrRwic-mujR_mo14Mtmw-gtuJM5SjngEwsOP4nE1QvfzU9hvuOPJI8ASt1b8MaqzXJcYZyL-KSr8nqFyPMxk4GVTd6jcXkYEjmeFe-UKGJXVCHdN3DfvPahjAzkhogi2vwAX3ZYsj25AXnUncV_0Z6XE6Ap0EJGhE" },
    { name: "Alpine Veggie", description: "A mountain of fresh veggies including peppers, onions, mushrooms, and olives.", price: "$21.99", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvLkgqT57IMy3--gluU66p0jVWSWYwBj7k73CVgaLP0V6Fu9CsxdOtZJi3aRdWGc3uA3vqg_4jeSBm36D_TOUeFGRyeMPsTZpTrDzGV06Z1fF4MPmqmtqnxZdmDKj0LklNMOvt1ghINbXwRW_mivtoAZgymehnltOKXBPVR6Fz_AIlNIDujrueDcU2_k6QL33qP2rcbC0wFTSnRwcQo__O-EILJheTY9m1oXXPO2vAWtkX9M-FaMyZAKQRDCUvBbRhXQWHiWgqt1U" },
    { name: "Tahoe Sunset", description: "A beautiful BBQ chicken pizza with red onions and cilantro. It's un-grill-ievable!", price: "$23.50", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkvyrdoFf-THD_xiS2_dAzyejGSGV0EAasa75RWSNG0LEAz1tXUslh5HPwYe3a6dYsxEmh8TMjXOkM8hC9wIXJsFk5txF2zSgWw7ZDRvnXarSOKza1vIHgjitJGHgzIm5H_BRdzJ-7OxTEu-JHE1D1CmGVfLdjXqb3dxMtMfR5JNHytEGSUdo_rw6c3vgQpQEEPs4DaQDoEoB7SB3I1xfiIYJDOCrFHzFHBrhrBqV9Gbkf3h711UF5y83dmaN7MQAPApRFNY_aCGE" },
    { name: "Ponderosa Pesto", description: "A delightful chicken and pesto pizza with sun-dried tomatoes and pine nuts.", price: "$22.99", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFgLDaepG-vs3BPoVzEhgxb7sYxjJuViEAdY6m1GMrRfiV76f-ujarxCqz1PX8je-HmnbW70OIP_WaixE842ejan3lNzEMn_lgj7V58FUDhoxniGTLYRHad0vCZTKIS7L_-W5ljlkGhg_Y9zCTE-MYr22Uj91Vm3nSLg2YGwR7dPKXFRDpxMnTHl4GEHJy-pKHr5VUSUJIC6DAa9lEqYvU6A7uxieb2ZdQB-JaXUoT6qY1UlWu5UmQXbBsif5_NK6KaLisN-sabVs" },
];

const OrderCart = () => (
    <aside className="w-full lg:w-1/3 xl:w-1/4">
        <div className="sticky top-[157px] rounded-xl bg-surface-light p-6 shadow-lg dark:bg-surface-dark">
            <h3 className="font-display text-2xl font-bold text-text-light dark:text-text-dark mb-6">Your Order</h3>
            <div className="space-y-4">
                {/* Cart items will be mapped here */}
                <p className="text-center text-text-light/80 dark:text-text-dark/80">Your cart is empty.</p>
            </div>
            <div className="my-6 border-t border-text-light/10 dark:border-text-dark/10"></div>
            <div className="space-y-2 text-text-light dark:text-text-dark">
                <div className="flex justify-between text-sm">
                    <span className="text-text-light/80 dark:text-text-dark/80">Subtotal</span>
                    <span>$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-text-light/80 dark:text-text-dark/80">Taxes & Fees</span>
                    <span>$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$0.00</span>
                </div>
            </div>
            <button className="mt-6 flex h-12 w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-base font-bold text-white shadow-lg transition-transform hover:scale-105">
                <span className="truncate">Checkout</span>
            </button>
        </div>
    </aside>
);

const Menu = () => {
    return (
        <div className="flex flex-1 flex-col px-4 py-8 md:flex-row md:px-6 lg:gap-6 lg:px-8 xl:gap-8 xl:px-12">
            <div className="w-full lg:w-2/3 xl:w-3/4">
                <div className="mb-8 @container">
                    {/* Hero Section */}
                </div>
                <div className="sticky top-[73px] z-40 bg-background-light/80 dark:bg-background-dark/80 py-4 backdrop-blur-sm">
                    {/* Category Chips */}
                </div>
                <div className="border-b border-text-light/10 dark:border-text-dark/10 py-8 @container">
                    {/* Build Your Own Pizza Card */}
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 py-8">
                    {signaturePizzas.map((pizza, index) => (
                        <div key={index} className="flex flex-col overflow-hidden rounded-lg bg-surface-light shadow-sm transition-shadow hover:shadow-md dark:bg-surface-dark">
                            <div className="w-full aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${pizza.image}")` }}></div>
                            <div className="flex flex-1 flex-col p-4">
                                <div className="flex-1 space-y-2">
                                    <h4 className="font-display text-lg font-bold">{pizza.name}</h4>
                                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">{pizza.description}</p>
                                    <p className="text-base font-semibold text-text-light dark:text-text-dark">{pizza.price}</p>
                                </div>
                                <button className="mt-4 flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-sm font-bold text-primary transition-colors hover:bg-primary/20">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <OrderCart />
        </div>
    );
};

export default Menu;
