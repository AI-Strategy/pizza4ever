import React from 'react';

const CheckoutPage = () => {
  const cartItems = [
    {
      name: 'Pepperoni Classic',
      description: 'Large, Extra Cheese',
      price: '$22.50',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6frgaLy6nuqkTo_rYyTJWBL-3VrHIsBuFl2NAQWgXgrJY-Eht_Z86dYd5ricf027r45YgjFPB26i6y6QGI7az0am8a731_9-NE4UjwZjzdjplnEM0CBx5_BieT0ZHOSvIZxsQmn1ugcBx0IKx3aGFiGN7pUXOPeNvFIwT1WEJnhQgu7i-uuy6cp78yQhWTFVUVf3xgdr9WFah_E5KOCmhonNc0n8qJ8ZoFjOzecCCXIc30dhBjKBsYemoH6qArawfLwct2Rt5GPw',
    },
    {
      name: 'Mountain Veggie',
      description: 'Medium',
      price: '$18.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQculugNtpYMPYPzPFsuoHcaywoe-hH6pLOisvryqhrqMUhm8XQhnIb1ApDSsFiq9FEXaXBrjI3dSqfghbs5xDwbYBK3M3vs2tbq-wiNIAyZ85dnx2BCPpyjAB_kNN3G1CSsQNxg4NQnE2UJXx7sse5_bllZu0iLt8Ik6rwpNXEPNQagJwDCjb6xAIbAdkzypSPx8bVxL7HXweutaxzn_UaXhZ9ToSXmyI56yhSdyAkdGf9ULfFdgBMxTZxU0YNweM5W81ASifTAs',
    },
  ];

  return (
    <main className="px-4 sm:px-10 lg:px-20 py-5 font-vietnam">
      <div className="layout-content-container mx-auto flex max-w-7xl flex-col">
        <h1 className="text-gray-800 dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">This order is looking un-bear-ably delicious.</h1>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 pl-4 pr-4">
            <p className="text-primary text-sm font-medium leading-normal">Cart</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e0e0e0] dark:bg-[#392e28] pl-4 pr-4">
            <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">Details</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e0e0e0] dark:bg-[#392e28] pl-4 pr-4">
            <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">Payment</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e0e0e0] dark:bg-[#392e28] pl-4 pr-4">
            <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">Confirm</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 px-4">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <details className="flex flex-col border-t border-t-[#e0e0e0] dark:border-t-[#54433b] py-2 group" open>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-gray-800 dark:text-white text-lg font-medium leading-normal">1. Review Your Cart</p>
                  <div className="text-gray-800 dark:text-white group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <div className="space-y-4 pt-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img className="w-16 h-16 rounded-lg object-cover" alt={item.name} src={item.image} />
                        <div>
                          <p className="text-gray-800 dark:text-white font-semibold">{item.name}</p>
                          <p className="text-gray-500 dark:text-[#baa69c] text-sm">{item.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-800 dark:text-white font-semibold">{item.price}</p>
                        <button className="text-primary text-sm font-medium mt-1">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
              <details className="flex flex-col border-t border-t-[#e0e0e0] dark:border-t-[#54433b] py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-gray-800 dark:text-white text-lg font-medium leading-normal">2. Delivery & Contact</p>
                  <div className="text-gray-800 dark:text-white group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-gray-500 dark:text-[#baa69c] text-sm font-normal leading-normal pb-2">Enter your delivery details here.</p>
              </details>
              <details className="flex flex-col border-t border-t-[#e0e0e0] dark:border-t-[#54433b] py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-gray-800 dark:text-white text-lg font-medium leading-normal">3. Payment</p>
                  <div className="text-gray-800 dark:text-white group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-gray-500 dark:text-[#baa69c] text-sm font-normal leading-normal pb-2">Enter payment information here.</p>
              </details>
              <div className="border-t border-t-[#e0e0e0] dark:border-t-[#54433b] pt-6 mt-4">
                <h3 className="text-gray-800 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] text-left pb-3">Feeling generous? Our drivers wrestle bears for parking.</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button className="px-4 py-2 rounded-lg border border-primary text-primary bg-primary/20 font-semibold text-sm">15% (Okay, I guess)</button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-sm">20% (Nice!)</button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-sm">25% (Pizza Legend!)</button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-sm">Custom</button>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-[#392e28] rounded-xl p-6 shadow-md">
                <h3 className="text-gray-800 dark:text-white text-xl font-bold mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$40.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>$3.24</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tip (15%)</span>
                    <span>$6.08</span>
                  </div>
                </div>
                <div className="border-t border-t-gray-200 dark:border-t-[#54433b] my-4"></div>
                <div className="flex justify-between font-bold text-lg text-gray-800 dark:text-white">
                  <span>Total</span>
                  <span>$54.82</span>
                </div>
                <button className="mt-6 w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Place Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
