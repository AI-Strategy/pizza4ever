import React from 'react';

const CateringPage = () => {
  const galleryImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzkvjuFPqqPoeqvN_6trh86qAQyJYHdRZrCRmUjMsmOzZSFeetN47avFsS8qXARZfIgEJO-gNoFMKDcYffrNEOxhDbJNXZThleAahgHVH0Ju43Rtu51gJ-hiXehaJADYGjA9-d1WameH296jYRIEObPOZOuZMUMyTt9hqOy9Rte6vxeuEAYEkQF3bUSEj0pHg0vaJtgl-z5VfPJBuMvmsw-S6m7IwEu_RhhiKihX7LvhAA4Z8nMJ5PixrJgj2zv-Ujc_p19yYZzyw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAbdWYIDmfZBRDgLqir5ZnEwQQH3L0m5MilDyh5ADiX6QJA8te_dufhBXT8BvTD3R4m81rrunGeaylSI_ScmoIVDmPeg__QsHJgZFYccMq-Kh9s01yPsOyQEixr0K1pBAk5PtLuWKXsqoja-pyeikO4JPBifJLDA2kMI2z-i98AXInTLt3vOHLAlpgzrox3gG2SWy8EIavpAE2IGY7FXKIxVuHgeq7ZF_foXvz1lZh1L6SAgq67mJRkBoSgUxbAXEPKgasqIoamlpQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBbaofcDMWhB4P2ZGTupKhN-4_9tPbJtWAwInoG82Flol3N8S7jjPrE0lx_eHCnZbeEuzHcwG0zPO1Yg2EOU2sXlWzj33A7vQo6Ni9G8SKREta36zwkTo8oI1qmpthncksnouU1PCaXyLdzbVBr9sgPprPvdayw9Y2hMkyFktMZae-WZe4QEjhVv5B_yGswTSiHClUtX5bH__GjYDTiEQ_okyKySymxEvn3HYXJVWgmxozq4ZbWXGYQBPVEQNLqT52_bXUc73Ovfrg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAQRAMdRLCpVpV4C7SNSDm7_YSCOgunJkYLhaA2DDmTdodlCHXIjaXRgiKjWsIM553SSQOVYv1ZOM1rIpl1F8MqyBKxaqFo5fMnnwoQcccjHXpSXYMTOLX4tEY7FEZzA82zfxfJ7l3cnLQmSuG-uisu6sOX2ELLui3Syb6fXOFo2aatW1QtyokDubGxMBmqJPnE6y3mlDBfRL4-eJ9bJAVAimTSl_vaa_to13pF8VaTTQgbYYJhXBVtvEqRLG0R4ILt0pYN5UPAa8Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDTwsrhNVvx3or2CA4nvcpYOOAF1tfq3rn3eEyq7krfjUn7oSPxF-szfbA2qtiJ8ygg8pDUWLokNIsIjz2A9s2IEE--vBAGWDSOEOuxUnimPf7u0EYV-xlrpLtSGfaRTBGNfy0RSaF5bMNL54LRn8r9QjUAIrux6nYFNKvv77OLv648hXuwiKKynic9mhjnwlE8joTYWDGpGGEwgmcjxQCtd6PXGpaT27_H3dWHoi6_v-npOE7pgQAMo1empPc8CPDN4iPRCfowoBw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAD4Mrf8B6Un9X5O-ZVCjjyDcKkBtoXz5N-qKVBCZik2NZHwOG1gZi-ADnQEh2n_4UBY0AV6dk-fs_F8GDKeoCe6Sjs100SggtLWeAtj-LoFrCA_DpuiaRwFI6xP4ZGA76_FhxgqiFa2KeupAl4-BcUSUzEp8X8cyPdCm4lGNxxyBO3jqD_Dtt6xQ4kZBGVCZ5SE9YVIr3ieo9MEzMf5VsC9eTjS_w3vZGBFeGUxOQZYKeGxmXOuJJRs6nF6gdsJ0N6xO_4sRBcfQ8",
  ];

  return (
    <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <section className="@container">
        <div className="@[480px]:p-0">
          <div
            className="flex min-h-[60vh] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnyx3JchO8Dud66SdbDaRBG-jjQBJnS7Ry6bNoF70aM5qAuYmDp0sx0WO4QJrm2aX8RlIY1QV_PrPL8gp5fcxRlLQMvZ3jEPG9QF42NoVStJiUTubpB2pbnQ-qAHTUxVv5zSWVCUzjtV7M1uw_IF0k71UweqrPYlLR9uuEzoZIMcSgBeH8TKUWc_I2c5GiHalvTO1Lzm44J0W7F8I91X7R_Z83KBzgR1HyYM85muOmktXT7eXUL2vEqlDue-ZIwhyOPQ5TT_uzKPo")`,
            }}
          >
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                The Ultimate Pizza Party, Delivered to Your Doorstep.
              </h1>
              <h2 className="text-white/90 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
                Experience our unique wood-fired pizza van at your next event. Fresh, authentic, unforgettable.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="truncate">Request a Quote</span>
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-accent dark:text-primary mb-2">event_available</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">1. Book Your Event</h3>
              <p className="text-text-light/80 dark:text-text-dark/70 text-sm font-normal leading-normal">Tell us your plan and we'll customize the perfect catering package for you.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-accent dark:text-primary mb-2">local_shipping</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">2. We Arrive & Cook</h3>
              <p className="text-text-light/80 dark:text-text-dark/70 text-sm font-normal leading-normal">Our fully-equipped pizza van rolls up to your location, ready to fire up the oven.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-accent dark:text-primary mb-2">local_pizza</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">3. Enjoy Fresh Pizza</h3>
              <p className="text-text-light/80 dark:text-text-dark/70 text-sm font-normal leading-normal">You and your guests celebrate while we serve delicious, hot pizza on-site.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-center">Our Catering Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark overflow-hidden">
            <img className="w-full h-60 object-cover" alt="The Pizza 4 Ever van parked at an event, with chefs preparing pizzas inside." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBau8a4w3WzHV1KremfVKJXgoqO5fngryTu5oL4OsCcHKlBry7NVkInRUDBcoP8S1nteNwitBxnbecH2RlLDJnx2Fd6zHXcB-YfVjbOopMXepRGzGlUSVZbpiLdFi4VnmVGwTKCB448uzA68qhKQr3LNXU4Q9e4UavDlJfxNWoOT2FjuPkiGXVMPIE7mpwU5wcShcQQlHxVxi3cxM8LvrlDNJNj3QWR1JZe3wIcLJ9b-w8yiSVJRLmKT4sDBAyuwdCOWBxK5okgTGc" />
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">The Pizza Van Experience</h3>
              <p className="mt-2 text-text-light/80 dark:text-text-dark/70 flex-grow">The full-service package. Our mobile wood-fired oven and professional staff arrive at your location to cook and serve unlimited, delicious pizzas for you and your guests. An unforgettable centerpiece for any event.</p>
              <a className="mt-6 text-sm font-bold text-primary hover:underline" href="#">Learn More →</a>
            </div>
          </div>
          <div className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark overflow-hidden">
            <img className="w-full h-60 object-cover" alt="A stack of pizza boxes ready for delivery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6dJEBhv7mmAEHIOAbjx0kd0dERdraTT1_NmF4y5bjvq6fbQbld-tg_LwL1skSee6r-_9IMl7ivjWiUC4TWcdRJWcnjNKY5Ypk4KfXXS_610-BMsuW5T7S9V2olkmsGAt16Btph5-hkFtnE3CqZiDNeopQByFpPHlfZo9dqyCBe5ZK29hj1PtzaXTi4iyckXwR8LZlzNGZgmVvWSFdFzTZG-UJf4jJ1n-PI1C135XwvHKW2JAn68i4aOsqlUSoxnEEhNmTOfOdo04" />
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Delivered Catering</h3>
              <p className="mt-2 text-text-light/80 dark:text-text-dark/70 flex-grow">Perfect for casual gatherings or office lunches. Get our signature pizzas, fresh salads, and appetizers delivered hot and ready to serve. Convenient, delicious, and always a crowd-pleaser.</p>
              <a className="mt-6 text-sm font-bold text-primary hover:underline" href="#">Learn More →</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-center">Gallery</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4 p-4">
          {galleryImages.map((src, index) => (
            <img key={index} className="rounded-lg break-inside-avoid" alt={`Catering gallery image ${index + 1}`} src={src} />
          ))}
        </div>
      </section>
      <section className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">Book Your Next Event</h2>
            <p className="mt-4 text-text-light/80 dark:text-text-dark/70">Ready to make your event unforgettable? Fill out the form and our catering specialist will get back to you with a customized quote.</p>
            <div className="mt-8">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p className="text-text-light/90 dark:text-text-dark/90">"The pizza van was the absolute highlight of our wedding reception! Amazing pizza and even better service."</p>
                <footer className="mt-2 text-sm font-semibold text-text-light dark:text-text-dark">- Jane D.</footer>
              </blockquote>
            </div>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="name">Full Name</label>
              <input className="mt-1 block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-accent focus:border-accent" id="name" type="text" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="email">Email</label>
              <input className="mt-1 block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-accent focus:border-accent" id="email" type="email" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="date">Event Date</label>
              <div className="relative mt-1">
                <input className="block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-accent focus:border-accent pr-10" id="date" type="date" />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="material-symbols-outlined text-gray-400">calendar_month</span>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-900/20 p-3 text-sm text-green-800 dark:text-green-300">
                <span className="material-symbols-outlined flex-shrink-0 text-base leading-none">check_circle</span>
                <p>Good news! We have vans available for this date.</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="guests">Guest Count</label>
              <input className="mt-1 block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-accent focus:border-accent" id="guests" placeholder="e.g., 50" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="service">Service Choice</label>
              <select className="mt-1 block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-accent focus:border-accent" id="service">
                <option>The Pizza Van Experience</option>
                <option>Delivered Catering</option>
                <option>Not Sure Yet</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors" type="submit">
                Get My Quote
              </button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="border-t border-border-light dark:border-border-dark pt-8 px-4 text-center">
          <h2 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark">The Fine Print</h2>
          <div className="mt-4 max-w-3xl mx-auto space-y-3 text-sm text-text-light/80 dark:text-text-dark/70">
            <p>Minimum event size $500 for three hours onsite. We will leave your property nicer than we found it.</p>
            <p>We can bring out a full wood-fired kitchen and mixology team for high-profile events.</p>
            <p>Winter catering in Tahoe can be an experience, but we almost never let mother winter get in the way.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CateringPage;
