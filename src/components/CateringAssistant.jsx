import React from 'react';

const CateringAssistant = () => {
  const popularPackages = [
    { name: 'The Sierra Package', icon: 'local_pizza' },
    { name: 'The Tahoe Package', icon: 'local_pizza' },
    { name: 'The Mountain Party', icon: 'local_pizza' },
  ];

  const cateringPackages = [
    {
      name: 'The Sierra Package',
      description: 'Perfect for small gatherings (10-20 guests).',
      price: '$25 / person',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjjis9AcWoDf76ve0uQsxofnnLGwg5ENM-FIEBb0kwAmmZNEEByLtFELEZDi78wwfTJwPlJtQeD4jhuUT64a6ilKh3hDc6chvXWNJCJ-3-rjOPf3TsMulA1dkzfqRVZfCuc9Kydy_DR28ca7XRpSfKvcClJx6VOIYg12hBRNi_4B9Iq-JHWr6ZvxZpqSSDT-UnUE50dk_e3C2ORjyhrQsjBqx1kh8LDnD6RjTigf6N4YIa3QwLgRKNLJ1vgxxn_2mipK9nrKokLHc',
    },
    {
      name: 'The Tahoe Package',
      description: 'Our most popular choice (20-50 guests).',
      price: '$35 / person',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUWfynKg6NogHwDwuKOl7K5bCy5TX0rTz64XwMaYbPT1aJeeN_yQIGq-Nof3NtW6gsnnNnyFYZMe44JQAb1js3S-gVLxpIDEm8rkLv96y0EIQhLM_mRWgZGVJOb83Z5yzLVVNL3CxQTA3x-x91I3mOoJiRhc1TqxVszgDIt6SJI9db1qNW7ZtqVpylxdTUzTH3R8Egm-Us0caob1QV_8DxLljCTwAO-ZnVBlnxZSG61xisHjn0Z2r-bN7Lt97EM_zIRTojuGJKMJo',
    },
  ];

  return (
    <div className="flex h-screen w-full font-display bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="flex w-80 flex-col border-r border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-background-dark/50">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc9YmH7baNCwgZzO0E_wuNADBmsvbXjLzcyxsnv7uZdco5xgyorhgoYvUX01_5d6ZO5UlzwoN2JatuGOzIQ9zhKI8Dj9ejD529rwAF4hW3cd9iA-uR1lIFPrMQkwg1adcKcblrTi8MMN7O5xnTPMSnAxJhCSqvJmlRCNapSYU4awtpsu-fPhWI6FgdWjw4LDjsiQuMEK_GCbkTt6-LKnu-4s9S7HU026WpDYO8Tu2SbdBo1WsFp220trEjo6c8q68VxMptb4QrQbA")`,
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Pizza 4 Ever</h1>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Catering Assistant</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <h2 className="px-3 text-sm font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">Popular Packages</h2>
            {popularPackages.map((pkg, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 rounded-full px-3 py-2 ${
                  index === 0 ? 'bg-primary/20' : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span className={`material-symbols-outlined ${index === 0 ? 'text-primary' : 'text-text-light dark:text-text-dark'}`}>{pkg.icon}</span>
                <p className={`${index === 0 ? 'text-primary' : 'text-text-light dark:text-text-dark'} text-sm font-medium leading-normal`}>{pkg.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-1">
          <h2 className="px-3 text-sm font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark mb-2">Need Help?</h2>
          <div className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark">call</span>
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Speak to a human</p>
          </div>
          <div className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark">mail</span>
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Email Us</p>
          </div>
        </div>
      </aside>
      {/* Main Chat Area */}
      <main className="flex flex-1 flex-col">
        {/* Header with Breadcrumbs */}
        <header className="flex items-center border-b border-black/10 px-6 py-4 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <a className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal" href="#">Details</a>
            <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
            <a className="text-text-light dark:text-text-dark text-sm font-bold leading-normal" href="#">Package</a>
            <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
            <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">Quote</span>
          </div>
        </header>
        {/* Chat Window */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6">
          <div className="flex flex-col gap-6">
            {/* Bot Message */}
            <div className="flex items-end gap-3 justify-start">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOgonVOf5gBtHn7uE3D_46CXUPtzcXzOskKctOVfydwqNfUp23MSQGiPa5fOFCRaRGWr5gQUo3lF1QectsG-PpoLX9Je_wvZUvnHXN7Uq0Etxu7g0q4wkOMNCJW3J26nwyaibHa625lwUByHq5ZBamDyfXuNmkatZTUMAoPoKc1FDVBXlHIUaByr5KpsVKy-FD2UBVtMaYeKaRbEqRTNMXKozUEq43RHLnRoPmoqV-yf8XTWzjUhOayEP7nVRs-XL1ZClA090VK_U")`,
                }}
              ></div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <p className="text-text-muted-light dark:text-text-muted-dark text-[13px] font-normal leading-normal max-w-[480px]">PizzaBot</p>
                <p className="text-base font-normal leading-normal flex max-w-[480px] rounded-xl rounded-bl-none bg-accent px-4 py-3 text-white">
                  Ready to turn your party into a pizza-palooza? I'm here to slice through the details. Onsite event or takeout?
                </p>
              </div>
            </div>
            {/* Quick Reply Buttons */}
            <div className="flex gap-2 pl-12">
              <button className="rounded-full border border-primary bg-primary/20 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/30">Onsite Event</button>
              <button className="rounded-full border border-text-muted-light dark:border-text-muted-dark px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5">Takeout</button>
              <button className="rounded-full border border-text-muted-light dark:border-text-muted-dark px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5">I need help!</button>
            </div>
            {/* User Message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="flex flex-1 flex-col items-end gap-2">
                <div className="flex items-center gap-3">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">10:01 AM</p>
                  <p className="text-text-light dark:text-text-dark text-base font-bold leading-tight">You</p>
                </div>
                <p className="text-base font-normal leading-normal rounded-xl rounded-br-none bg-primary px-4 py-3 text-white">Onsite Event</p>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-S6y2x9ogMFMwYGKyG87ubjuKc3jMnnEIrbG_8HVlomPonas5j_dy6p74RdfSHaEiuE0At47Wdr9DEJgljxAMa3nx9_IkmwHQH_6iz88IHJ1HYJTFM4R8Xr7XN7-52EI3N7pVPfE84-qYvEzylS1MdvKPVMUAXBJQPej8jTMYvXTdeex1JCbLdji7bsMEelEcNhaphMeMY5f-On9Niy4KhYD24RbOqnmIYmUVGM1Yx7uPL8zt57irQGkcnEDEuodXOZpzvDPArNs")`,
                }}
              ></div>
            </div>
            {/* Bot Message with Interactive Cards */}
            <div className="flex items-end gap-3 justify-start">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLb9719HNXM0BlxormT3NtZP6sL6T3f4TBbbsLE1PkATvbhleL6x5FUCVhEbyBgTdhQUVcuIB3VvGv2RoK0yEOxlG0eb2WziIpaa_RUk2CIV7_RNTF7Ft_5SYkTGQ6pQKTzonaKkPz1hWrM4Ed58ic8sKo531fo_hF1MBWezBJBiNdxoyKknU5gnEWFyXsuw0e2B-D8x1MmInsrpMKW9voTDFFbpxgf_73WfuwawBZ-KJPt9TIsErieYFZP5a2vjfKrDfZEbYdYgw")`,
                }}
              ></div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <p className="text-text-muted-light dark:text-text-muted-dark text-[13px] font-normal leading-normal max-w-[480px]">PizzaBot</p>
                <p className="text-base font-normal leading-normal flex max-w-[480px] rounded-xl rounded-bl-none bg-accent px-4 py-3 text-white">Awesome! How many folks are you expecting?</p>
                <p className="text-base font-normal leading-normal flex max-w-[480px] rounded-xl rounded-bl-none bg-accent px-4 py-3 text-white mt-2">
                  I've got a few popular choices based on party size. Take a look!
                </p>
                {/* Interactive Package Cards */}
                <div className="mt-2 flex gap-4">
                  {cateringPackages.map((pkg, index) => (
                    <div key={index} className="w-64 rounded-lg border border-black/10 bg-background-light p-4 dark:border-white/10 dark:bg-background-dark">
                      <div
                        className="mb-3 h-32 w-full rounded bg-cover bg-center"
                        style={{ backgroundImage: `url('${pkg.image}')` }}
                      ></div>
                      <h3 className="text-base font-bold text-text-light dark:text-text-dark">{pkg.name}</h3>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{pkg.description}</p>
                      <p className="my-2 text-lg font-bold text-accent">{pkg.price}</p>
                      <button className="mt-2 w-full rounded-full bg-primary py-2 text-sm font-semibold text-white hover:bg-primary/90">Select</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Chat Input */}
        <footer className="mt-auto border-t border-black/10 p-6 dark:border-white/10">
          <div className="relative">
            <input
              className="w-full rounded-full border-gray-300 bg-white/80 py-3 pl-4 pr-14 text-text-light shadow-sm focus:border-primary focus:ring-primary dark:border-white/20 dark:bg-background-dark/80 dark:text-text-dark dark:placeholder:text-text-muted-dark"
              placeholder="Type your message..."
              type="text"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center rounded-full px-4 text-primary hover:text-primary/80">
              <span className="material-symbols-outlined !text-2xl">send</span>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CateringAssistant;
