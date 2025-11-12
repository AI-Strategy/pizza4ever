import React from 'react';

const ReservationsPage = () => {
  const locations = [
    {
      name: 'Truckee',
      address: '1001 Donner Pass Rd<br/>Truckee, CA 96161',
      phone: '(530) 587-1234',
    },
    {
      name: 'Tahoe City',
      address: '395 N Lake Blvd<br/>Tahoe City, CA 96145',
      phone: '(530) 583-5678',
    },
    {
      name: 'Incline Village',
      address: '937 Tahoe Blvd<br/>Incline Village, NV 89451',
      phone: '(775) 831-9012',
    },
  ];

  const availableTimes = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'];

  return (
    <main className="flex-grow">
      {/* HeroSection */}
      <div
        className="relative min-h-[480px] flex flex-col items-center justify-center text-center p-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(15, 10, 8, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6rCFAZ3HO1GV3xn5VMO5EZdpy87fT6hu5iawHdKJ9LK_WJFlmhivtZE4L5DsD_E1kJ1w5OCdvKRaE5XhZT_rccu2a1nqrst_ISRKHwe6-C83LDM-lHbVilkHM3ydrppTabQ0A-LIur0BhToTdeO037NUXeIF-0uQo5qcB0PPxFtae_vWjnM9bcKes4C5WO3ybKx_C9RZ9LZMTQ-HUgXmZMKqzsznQZyLYaEzDKgdHrl19HTFmUhkF0MI5rry0ZR_dVRZflbxVJsI")`,
        }}
      >
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-black tracking-[-0.033em]">Reserve Your Table</h1>
          <p className="text-white/90 text-base md:text-lg leading-normal">Join us for great pizza and good times in Truckee, Tahoe City, or Incline Village.</p>
        </div>
      </div>

      {/* Reservation Widget */}
      <div className="w-full flex justify-center -mt-40 md:-mt-20 px-4">
        <div className="w-full max-w-4xl bg-background-light dark:bg-[#271f1b] rounded-lg shadow-2xl p-6 md:p-10 space-y-8 border border-black/10 dark:border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            <label className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
              <p className="text-base font-medium pb-2">Location</p>
              <select className="form-select w-full rounded-lg text-sm md:text-base border-gray-300 dark:border-[#54433b] bg-background-light dark:bg-[#181311] focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#baa69c]">
                <option>Select a location</option>
                {locations.map((location) => (
                  <option key={location.name}>{location.name}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Party Size</p>
              <input
                className="form-input w-full rounded-lg text-sm md:text-base border-gray-300 dark:border-[#54433b] bg-background-light dark:bg-[#181311] focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#baa69c]"
                placeholder="2 people"
                type="text"
              />
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Date</p>
              <input
                className="form-input w-full rounded-lg text-sm md:text-base border-gray-300 dark:border-[#54433b] bg-background-light dark:bg-[#181311] focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#baa69c]"
                type="date"
                defaultValue="2023-10-27"
              />
            </label>
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
              <span className="truncate">Find a Table</span>
            </button>
          </div>
          {/* Availability Display */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Available Times</h3>
            <div className="flex gap-3 flex-wrap">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors ${
                    time === '6:00 PM'
                      ? 'bg-primary text-white'
                      : 'bg-primary/20 dark:bg-[#392e28]'
                  }`}
                >
                  <p className="text-sm font-medium">{time}</p>
                </button>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          <div className="border-t border-black/10 dark:border-white/10 pt-8 space-y-6">
            <h3 className="text-lg font-bold">Your Information</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 -mt-4">
              Please provide your contact details to secure your spot for <strong>2 people</strong> at <strong>Truckee</strong> on <strong>October 27th</strong> at <strong>6:00 PM</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <p className="text-base font-medium pb-2">Full Name</p>
                <input
                  className="form-input w-full rounded-lg text-sm md:text-base border-gray-300 dark:border-[#54433b] bg-background-light dark:bg-[#181311] focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#baa69c]"
                  placeholder="John Doe"
                  type="text"
                />
              </label>
              <label className="flex flex-col">
                <p className="text-base font-medium pb-2">Email Address</p>
                <input
                  className="form-input w-full rounded-lg text-sm md:text-base border-gray-300 dark:border-[#54433b] bg-background-light dark:bg-[#181311] focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#baa69c]"
                  placeholder="john.doe@email.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col md:col-span-2">
                <p className="text-base font-medium pb-2">Phone Number</p>
                <input
                  className="form-input w-full rounded-lg text-sm md:text-base border-gray-300 dark:border-[#54433b] bg-background-light dark:bg-[#181311] focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#baa69c]"
                  placeholder="(555) 123-4567"
                  type="tel"
                />
              </label>
            </div>
            <button className="flex w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
              <span className="truncate">Confirm Reservation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Locations</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find the Pizza 4 Ever nearest to you. Each location offers the same great taste with a unique mountain-town vibe.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.name} className="bg-background-light dark:bg-[#271f1b] rounded-lg border border-black/10 dark:border-white/10 p-6 text-center space-y-4">
              <h3 className="text-xl font-bold">{location.name}</h3>
              <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: location.address }}></p>
              <p className="font-medium">{location.phone}</p>
              <a className="inline-flex items-center gap-2 text-primary font-bold text-sm" href="#">
                Get Directions <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ReservationsPage;
