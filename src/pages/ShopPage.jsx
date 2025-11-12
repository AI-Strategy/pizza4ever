import React from 'react';

const ShopPage = () => {
  const freshDrops = [
    {
      name: "'Mountain Bear' Graphic T-Shirt",
      price: '$32.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_BBf3Tl1TLWwL1hPPxZJaQ-yDhLN5WLWxQ5VK4y8vOt23FXinuJP9xw6WzPwj_vkt722PiJbhY--5iEkBMvJHdJnuWgrV5gh74VNNYOLo0h2H-6beTmb7K2YVImeTJUxunlbO51BjT4gr0d_wAlBNoYqS-sRe2yePAPqT_LbfN14Hp0ulqKmZsFXGYrcfQ8poXyg9e44IUTj_Qtx6rmfFntMadm5kV7TADtEbBJV3MfZlYKs6jz1a7j638ux54LYyjM8XOHveSo0',
    },
    {
      name: 'Fur Buddy Bites - Large Bag',
      price: '$22.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdpyZ3Pn_xM7uWoFpyIibLEC8jjAD50dsg0epmyHkNZII-ugPX0D5aMcreIlamlXJbNMQEY_JS56bagQa6lGxl-nk7WYyQ-CH_-Z7Zq06DgdtVrA1Ej56vJAg20eyfBigadVzKqCySNTsa1H9RIrYec0x8fhTOVU-wtUqKjOIaK_tciHQqb_eW2IaF8IMhvRmsUsF3dvkHHa2GfioU7Kucf7OFgZQHD6IdMy4i6WCt_TElNYGeX54SallNl33H6bVy1dUt3uov7Qc',
    },
  ];

  const apparel = [
    {
      name: "The 'Tahoe Trucker' Hat",
      price: '$28.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnRnvv6cI8IoBocb9Ohy3FTQKDCCW2NklxgatrTr6xMGZBJBYSD3yhmcwrbX061IHWVx0DRhHQs7qjNVU8hbxYYFCELTaWhOCezDjGNg_Q3lurUwjxDENob6C8qNlIkeccN8LnHAPyV4KISzc3r8OkQ_Yuz7NHi4B6QmJNGx_mxvts-lKKQS0pj0fA5mUjtnlPqn8wYHSmpBqtaTVc-5QqhEpe4RfgaTyNSyRjJltAU3Kf2_gRClfLsjukk9kVynidJpLd5Ylfvzw',
    },
    {
      name: "'Mountain Bear' Graphic T-Shirt",
      price: '$32.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_BBf3Tl1TLWwL1hPPxZJaQ-yDhLN5WLWxQ5VK4y8vOt23FXinuJP9xw6WzPwj_vkt722PiJbhY--5iEkBMvJHdJnuWgrV5gh74VNNYOLo0h2H-6beTmb7K2YVImeTJUxunlbO51BjT4gr0d_wAlBNoYqS-sRe2yePAPqT_LbfN14Hp0ulqKmZsFXGYrcfQ8poXyg9e44IUTj_Qtx6rmfFntMadm5kV7TADtEbBJV3MfZlYKs6jz1a7j638ux54LYyjM8XOHveSo0',
    },
    {
      name: 'Branded Beanie',
      price: '$25.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-4b63nKRyu8iSJLYUwDXmyM61u7zxmAYJa25rqFmvE2PF1tTQtwi6A8ijr4Bt13Ubg1kal-lQbhkcJdi8crQaY7aA4rHFhJO16C0A_JGIGgRu6BJ-fJSpFXkpBWlP1Y7Tr7HzVS3GDF0Zbmb_fFFDZ48OOYLLyS_ZA59nASK-m39xuaTdUukuk8mgI7CsCPN2Z5MZ66cs0rbbCpB1KjCSdpw5aYYMk0ez9XbLdp4zI259fYOlPjIPrjr8gM5ZNZSnYE_Iq-ARiRU',
    },
  ];

  return (
    <main className="flex flex-col gap-8 mt-5">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2BtCVtxaO-MTygyKsIET61idiL2NhYMIzQXbsnn56sjq7U5NO_spPy7NrSsl0eyqhe4cEQ-TVW5dvKNzmdBLtGVERiYK_N4Gn21oIHcSDYkMise45Dlzx0QvcjmCcySBi2x7-YmxM0E_5LCJGEQom8YATEre6P5Z191etOUqscAeU_18ePqW2VxvQeKD3kPtaqvvjksQRjP3_n6SwTc0fCS0t5Ofid0mrQPiWHTXeFdd8nzCHR_dBCTdjIcsZTVlvKZ6Y-llN3Jc")`,
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Wear the Vibe. Taste the Adventure.
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Gear and goods inspired by Lake Tahoe life.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Shop Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 px-4 overflow-x-auto">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
          <p className="text-primary text-sm font-medium leading-normal">All Products</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#392e28] px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">Apparel & Headwear</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#392e28] px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">Pantry Goods</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#392e28] px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">Fur Buddy Bites</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#392e28] px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">Bear Necessities</p>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-4">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>star</span>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Fresh Drops!</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 px-4">
            {freshDrops.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: `url("${item.image}")` }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">{item.name}</p>
                  <p className="text-[#baa69c] text-sm font-normal leading-normal">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">Apparel & Headwear</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 px-4">
            {apparel.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: `url("${item.image}")` }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">{item.name}</p>
                  <p className="text-[#baa69c] text-sm font-normal leading-normal">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ShopPage;
