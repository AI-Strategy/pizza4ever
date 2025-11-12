import React from 'react';

const WineCurationPage = () => {
  const wines = [
    {
      name: 'Pinot Noir',
      region: 'Sonoma Coast, California',
      pairing: 'Pairs with Spicy Fennel Sausage Pizza',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtLR6BYdbkYvWsgx784SsRGm_zhuPbEkDMtiExB5GG47Q4bm0sX1s7aVoxw1iMwFmF-dLVYqaWDbTGwqcQzjvdrngHxvq5QMxLSgEz_riFLOJUUhWTk2OuNNyFvlUnghSyv9y7BV7npG8WKSHoqIFruSgE6ZUXsJLDuJZnmPF_dVjbWqMOwMSOf-bNcb7gWGebkdB-zJ7ezx5-cldHS5O47JOXrylZ9WWao7LhbR5t73egRDwICrBmRqlOXCC1Uq4AwMpmwEncnQU',
    },
    {
      name: 'Chardonnay',
      region: 'Napa Valley, California',
      pairing: 'Pairs with Wood-Fired Salmon',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuQNBKMlVOzFv-46P4ylCPCuuuh21S-c8XNTqrY9970COoMmgRbFk7mGo__O7YNRotdN9qpPzBtCOoOSxLXSUWl09MqVQNn5A84-eHRAlCFVDH_oqJdD530eFCdbMTVV9kETFWDPFQTq-tK5C46dowj8Xz89r8wNX9KvLAhIAOnNJdTmAnEdKrrmCIBZOYP9lRp5_ebVBmu6k4yn07aw7iwsa-X5R0CzQJATyJut15oGKq0KHptWQ29iUmccmS7Jko3RDbj4CqzHA',
    },
    {
      name: 'Sauvignon Blanc',
      region: 'Marlborough, New Zealand',
      pairing: 'Pairs with Margherita Pizza',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6P7Od8Dqb40rvJ2vLn1-j-PbwNZbYpCOgKBm26zga2w4s8j665MhP_FFB6Pha85_Dpb4ybxTor71CL3rgOBl3_6Xr0KCUJ2qm1z6mnxRCqJ8YsEPfUYkgAD1KqDF3g-gZ6kj_6YIlTdul4y51iou4VtOkeUGPFOaZ4Y7MgzIQEqunYNbZz_cJM122TmpY4-d--03YR4djNSCicRedWrTPdndtT9Z2ESlG1UBkt5jQr996soJs0c2O48qFICfrHgfxSsy3SfzaePM',
    },
    {
      name: 'Cabernet Sauvignon',
      region: 'Paso Robles, California',
      pairing: 'Pairs with our Classic Pepperoni',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgu2A7w5OAPYyY3SAJx7FfHWvBVjivhKWwDDuutcpmlWYbxWFuz61puwH1VF7nfeJxPiAAx-2mMxsWEeb2yYVvf1Pe-E6pyrJZpymSZTrXzvgWhPw8fJsAvnbwC0ou_B-ArQl2PHjLnWQM8LKS2_zHAa36zClbX8YEB9CHUkyZfUQPRBiaT_i8ic5kXOApv2e3BylvSn7u7rm9WQuww0VFL4ffDQgO2SMEVTGHUTafWDaUlfVkNRZjbM-WIwksf9JEN4HwnMe_RBI',
    },
    {
      name: 'Rosé',
      region: 'Provence, France',
      pairing: 'Pairs with our Caprese Salad',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0cmw-pJZIMpebBlgGeH0UKzEKmvjvp22nVr5UpYoAyxKQX6DR-SysWKhawpfEF_hrIkuxMjDxn-vcRLbpS-V57ONgFcJ_Eu2RRJKwyfp6BEqtp9o2FmOSqjz9c2lCvv5TnPhrMQNPYVsih-_VwRP8K7dF9Gfk0i__BGsgeSt6Ja-1tWkiieVapDZ4qgX1Tj3BUJuJRBShjeMEDORGmnQAcDeKMhHMRBhFvfhOXsz0fnw5XJs1S0TX2fJAeTQzg47h2vozcTHubyk',
    },
    {
      name: 'Prosecco',
      region: 'Veneto, Italy',
      pairing: 'A perfect start to any meal',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdUgl6cnhorAlIxRvl3bo4itk_FO3I9fBhhYa3phO7GtNddG1SXeS7C7eUAQD-8f7Nq1_Evi0ANTuda0OEB1YkEVk8ov7JYddFucfq_8rZYJW5KGURIivOsnCmfPKePP-Cq86NZdaXeUCbwfcw_qds_SR96s9VHxuDQkJiSabbnZN3XP6lQBAwk1DiRoqLkwUFaaHGJ-rxBFH8zvHXNDt3w0pRW8G4RLGDNyNwwit_V-D1yl-1CHt_uNWpp7CM3ViXgiV3vcSzgfE',
    },
    {
      name: 'Malbec',
      region: 'Mendoza, Argentina',
      pairing: 'Pairs with Meat Lover\'s Pizza',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIQbgu0cXzn4m-S6B2FmTsq9LtXgGqOH9X-CMFoI5VvzoArQauCHdLeCrl7tj03W4ALfCp9Tp1EFN3GOgKvU4CaO2BCmGB2w7dGCSyBWmrLgYBZFdWfK7A7LdEOrWIHXr6U5dqZjgntRLMhaljuljTnhpdOZGO9EGT2rbZzq53x9Od011CorSt4TyvvKyxWQpbWovb02k6bK_wGfAW_doAViNAWEA7_Sx2Zyy3buj_0bvB2Uiby-brkqF-FXG1cd8s6AphRLv6ag4',
    },
    {
      name: 'Riesling',
      region: 'Mosel, Germany',
      pairing: 'Pairs with Prosciutto & Fig Pizza',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo2YwGzCFgesNLbw87qQx0u2A6chmoC0eHtwwXu3ht_2sgHvBrW3b_-jOUVFsjGY4qtAAaB0i4nbsn3f1JyEXx34IaCzd9iV8xk_7o9_cJmz7Qh5dJJ0Gvo5ua0rLS2Wb6pbiWFFkkCgt1gG0j5FiVSJ7N55t-1dP0NpBCqNO7Vp9kXV-QItNNZjLifVm8lmHEwat-lYm_hqONUdb-3jQ-5RS8WzXUWMKF-rU39rl5Bjs9NqI2i6wTTTzWOQPJwypq9nteDpylvxw',
    },
  ];

  return (
    <main className="flex-1 w-full font-manrope">
      {/* HeroSection */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuArg8Hs4qZLSGXM5BNTRaLIwZEd7d1Uuo2upK7ZLnctIGPRvmmIH_2lOd5Ib9onL-5DWWqedG166sVA522FNxufiEWlrek4wzykNNU6jlcFRaK6y_N1zjRyIH073NVSwXeG-tsxVVLsyex0dHbkJ6pFq1PPF65CTo9GJE9aicqjilmLaruEiwJeHFQk-4TJciPiiRVqqtQUTY8K9JL0tUEcYBQcBlNAHPCQvqFOkBptIa4fac82DKymlVs0cQP0AcIz1frcEh5gUgM")`,
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Our Wine Curation</h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">Explore our hand-selected wines, perfectly paired with our mountain-town flavors.</h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Explore The List</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-10 lg:px-20 py-10">
        {/* SectionHeader */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">The Cellar</h2>
        {/* Chips */}
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">All</p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#392928] hover:bg-[#4a3534] transition-colors pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">Red</p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#392928] hover:bg-[#4a3534] transition-colors pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">White</p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#392928] hover:bg-[#4a3534] transition-colors pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">Rosé</p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#392928] hover:bg-[#4a3534] transition-colors pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">Sparkling</p>
          </div>
        </div>
        {/* ImageGrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {wines.map((wine) => (
            <div key={wine.name} className="flex flex-col gap-3 pb-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={`Bottle of ${wine.name} wine`} src={wine.image} />
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">{wine.name}</p>
                <p className="text-[#ba9e9c] text-sm font-normal leading-normal">{wine.region}</p>
                <p className="text-[#ba9e9c] text-sm font-normal leading-normal">{wine.pairing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WineCurationPage;
