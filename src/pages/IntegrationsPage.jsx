export default function IntegrationsPage() {
  return (
    <div className="p-8">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-black leading-tight tracking-tight">Integrations &amp; API Settings</h1>
          <p className="text-white/60 text-base font-normal leading-normal">Manage integrations with third-party restaurant vendors.</p>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
          <span className="material-symbols-outlined">add_circle</span>
          <span className="truncate">Add New Integration</span>
        </button>
      </header>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-lg bg-white/5">
                <img alt="OpenTable Logo" className="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfZ63LZkza65uvnGkZJnwPXM0fHTzsEigtr1Dy42wlfbhRcM_gxcD10Ph32c4V1e3u4GDWw0kYIhn4zetElDUockdGqmBL_nlx0uYLnj4GIiX3RZnLVDQoS7JPp7s-xilOW3MGriWpqxTbDVImOR2Q1WBhGFf8S0S0ssUO6Ds32YXnQI5F_MANUCHE6y6raUQaNEmxutkmUYL2agqZZ-A5zy0QXb6ZivO59_kxwHoMDAOx4F2ALP8cFn36PrU527DwARjvKB--zjU" />
              </div>
              <div className="flex flex-col">
                <p className="text-white text-lg font-bold leading-normal">OpenTable</p>
                <p className="text-white/60 text-sm font-normal leading-normal">Reservation Management</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              Active
            </div>
          </div>
          <div className="mt-6 flex flex-1 items-end justify-between gap-4">
            <label className="relative flex h-[28px] w-[52px] cursor-pointer items-center rounded-full bg-white/10 p-1 has-[:checked]:bg-primary">
              <div className="h-5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out"></div>
              <input defaultChecked className="invisible absolute" type="checkbox" />
            </label>
            <button className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-sm font-medium text-white transition-colors hover:bg-white/20">
              <span className="material-symbols-outlined text-base">tune</span>
              Configure
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-white/5" data-alt="UberEats Logo">
                        <img alt="Uber Eats Logo" className="h-6 w-6 object-contain invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ufWIxvsljg6YWy512IpdN21pgzz9VrsDjHp-1tXU_-ZDAytzOORVASY5F1lBcMUK0vi9mP9_66SoyK28qyw6rmXbGLZX320-wGQlLB0eeuEoF2lS9VeuYRLg5w4jFyU3aAaorT1gmaZwdLgod2tBs-eRweTVGVXWyf7O2_bz6aXSMNW17mUwUnX6GduPJ-qYJr-tHCYBX72JYCOoi3sL455Ivni831JRkrmsrN4d4F8pkerlFmfX8nmiqgGC1RYCSj0rSine6Mo" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-lg font-bold leading-normal">UberEats</p>
                        <p className="text-white/60 text-sm font-normal leading-normal">Delivery Partner</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Active
                </div>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <label className="relative flex h-[28px] w-[52px] cursor-pointer items-center rounded-full bg-white/10 p-1 has-[:checked]:bg-primary">
                    <div className="h-5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out"></div>
                    <input defaultChecked className="invisible absolute" type="checkbox" />
                </label>
                <button className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-sm font-medium text-white transition-colors hover:bg-white/20">
                    <span className="material-symbols-outlined text-base">tune</span>
                    Configure
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-white/5" data-alt="Caterease Logo">
                        <img alt="Caterease Logo" className="h-8 w-8 rounded object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLFj4UxZeEwKvMOf4jQrWkNcVuIMIELMyNq0PiTPLHdTZikIPEYvgZMsIjqjc63zE88jFpcS-pbPsXVlpNW2M5_pdCyd_rIY2-IH8aX0S97bOogow5R1ZWfhyL2MWeYhVFvLmKvJPGo3xb3BMCtIfYPiN3hn40VdCzwYTNPH_JR3Qle7KWRR5ESgihcFz7fLbUS953cP4VgSUDGhlaVsO4Lo-qUnf9pR8ysLEQ4XKXsKVnkIPPcTJJB5aDTrld-cJNHoPGQVkLBbc" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-lg font-bold leading-normal">Caterease</p>
                        <p className="text-white/60 text-sm font-normal leading-normal">Catering Management</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">
                    <span className="h-2 w-2 rounded-full bg-red-400"></span>
                    Error
                </div>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <label className="relative flex h-[28px] w-[52px] cursor-pointer items-center rounded-full bg-white/10 p-1 has-[:checked]:bg-primary">
                    <div className="h-5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out"></div>
                    <input className="invisible absolute" type="checkbox" />
                </label>
                <button className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-sm font-medium text-white transition-colors hover:bg-white/20">
                    <span className="material-symbols-outlined text-base">tune</span>
                    Configure
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-white/5" data-alt="Xero Logo">
                        <img alt="Xero Logo" className="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDySCtW-ga9omtlX9TOsFI-STyBEwifZQKBmiso3bVQcVyHpyYuV68cWNRY0JP9BWsUhYkUuBLVwPizmWGpXO0K7f5ACotDJH3VRIkT47XKad7YhUSku3P5TrZgpV1h53b-03sBplzOSGMo2lCPp6tBuuMC9Wf3pzc4SffXTWbfdNQcVsyUjYohXNMSvfPN_1XpKAIl2hFdJGSB1dQGTBmOri0nV8OCnONGMInuIKNCd_63kgKM5YFMKdDj1tsmqSN9qamXcKl9tAc" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-lg font-bold leading-normal">Xero</p>
                        <p className="text-white/60 text-sm font-normal leading-normal">Accounting</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-500/20 px-3 py-1 text-xs font-medium text-gray-400">
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                    Disabled
                </div>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <label className="relative flex h-[28px] w-[52px] cursor-pointer items-center rounded-full bg-white/10 p-1 has-[:checked]:bg-primary">
                    <div className="h-5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out"></div>
                    <input className="invisible absolute" type="checkbox" />
                </label>
                <button className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-sm font-medium text-white transition-colors hover:bg-white/20">
                    <span className="material-symbols-outlined text-base">tune</span>
                    Configure
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-white/5" data-alt="Sysco Logo">
                        <img alt="Sysco Logo" className="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDySCtW-ga9omtlX9TOsFI-STyBEwifZQKBmiso3bVQcVyHpyYuV68cWNRY0JP9BWsUhYkUuBLVwPizmWGpXO0K7f5ACotDJH3VRIkT47XKad7YhUSku3P5TrZgpV1h53b-03sBplzOSGMo2lCPp6tBuuMC9Wf3pzc4SffXTWbfdNQcVsyUjYohXNMSvfPN_1XpKAIl2hFdJGSB1dQGTBmOri0nV8OCnONGMInuIKNCd_63kgKM5YFMKdDj1tsmqSN9qamXcKl9tAc" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-lg font-bold leading-normal">Sysco</p>
                        <p className="text-white/60 text-sm font-normal leading-normal">Supply Chain</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Active
                </div>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <label className="relative flex h-[28px] w-[52px] cursor-pointer items-center rounded-full bg-white/10 p-1 has-[:checked]:bg-primary">
                    <div className="h-5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out"></div>
                    <input defaultChecked className="invisible absolute" type="checkbox" />
                </label>
                <button className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-sm font-medium text-white transition-colors hover:bg-white/20">
                    <span className="material-symbols-outlined text-base">tune</span>
                    Configure
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-white/5" data-alt="HubSpot Logo">
                        <img alt="HubSpot Logo" className="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDySCtW-ga9omtlX9TOsFI-STyBEwifZQKBmiso3bVQcVyHpyYuV68cWNRY0JP9BWsUhYkUuBLVwPizmWGpXO0K7f5ACotDJH3VRIkT47XKad7YhUSku3P5TrZgpV1h53b-03sBplzOSGMo2lCPp6tBuuMC9Wf3pzc4SffXTWbfdNQcVsyUjYohXNMSvfPN_1XpKAIl2hFdJGSB1dQGTBmOri0nV8OCnONGMInuIKNCd_63kgKM5YFMKdDj1tsmqSN9qamXcKl9tAc" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-lg font-bold leading-normal">HubSpot</p>
                        <p className="text-white/60 text-sm font-normal leading-normal">CRM &amp; Marketing</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-500/20 px-3 py-1 text-xs font-medium text-gray-400">
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                    Disabled
                </div>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <label className="relative flex h-[28px] w-[52px] cursor-pointer items-center rounded-full bg-white/10 p-1 has-[:checked]:bg-primary">
                    <div className="h-5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out"></div>
                    <input className="invisible absolute" type="checkbox" />
                </label>
                <button className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-sm font-medium text-white transition-colors hover:bg-white/20">
                    <span className="material-symbols-outlined text-base">tune</span>
                    Configure
                </button>
            </div>
        </div>
      </div>
      <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-3xl text-primary">help_center</span>
          <div>
            <h2 className="text-xl font-bold text-white">Help or Documents</h2>
            <p className="text-white/60">Find guidance on configuring and managing your integrations.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10" href="#">
            <span className="material-symbols-outlined text-primary">description</span>
            <span className="text-sm font-medium text-white">API Documentation</span>
          </a>
          <a className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10" href="#">
            <span className="material-symbols-outlined text-primary">school</span>
            <span className="text-sm font-medium text-white">Integration Tutorials</span>
          </a>
          <a className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10" href="#">
            <span className="material-symbols-outlined text-primary">contact_support</span>
            <span className="text-sm font-medium text-white">Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
