import React from 'react';

const CareersPage = () => {
  const perks = [
    { title: 'Beary Hard Work', description: "We're passionate about making the best pizza and providing excellent service.", icon: 'local_pizza' },
    { title: 'Lots of Fun', description: 'Join a team that feels like family, with regular events and a positive atmosphere.', icon: 'celebration' },
    { title: 'Flexibility', description: 'We offer flexible scheduling so you can enjoy the Tahoe lifestyle to the fullest.', icon: 'event_available' },
    { title: 'Community', description: "We're proud to be a part of the Lake Tahoe community and give back whenever we can.", icon: 'groups' },
  ];

  const openPositions = [
    { title: 'Pizza Chef', location: 'South Lake', type: 'Full-time' },
    { title: 'Front of House Crew', location: 'North Lake', type: 'Part-time' },
    { title: 'Delivery Driver', location: 'South Lake', type: 'Part-time' },
  ];

  const testimonials = [
    {
      quote: "The best part about working here is the team. We work hard, but we also have a blast. Plus, the flexible schedule lets me ski in the mornings!",
      author: 'Sarah, Pizza Chef',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv2eXAtoDFI7vc4eghXaXF0RBt-YSeRAGGcUtsXMEqi70BxLOlaUEe-jKvsDWQcvIHP9yHjrT-41Cl9OAlOi0WW0kLKLZTmdovyCGVOG6o43dydOjnx2feCm-hRIJTtx5kDBB41OHR4DF_XupfG6zu7QWUK2oVtB-QVCekKdmLPXm0qzr3ooppSHNkYAxaxh6kaeUIk5QEkWPRCCqHA7ruNyekY-24jwLQFOEi4T7gCgzrjXJRV9ySZ2SJ6K6ULW2U-8i66aZo-Ws',
    },
    {
      quote: "I started as a driver and now I'm a shift manager. Pizza 4 Ever really invests in its people. It's more than a job; it's a career path.",
      author: 'Mike, Shift Manager',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD5EtV18aUwaQrcQDBZlpOzMtI1MstVc0zvz7WfSfZ0PlOrNw9vkkzMwPi3V5SpaOXIy6c1R7U5MQ0uBTOKtVIwKyEYf8ineoVT5dtFGc-0i8DUBgNe2fcge52auXTR31KXkpKrR_cEk0ERFqRwW5y1rzJ3E6ye5Pne983l0mJSTS0Ynmqt7JM0nwKBfZcpl9TD1jvG6oY1KTTbu0z0yICdx8ylXEuIXUpgS40ORBAn8O5WgoWfXL7R6WYpkLwkWK27KbbJbiGAo4',
    },
  ];

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div
        className="my-5 @container @[480px]:p-4 flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBijdjgi_874BU7FcANlpAOLI28-YlSw8bZU4Uz_TnzC8jKHhgXb9AIZlFs64Haaku9mzfP8Dxcn0rrWMORIgqPWJ3HiPDN3XuEOikODykPey20dq-7vMgMXLbGaj3yr0jVNe18XnUBwMOtXPCmgkmnPBiTqBJfYB41prdR6Mgt4RngkUrdCJoZvJ3gCFZHfVAsIDik-kNs3sjWLGR2leyZ0FJUW1z8VuqugxIR0P3sPjsNE0fmxuwG_pUmdTIhuVvhK9-u5kHZOas")`,
        }}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Join the Crew. Your Adventure Awaits.</h1>
          <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl mx-auto">
            We believe in 'Beary hard work, but lots of fun'. Join our team and set your own schedule in the heart of Lake Tahoe.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
          <span className="truncate">View Openings</span>
        </button>
      </div>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#181311] dark:text-[#f8f6f5] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">A Slice of the Good Life</h2>
          <p className="text-[#8a6e60] dark:text-[#B0A199] text-base font-normal leading-normal max-w-[720px]">
            We're a Lake Tahoe-born pizza concept that fuses culinary skill with mountain-town character and cutting-edge tech. We value our team and the vibrant community we serve.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          {perks.map((perk, index) => (
            <div key={index} className="flex flex-1 gap-3 rounded-lg border border-[#e6dfdb] dark:border-[#3A2C24] bg-white dark:bg-[#2F1E16] p-4 flex-col">
              <span className="material-symbols-outlined text-primary text-3xl">{perk.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#181311] dark:text-[#f8f6f5] text-base font-bold leading-tight">{perk.title}</h3>
                <p className="text-[#8a6e60] dark:text-[#B0A199] text-sm font-normal leading-normal">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-[#181311] dark:text-[#f8f6f5] tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px] mx-auto">Even More Awesome Perks</h2>
          <p className="text-[#8a6e60] dark:text-[#B0A199] text-base font-normal leading-normal max-w-[720px] mx-auto">Life in Tahoe is epic. We help you make the most of it with benefits that matter.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="flex flex-col gap-6 rounded-xl border border-[#e6dfdb] dark:border-[#3A2C24] bg-white dark:bg-[#2F1E16] p-6 text-center items-center">
            <span className="material-symbols-outlined text-primary text-5xl">cottage</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#181311] dark:text-[#f8f6f5]">Local Housing Assistance</h3>
              <p className="text-[#8a6e60] dark:text-[#B0A199]">Score heavily discounted, locals-only rentals with a cool vibe. We'll help you find your perfect Tahoe pad so you can live where you work and play.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-xl border border-[#e6dfdb] dark:border-[#3A2C24] bg-white dark:bg-[#2F1E16] p-6 text-center items-center">
            <span className="material-symbols-outlined text-primary text-5xl">downhill_skiing</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#181311] dark:text-[#f8f6f5]">Unlimited Ski Passes</h3>
              <p className="text-[#8a6e60] dark:text-[#B0A199]">Get ready to shred. We provide unlimited ski passes for you and a buddy or significant other. Fresh powder days are calling!</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 rounded-xl border border-[#e6dfdb] dark:border-[#3A2C24] bg-white dark:bg-[#2F1E16] p-6">
          <span className="material-symbols-outlined text-primary text-4xl">health_and_safety</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#181311] dark:text-[#f8f6f5]">Medical Coverage From Day One</h3>
            <p className="text-[#8a6e60] dark:text-[#B0A199] text-sm">Your well-being is our priority. That's why we offer comprehensive medical coverage from your very first day on the job.</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-10">
        <h2 className="text-[#181311] dark:text-[#f8f6f5] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Open Positions</h2>
        <div className="flex flex-col gap-4">
          {openPositions.map((position, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border border-[#e6dfdb] dark:border-[#3A2C24] bg-white dark:bg-[#2F1E16] p-4">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#181311] dark:text-[#f8f6f5]">{position.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[#8a6e60] dark:text-[#B0A199]">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">location_on</span> {position.location}</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">schedule</span> {position.type}</span>
                </div>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Apply Now</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-10">
        <h2 className="text-[#181311] dark:text-[#f8f6f5] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 p-6 bg-white dark:bg-[#2F1E16] rounded-lg border border-[#e6dfdb] dark:border-[#3A2C24]">
              <img className="w-20 h-20 rounded-full object-cover" alt={`Photo of ${testimonial.author}`} src={testimonial.image} />
              <blockquote className="text-[#181311] dark:text-[#f8f6f5]">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <cite className="text-[#8a6e60] dark:text-[#B0A199] not-italic font-medium">- {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-10 my-5 text-center bg-primary/10 dark:bg-primary/20 rounded-lg">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold text-[#181311] dark:text-[#f8f6f5]">Ready to Join Us?</h2>
          <p className="max-w-xl text-[#8a6e60] dark:text-[#B0A199]">
            If you're passionate about great food and even better company, we want to hear from you. Start your application today and become part of the Pizza 4 Ever family.
          </p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Apply to Our General App</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
