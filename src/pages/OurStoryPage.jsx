import React from 'react';

const OurStoryPage = () => {
  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB94BsiPd9FIHPpuwe2P5-7a5h439OXWzCeaXoAfYCJg-CaMu-4yF2MSkqfVVjob8iz8iHrv4EqBTGUvbuZlKuM_1WAkA8ZrjuV-IGQHZq192y5BWNlbJIcV1b2FKoJG6QM8tJJVkOfJwbPBTA1H6wj4OOf9e-pfJHJ38BXnkBrQFkTR8qyIQK46Wlpq0DDgP2wzJZtMy4SerIOksvtRbxEZXCKwXcMccVj6N9ExcxvHg4yuy8-RVoTF5S8x1_LQ6thiUhed9LGofk',
      alt: 'A freshly baked pepperoni pizza on a wooden board.',
      className: 'col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg',
      aspect: 'aspect-[4/3]',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEzsFPM8dTM-mqOaZTp8Lyklloc4il_QKqJOSRROAbGhOogq06wQcsXxywJVUeZisMgOKK95IbWYdCvzitxPzmuClzOtvjwat3SvBHmqMeQzg7Bv2sYfaaeT-YRT7NcYefG6gmC7CgsZ11ipUkwQ_e1lg9MLazGvIgFvJBZkVuMsRjt3dWJEeLONEqCuguq8BndPhbjf-78M-V6zi2dYfa4DK_eNjNiqxngaMKBXHwlHG9d0A1hlqdyptB4YKo3LQ2Kl_pyd363Lw',
      alt: 'Fresh basil, tomatoes, and mozzarella on a rustic table.',
      className: 'rounded-xl overflow-hidden shadow-lg',
      aspect: 'aspect-square',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB1UnfZv8uGfqNj-phCxU30UqvYt5Nkhe8wKcOmDJveEfkF9C-s12sMJNxjsL3Z4cqjCFe5vA4mCzwxNy_O1V881IzZ6vARB1BZvdOJGf8VJsdYdB9sBRQFQLyFtrGzW6IYCcCfxmnNLeTlDfFdRLMSTEJuDvAwpMl_W2YouIqhFgQGyoeicaFnrWPmCpqc_mcYIG-y-wuTnNTH2XzI3_2GjupqHpM_H4sQIKKdl3B4qpd5QHuZolbMpOa30LonuST05ZhNuO7xZ4',
      alt: 'A chef kneading pizza dough.',
      className: 'rounded-xl overflow-hidden shadow-lg',
      aspect: 'aspect-square',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaek4ux7Ah8LlQJTnuw5lVeYCsI9kPYHQv8zA3RtzBRBICLcGWffbCMtq_HCNb_mbZ7gx9B-v9qLUJzqpBZVJJir2pwH2uPCI_h1TYEV1L_7uMCs7OezyRt57QB8-_f-YC54SYnFcv0g9CbYfY1lH0g_L8wAOayzAocOoZ7O8N8e4TnP6x1WVNP-qa4Fu33AEfVJROyA4ADkEPHpp8vgkq056vVmVrXLRoiKS8zvkwyHVCB24sCK0384DuLHacZyaeiwbV06Zi0o0',
      alt: 'Friends laughing and sharing pizza in a cozy restaurant setting.',
      className: 'col-span-2 rounded-xl overflow-hidden shadow-lg',
      aspect: 'aspect-video',
    },
  ];

  const timelineEvents = [
    { year: '2018', title: 'The Spark', description: "A vision born from a love for Tahoe's peaks and a passion for perfect pizza." },
    { year: '2019', title: 'First Slice Served', description: 'Our doors open, bringing wood-fired flavor to the heart of the mountains.' },
    { year: '2022', title: 'Innovating the Experience', description: 'Launching our app and tech-enhanced kitchens to serve you better and faster.' },
  ];

  return (
    <main className="flex-grow font-body">
      {/* HeroSection */}
      <section
        className="w-full flex min-h-[60vh] md:min-h-[80vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPV3wz62Zyv37P4yqCHuuwbUurIsKCXGMfg3FTbURaFJreWMchRoBb8pUH3ZKAIY5fzBXl9qYk6iOz1U3E7hUmxAnHF90YMUKSp_c7s2DiC3kASxxuzEe5RmH8_mL6uzWSDN3qS8ljbxUpCEhnw_bKCa17HXq3IQL-Ee0wT1CYV0MHL7RZaW8EbpcxLSXzrUKhQg7SjuwBm-SZjFHx5WXlrrQehRlujTDhpkmcqhW2bIuhRu8EyPCRcT9AKQIgJHNrJjkHjkAk-j0")`,
        }}
      >
        <div className="flex flex-col gap-4 text-center max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter font-display">Forged by Fire & Forest. The Story of Pizza 4 Ever.</h1>
          <h2 className="text-white text-base md:text-lg font-normal leading-normal">Fusing culinary skill with mountain-town character and cutting-edge tech.</h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
          <span className="truncate">Discover Our Menu</span>
        </button>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-green dark:text-primary font-display mb-4">Born in the Heart of the Sierras</h2>
          <p className="text-text-light dark:text-text-dark/90 text-lg md:text-xl font-normal leading-relaxed">
            Our journey began with a simple passion: to create unforgettable pizza inspired by the rugged beauty and adventurous spirit of Lake Tahoe. We're dedicated to a mission that combines artisanal techniques, locally sourced ingredients, and a touch of modern innovation to bring you a truly unique culinary experience.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24 bg-black/5 dark:bg-white/5 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {galleryImages.map((image, index) => (
              <div key={index} className={image.className}>
                <img className={`w-full h-full object-cover ${image.aspect}`} alt={image.alt} src={image.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Timeline Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-accent-green dark:text-primary font-display mb-4">Our Philosophy</h2>
            <p className="text-text-light dark:text-text-dark/90 text-lg leading-relaxed mb-6">
              It's simple: culinary skill meets mountain character. We believe in the power of fresh, locally sourced ingredients and time-honored artisanal techniques. But we also embrace the edge of technology to perfect our craft and enhance your experience, from our state-of-the-art ovens to our seamless online ordering.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">local_florist</span>
                <p className="text-text-light dark:text-text-dark"><strong>Local Ingredients:</strong> Sourced from the best regional farms and producers.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">local_fire_department</span>
                <p className="text-text-light dark:text-text-dark"><strong>Artisanal Techniques:</strong> Hand-stretched dough, slow-fermented for flavor.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">developer_mode</span>
                <p className="text-text-light dark:text-text-dark"><strong>Tech-Forward:</strong> Perfecting every pie with precision and consistency.</p>
              </div>
            </div>
          </div>
          {/* Timeline */}
          <div className="border-l-2 border-primary/30 pl-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative ${index < timelineEvents.length - 1 ? 'mb-8' : ''}`}>
                <div className="absolute -left-[34px] top-1.5 size-4 bg-primary rounded-full border-4 border-background-light dark:border-background-dark"></div>
                <p className="text-accent-green dark:text-primary text-sm font-bold">{event.year}</p>
                <p className="text-lg font-bold">{event.title}</p>
                <p className="text-text-light/80 dark:text-text-dark/80">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-16 md:py-24 bg-accent-green dark:bg-black/20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-2xl md:text-3xl font-display italic text-white/90 leading-relaxed">
            "Every pizza we make is a tribute to the mountains that inspire us. It's more than food; it's a piece of our story, shared with you."
          </p>
          <p className="text-white mt-4 font-bold">- Jane Doe, Founder</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-green dark:text-primary font-display mb-4">Experience the Taste of the Mountains</h2>
          <p className="text-text-light dark:text-text-dark/90 text-lg leading-relaxed mb-8">
            Ready to taste the difference? Every slice tells a story. Order online for pickup or delivery and start your own Pizza 4 Ever adventure.
          </p>
          <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
            <span className="truncate">Order Now</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default OurStoryPage;
