import React, { useState } from 'react';

const ReservationWidget = () => {
  const [location, setLocation] = useState('');
  const [partySize, setPartySize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const availableTimes = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'];

  const handleTimeSelect = (selectedTime) => {
    setTime(selectedTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    alert('Reservation submitted!');
  };

  return (
    <div className="w-full flex justify-center -mt-40 md:-mt-20 px-4 md:px-6">
      <div className="w-full max-w-5xl bg-card-light dark:bg-card-dark rounded-xl shadow-2xl p-6 md:p-10 space-y-8 border border-border-light dark:border-border-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          <label className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
            <p className="text-base font-bold pb-2">Location</p>
            <select value={location} onChange={e => setLocation(e.target.value)} className="form-select w-full rounded text-base h-14">
              <option>Select a location</option>
              <option>Truckee</option>
              <option>Tahoe City</option>
              <option>Incline Village</option>
            </select>
          </label>
          <label className="flex flex-col">
            <p className="text-base font-bold pb-2">Party Size</p>
            <input value={partySize} onChange={e => setPartySize(e.target.value)} className="form-input w-full rounded text-base h-14" placeholder="2 people" type="text"/>
          </label>
          <label className="flex flex-col">
            <p className="text-base font-bold pb-2">Date</p>
            <input value={date} onChange={e => setDate(e.target.value)} className="form-input w-full rounded text-base h-14" type="date"/>
          </label>
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-primary text-white text-base font-bold">
            <span className="truncate">Find a Table</span>
          </button>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Available Times</h3>
          <div className="flex gap-3 flex-wrap">
            {availableTimes.map(t => (
              <button key={t} onClick={() => handleTimeSelect(t)} className={`flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-full border-2 px-5 text-base font-bold transition-colors ${time === t ? 'bg-primary text-white border-primary' : 'border-primary/20 text-primary hover:bg-primary hover:text-white'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        {time && (
          <div className="border-t border-border-light dark:border-border-dark pt-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Your Information</h3>
              <p>Please provide your contact details to secure your spot for <strong>{partySize} people</strong> at <strong>{location}</strong> on <strong>{date}</strong> at <strong>{time}</strong>.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                  <p className="text-base font-bold pb-2">Full Name</p>
                  <input value={fullName} onChange={e => setFullName(e.target.value)} className="form-input w-full rounded text-base h-14" placeholder="John Doe" type="text"/>
              </label>
              <label className="flex flex-col">
                  <p className="text-base font-bold pb-2">Email Address</p>
                  <input value={email} onChange={e => setEmail(e.target.value)} className="form-input w-full rounded text-base h-14" placeholder="john.doe@email.com" type="email"/>
              </label>
              <label className="flex flex-col md:col-span-2">
                  <p className="text-base font-bold pb-2">Phone Number</p>
                  <input value={phone} onChange={e => setPhone(e.target.value)} className="form-input w-full rounded text-base h-14" placeholder="(555) 123-4567" type="tel"/>
              </label>
              <button type="submit" className="flex w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-base font-bold">
                <span className="truncate">Confirm Reservation</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
);

const ReservationsPage = () => {
    return (
        <main className="flex-grow">
            <div className="relative min-h-[480px] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6rCFAZ3HO1GV3xn5VMO5EZdpy87fT6hu5iawHdKJ9LK_WJFlmhivtZE4L5DsD_E1kJ1w5OCdvKRaE5XhZT_rccu2a1nqrst_ISRKHwe6-C83LDM-lHbVilkHM3ydrppTabQ0A-LIur0BhToTdeO037NUXeIF-0uQo5qcB0PPxFtae_vWjnM9bcKes4C5WO3ybKx_C9RZ9LZMTQ-HUgXmZMKqzsznQZyLYaEzDKgdHrl19HTFmUhkF0MI5rry0ZR_dVRZflbxVJsI")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                <div className="relative flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-white text-5xl md:text-6xl font-black tracking-[-0.033em]">Reserve Your Table</h1>
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed">Join us for great pizza and good times in Truckee, Tahoe City, or Incline Village.</p>
                </div>
            </div>
            <ReservationWidget />
            {/* Locations Section */}
        </main>
    );
};

export default ReservationsPage;
