import React from 'react';

const categories = ["All Products", "Apparel & Headwear", "Pantry Goods", "Fur Buddy Bites", "Bear Necessities"];

const products = {
  "Fresh Drops!": [
    { name: "'Mountain Bear' Graphic T-Shirt", price: "$32.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_BBf3Tl1TLWwL1hPPxZJaQ-yDhLN5WLWxQ5VK4y8vOt23FXinuJP9xw6WzPwj_vkt722PiJbhY--5iEkBMvJHdJnuWgrV5gh74VNNYOLo0h2H-6beTmb7K2YVImeTJUxunlbO51BjT4gr0d_wAlBNoYqS-sRe2yePAPqT_LbfN14Hp0ulqKmZsFXGYrcfQ8poXyg9e44IUTj_Qtx6rmfFntMadm5kV7TADtEbBJV3MfZlYKs6jz1a7j638ux54LYyjM8XOHveSo0" },
    { name: "Fur Buddy Bites - Large Bag", price: "$22.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdpyZ3Pn_xM7uWoFpyIibLEC8jjAD50dsg0epmyHkNZII-ugPX0D5aMcreIlamlXJbNMQEY_JS56bagQa6lGxl-nk7WYyQ-CH_-Z7Zq06DgdtVrA1Ej56vJAg20eyfBigadVzKqCySNTsa1H9RIrYec0x8fhTOVU-wtUqKjOIaK_tciHQqb_eW2IaF8IMhvRmsUsF3dvkHHa2GfioU7Kucf7OFgZQHD6IdMy4i6WCt_TElNYGeX54SallNl33H6bVy1dUt3uov7Qc" },
  ],
  "Apparel & Headwear": [
    { name: "The 'Tahoe Trucker' Hat", price: "$28.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnRnvv6cI8IoBocb9Ohy3FTQKDCCW2NklxgatrTr6xMGZBJBYSD3yhmcwrbX061IHWVx0DRhHQs7qjNVU8hbxYYFCELTaWhOCezDjGNg_Q3lurUwjxDENob6C8qNlIkeccN8LnHAPyV4KISzc3r8OkQ_Yuz7NHi4B6QmJNGx_mxvts-lKKQS0pj0fA5mUjtnlPqn8wYHSmpBqtaTVc-5QqhEpe4RfgaTyNSyRjJltAU3Kf2_gRClfLsjukk9kVynidJpLd5Ylfvzw" },
    { name: "'Mountain Bear' Graphic T-Shirt", price: "$32.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_BBf3Tl1TLWwL1hPPxZJaQ-yDhLN5WLWxQ5VK4y8vOt23FXinuJP9xw6WzPwj_vkt722PiJbhY--5iEkBMvJHdJnuWgrV5gh74VNNYOLo0h2H-6beTmb7K2YVImeTJUxunlbO51BjT4gr0d_wAlBNoYqS-sRe2yePAPqT_LbfN14Hp0ulqKmZsFXGYrcfQ8poXyg9e44IUTj_Qtx6rmfFntMadm5kV7TADtEbBJV3MfZlYKs6jz1a7j638ux54LYyjM8XOHveSo0" },
  ],
  "Limited Time Offer!": [
      { name: "Signature Olive Oil", price: "$15.00", sale: true, oldPrice: "$18.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANjQOdq70CQgJqhxmvk2-PxfUugeVKTpZ1dnChX7m3n0zYSmKMQTCFMO6IS40XXP7E7wWM2h8as9UjEbbPVY5IV1FB2dZXB_Ms6FKjGkKcbNeo42B98OHKRqILuo2f2178dGcRhENJqJy_8V1DPZBlXsOart-_h36E4Hw0reCMxni-JcpVccUKsqgWMM6VAlYRAnVwg5fanoUFxuPN0ClBpwPcR7on-AxFgG4IwXpZ0vyWyQmvqj36WdLoFpcuZrTc0l9VE9ZYifM" }
  ]
};

const ShopPage = () => {
  return (
    <>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2BtCVtxaO-MTygyKsIET61idiL2NhYMIzQXbsnn56sjq7U5NO_spPy7NrSsl0eyqhe4cEQ-TVW5dvKNzmdBLtGVERiYK_N4Gn21oIHcSDYkMise45Dlzx0QvcjmCcySBi2x7-YmxM0E_5LCJGEQom8YATEre6P5Z191etOUqscAeU_18ePqW2VxvQeKD3kPtaqvvjksQRjP3_n6SwTc0fCS0t5Ofid0mrQPiWHTXeFdd8nzCHR_dBCTdjIcsZTVlvKZ6Y-llN3Jc")` }}>
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Wear the Vibe. Taste the Adventure.</h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">Gear and goods inspired by Lake Tahoe life.</h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-[0.015em] @[480px]:text-base">
              <span className="truncate">Shop Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 px-4">
        {categories.map((cat, index) => (
          <button key={cat} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 ${index === 0 ? 'bg-primary text-white' : 'border border-black/10 bg-surface hover:bg-black/5'}`}>
            <p className={`text-sm font-medium leading-normal ${index === 0 ? '' : 'text-on-surface/80'}`}>{cat}</p>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-16">
        {Object.entries(products).map(([category, items]) => (
          <section key={category} className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4 px-4">
              <h2 className="text-on-surface text-[22px] font-bold leading-tight tracking-[-0.015em]">{category}</h2>
              <a className="text-primary text-sm font-bold leading-normal hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-x-4 gap-y-8 px-4 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              {items.map(item => (
                <div key={item.name} className="flex flex-col gap-3">
                  <div className="relative w-full">
                    {item.sale && <div className="absolute top-2 left-2 flex h-6 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/90 px-2.5"><p className="text-white text-xs font-bold leading-normal tracking-wide">SALE</p></div>}
                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" style={{ backgroundImage: `url("${item.image}")` }}></div>
                  </div>
                  <div>
                    <p className="text-on-surface text-base font-medium leading-normal">{item.name}</p>
                    <div className="flex items-baseline gap-2">
                        <p className={`text-sm font-normal leading-normal ${item.sale ? 'text-primary font-bold' : 'text-subtle'}`}>{item.price}</p>
                        {item.oldPrice && <p className="text-subtle/70 text-sm font-normal leading-normal line-through">{item.oldPrice}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default ShopPage;
