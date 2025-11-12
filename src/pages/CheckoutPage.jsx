export default function CheckoutPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex h-20 shrink-0 items-center justify-center px-6">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-4xl">local_pizza</span>
            <span className="text-2xl font-bold tracking-tight text-white">Pizza 4 Ever</span>
          </div>
        </header>
        <main className="flex flex-1 flex-col px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col rounded-xl bg-background-dark dark:bg-[#221610] p-6 shadow-lg">
              <div className="flex flex-col">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Your Order</p>
                  <p className="text-[#baa69c] text-base font-normal leading-normal">Ready for the final grizzle?</p>
                </div>
              </div>
              <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-2">
                <div className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAl4KnY0qkz-HQspk4vNw8LHfTTsJf5UKMSlPHQvKjrUSMXlTIS0reUo5NpkBw3n9edH8IscqtnbWUsZY0TpKITR19jBZFiUlDITkTf6mLtYX6wbcuoBzKRBCo7QTx_FOK8eGguVDH9tRFL-frnKpL6q-VU0xVF_gZOwt7xrUR9KTPl31IlwtOjx6_tqvZNFn1Y0EtW7QpXs9UTVJ8mk4KFUc2Ssyo9AZPLrU7mAGhk3_DzfW8ht_GT4XfQRAvaVWgEmlZ9FVFhP8")'}}></div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal line-clamp-1">The Bear Necessities Pizza</p>
                      <p className="text-[#baa69c] text-sm font-normal leading-normal line-clamp-2">1x</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <p className="text-white text-base font-normal leading-normal">$24.00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEhTz7LgeifFm3E0eir-ikaxOMMWca5jE8Ex47FDxPcsu2qbDikRjP8_Q1BTQy6uyipgGsqQlmt4VuVbPlcgqN76V6xXt004pLv9n7SIxUxPZDCQWZrLO3AGt1pfcXzUAWNNFxIQGle0969upkc8XokBeuxg9-rcZtrifoiUh9-x_FTEOfEbVckjtdWoKT32h0bYpPp-OTLTg-2x5wQstGh7DdNOUMg2zeSGh0KEDZ-lNAatkLJsZE4EB0jdkkI88VarTcQ0IXij4")'}}></div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal line-clamp-1">Garlic Breadsticks</p>
                      <p className="text-[#baa69c] text-sm font-normal leading-normal line-clamp-2">1x</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <p className="text-white text-base font-normal leading-normal">$8.00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_ayc1bEU7jI12Vh57KgOgSt6DNXlG2gMx2ESmJp9pSIfVdTDVW6r-V7Y-n6f81tH0jNXhf2kF2tsKaJj7VZ6HkNSQsAgtVlpYwj-OsbPhBbMZaQRq-120XOnZVLulxTa9XsSxgB7-K_1gq28A1egCnN7G9kIsZGsamN8JvP-hUiK0wQQGglyAFTDlYknc9Si3lvEZk3QH_IrIQIezMQsLL6QyT631Dp4p4nlT8PP-uZcEjVwjefmEV3mlsXbJ-AHeMqGInLaiJnU")'}}></div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal line-clamp-1">Fountain Drink</p>
                      <p className="text-[#baa69c] text-sm font-normal leading-normal line-clamp-2">2x</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <p className="text-white text-base font-normal leading-normal">$6.00</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex justify-between gap-x-6 py-2">
                  <p className="text-[#baa69c] text-sm font-normal leading-normal">Subtotal</p>
                  <p className="text-white text-sm font-normal leading-normal text-right">$38.00</p>
                </div>
                <div className="flex justify-between gap-x-6 py-2">
                  <p className="text-[#baa69c] text-sm font-normal leading-normal">Tax (8%)</p>
                  <p className="text-white text-sm font-normal leading-normal text-right">$3.04</p>
                </div>
                <div className="flex justify-between gap-x-6 py-3">
                  <p className="text-white text-lg font-bold leading-normal">Total</p>
                  <p className="text-white text-lg font-bold leading-normal text-right">$41.04</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">Payment</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <button className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary/20 p-6 text-center text-white transition-colors hover:bg-primary/30">
                    <span className="material-symbols-outlined text-4xl">credit_card</span>
                    <span className="font-medium">Credit/Debit</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent p-6 text-center text-white transition-colors hover:bg-white/10">
                    <span className="material-symbols-outlined text-4xl">apple</span>
                    <span className="font-medium">Apple Pay</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent p-6 text-center text-white transition-colors hover:bg-white/10">
                    <span className="material-symbols-outlined text-4xl">google</span>
                    <span className="font-medium">Google Pay</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border border-white/10 p-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">pets</span>
                  <div>
                    <h4 className="text-lg font-bold text-white">Fur Buddy Bites (FREE)</h4>
                    <p className="text-sm text-[#baa69c]">A treat for your best friend!</p>
                  </div>
                </div>
                <label className="text-base font-medium text-white" htmlFor="dog-count">How many Dogs?</label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-md border border-white/20 bg-[#221610] px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="dog-count">
                    <option>None</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/50">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">Add a Tip?</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-white/20 bg-transparent p-4 text-center text-white transition-colors hover:bg-white/10">
                    <span className="text-xl font-bold">18%</span>
                    <span className="text-sm text-[#baa69c]">Good</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-1 rounded-lg border-2 border-primary bg-primary/20 p-4 text-center text-white transition-colors hover:bg-primary/30">
                    <span className="text-xl font-bold">20%</span>
                    <span className="text-sm text-[#baa69c]">Great</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-white/20 bg-transparent p-4 text-center text-white transition-colors hover:bg-white/10">
                    <span className="text-xl font-bold">25%</span>
                    <span className="text-sm text-[#baa69c]">Un-bear-lievable!</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-white/20 bg-transparent p-4 text-center text-white transition-colors hover:bg-white/10">
                    <span className="text-xl font-bold">Custom</span>
                    <span className="text-sm text-[#baa69c]">Amount</span>
                  </button>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-4 pt-4">
                <button className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-5 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105">
                  Pay $49.25
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
