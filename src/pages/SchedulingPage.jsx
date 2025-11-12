export default function SchedulingPage() {
  return (
    <div className="p-6">
      {/* PageHeading */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-gray-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Employee Scheduling</h1>
          <p className="text-gray-500 dark:text-[#9dabb9] text-base font-normal leading-normal">Manage staff rotas, view historical data, and plan for events.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white dark:bg-gray-700/50 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
            <span className="truncate">Save Draft</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
            <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
            <span className="truncate">Publish Schedule</span>
          </button>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        {/* Main Scheduling Area */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Toolbar and View Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-1">
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                <span className="material-symbols-outlined">calendar_today</span>
              </button>
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <p className="ml-2 text-gray-800 dark:text-white font-medium">October 28 - November 3, 2024</p>
            </div>
            <div className="flex w-full sm:w-auto">
              <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-gray-200 dark:bg-[#283039] p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-white dark:has-[:checked]:bg-[#111418] has-[:checked]:shadow-sm has-[:checked]:text-gray-900 dark:has-[:checked]:text-white text-gray-500 dark:text-[#9dabb9] text-sm font-medium leading-normal">
                  <span className="truncate">Day</span>
                  <input className="invisible w-0" name="view-toggle" type="radio" value="Day View" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-white dark:has-[:checked]:bg-[#111418] has-[:checked]:shadow-sm has-[:checked]:text-gray-900 dark:has-[:checked]:text-white text-gray-500 dark:text-[#9dabb9] text-sm font-medium leading-normal">
                  <span className="truncate">Week</span>
                  <input defaultChecked className="invisible w-0" name="view-toggle" type="radio" value="Week View" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-white dark:has-[:checked]:bg-[#111418] has-[:checked]:shadow-sm has-[:checked]:text-gray-900 dark:has-[:checked]:text-white text-gray-500 dark:text-[#9dabb9] text-sm font-medium leading-normal">
                  <span className="truncate">Month</span>
                  <input className="invisible w-0" name="view-toggle" type="radio" value="Month View" />
                </label>
              </div>
            </div>
          </div>
          {/* Schedule Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-[#3b4754] bg-white dark:bg-[#1c2127]">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-[#283039]">
                <tr>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Role</th>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Mon, Oct 28</th>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Tue, Oct 29</th>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Wed, Oct 30</th>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Thu, Oct 31</th>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Fri, Nov 1</th>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Sat, Nov 2</th>
                  <th className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">Sun, Nov 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-[#3b4754]">
                {/* Shift Cards would be draggable items within these cells */}
                <tr>
                  <td className="h-24 align-top p-2 text-sm font-medium text-gray-800 dark:text-white">Cook</td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-red-400 bg-red-400/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Jane D.</p><p className="text-gray-600 dark:text-gray-300">9AM - 5PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-red-400 bg-red-400/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">John S.</p><p className="text-gray-600 dark:text-gray-300">9AM - 5PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-red-400 bg-red-400/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Jane D.</p><p className="text-gray-600 dark:text-gray-300">9AM - 5PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-red-400 bg-red-400/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">John S.</p><p className="text-gray-600 dark:text-gray-300">9AM - 5PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-red-400 bg-red-400/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Jane D.</p><p className="text-gray-600 dark:text-gray-300">11AM - 7PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-red-400 bg-red-400/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">John S.</p><p className="text-gray-600 dark:text-gray-300">11AM - 7PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border border-dashed border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 p-2 text-center text-xs text-gray-500 dark:text-gray-400"><p>Unassigned</p><p>11AM - 7PM</p></div></div></td>
                </tr>
                <tr>
                  <td className="h-24 align-top p-2 text-sm font-medium text-gray-800 dark:text-white">Driver</td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-green-500 bg-green-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Mike R.</p><p className="text-gray-600 dark:text-gray-300">5PM - 11PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-green-500 bg-green-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Sarah L.</p><p className="text-gray-600 dark:text-gray-300">5PM - 11PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-green-500 bg-green-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Mike R.</p><p className="text-gray-600 dark:text-gray-300">5PM - 11PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border border-dashed border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 p-2 text-center text-xs text-gray-500 dark:text-gray-400"><p>Unassigned</p><p>5PM - 11PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-green-500 bg-green-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Sarah L.</p><p className="text-gray-600 dark:text-gray-300">5PM - 11PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-green-500 bg-green-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Mike R.</p><p className="text-gray-600 dark:text-gray-300">5PM - 11PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-green-500 bg-green-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Sarah L.</p><p className="text-gray-600 dark:text-gray-300">5PM - 11PM</p></div></div></td>
                </tr>
                <tr>
                  <td className="h-24 align-top p-2 text-sm font-medium text-gray-800 dark:text-white">Front of House</td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-blue-500 bg-blue-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Emily C.</p><p className="text-gray-600 dark:text-gray-300">12PM - 8PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-blue-500 bg-blue-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Emily C.</p><p className="text-gray-600 dark:text-gray-300">12PM - 8PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-blue-500 bg-blue-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">David P.</p><p className="text-gray-600 dark:text-gray-300">12PM - 8PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-blue-500 bg-blue-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Emily C.</p><p className="text-gray-600 dark:text-gray-300">12PM - 8PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-blue-500 bg-blue-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">David P.</p><p className="text-gray-600 dark:text-gray-300">12PM - 8PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-blue-500 bg-blue-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">Emily C.</p><p className="text-gray-600 dark:text-gray-300">12PM - 8PM</p></div></div></td>
                  <td className="h-24 align-top p-1"><div className="flex h-full w-full flex-col gap-1"><div className="cursor-pointer rounded-lg border-l-4 border-blue-500 bg-blue-500/20 p-2 text-xs"><p className="font-bold text-gray-800 dark:text-white">David P.</p><p className="text-gray-600 dark:text-gray-300">12PM - 8PM</p></div></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Contextual Info Sidebar */}
        <div className="w-80 flex-shrink-0 flex flex-col gap-4">
          {/* Employee Roster */}
          <div className="rounded-lg bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900 dark:text-white">Employee Roster</h3>
              <button className="flex items-center gap-1 text-sm text-primary font-semibold">
                <span className="material-symbols-outlined text-base">add</span>
                Add
              </button>
            </div>
            <div className="relative mb-4">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary" placeholder="Search employees..." type="text" />
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              <div className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-800/50 cursor-grab"><div className="w-8 h-8 rounded-full bg-cover bg-center" data-alt="Avatar of Jane D." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDv7cDK_Bp6ZAVPbuXCp5c-CWgMBlakgwHgLo259cj0u1JxoVzTRB-oexRDPNK2aRg9qpuWcZiyw31UfQ4nJKhoA5n-VDfGgdv8hnwegkDE7ODNQrg_xa6E_et15BXCUj6LZ-Nycwan4nFsNtXsgLeT49j0pPShi7m9z49SodZNFLcIrSdDiIppMzW_uzA97S0oZqeA_RfDsg0Q8GNioQeNBUIJzA9Z0SAUqiK9tU4IOy3EBp9qAp5mVgFY46PVvRo97kwLnSYLNGY')"}}></div><div><p className="font-medium text-sm text-gray-800 dark:text-white">Jane D.</p><p className="text-xs text-gray-500 dark:text-gray-400">Cook</p></div></div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-800/50 cursor-grab"><div className="w-8 h-8 rounded-full bg-cover bg-center" data-alt="Avatar of John S." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnQ3gldW-oZ9O1a3Udg0KUyNU2IE-oqhzFI-74kEUKGdWeQiQ0XU8nB9P4Ul2FXIRaCJ8G4D6B9ZRvRWGR3XMHStH_WQAoxMNhBE5MJYa7soi58lAWZXpZpnVYW80TVQqHHybpe5EgMFJqCupuaY3qO5ZiijYpiw43dzHFTk6_Pe_ld4xZfj_wLqkHRIqINLVJj9CE9pqSmC6n8kgKO_mNclttjpjM2PkL6QDU6rl7VkMbS6LY_8z8231lWzvnPSToo1FdXPIO9eQ')"}}></div><div><p className="font-medium text-sm text-gray-800 dark:text-white">John S.</p><p className="text-xs text-gray-500 dark:text-gray-400">Cook</p></div></div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-800/50 cursor-grab"><div className="w-8 h-8 rounded-full bg-cover bg-center" data-alt="Avatar of Mike R." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkvD0qv-8zPgs-nQSfleghe-c_aOaYp7Uatr4T34d-LezfMtI8qOSPWju921NSiGUM7lUpjbbGzoX6963Sx7HDOUqQI7TslhUEgLoB61OwVFWjSquL1zA7CabibwOfgbkcVmt7zz8BTqVdovcpYSqYhtrDNRYYAE4p0JMmdsuVimfZQ3_nMWRrJ6gKpHHD1IzUG44NSl3Tzs2MBDWXEOPGXrwtx6R0NlPqAhL0He4HtMybijPUnq1dqDqd8ILLLHtdNd0bHAaV56Q')"}}></div><div><p className="font-medium text-sm text-gray-800 dark:text-white">Mike R.</p><p className="text-xs text-gray-500 dark:text-gray-400">Driver</p></div></div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-800/50 cursor-grab"><div className="w-8 h-8 rounded-full bg-cover bg-center" data-alt="Avatar of Sarah L." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKHp8UaCLVU5g7tD2CjPu2aboYmkF-PtItvCUj0Y_XKT_r7HVjie_nXBBBWGO9E_y8YZ3ub880s2m_xkJH_O0c3NWC_emJTdRFV97ZNs-EpSb9RAuHtZaeFnUWOPgghG_aXYn5rNbGSvVAXKrUBRzj_5JeJYCVp7BLCSa9b8FjkIZ4fvNkLFWmLcwGN-0wC5HRSgfTr4bnyd3N1XFz4spLZajTDfK7pP8P6ygz8OIZFeS6OpmcnndrXcaeFru7qFP7m6aG4Z7orEs')"}}></div><div><p className="font-medium text-sm text-gray-800 dark:text-white">Sarah L.</p><p className="text-xs text-gray-500 dark:text-gray-400">Driver</p><span className="ml-2 text-xs font-semibold bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">Overflow</span></div></div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-800/50 cursor-grab"><div className="w-8 h-8 rounded-full bg-cover bg-center" data-alt="Avatar of Emily C." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgdNbZ-lRaYALyL3dSU-z_KZYtFhYtdTpNyc-3EQzqVtPbjKLgZQLB-UBHBnE5uHze_ltxe3kqf6I4laumwZGvRq683cwglGjZ-rnLz5fyGdjKjTbcpRfqmYpLkCljCrpo0NCb6afIVc6-f8-JACe80vtrG6GJvkunG2U4eNYjg4RaXV-13DTwD0pjb-ZZo2YuYXk92VCIR3pEb9ZJ3-6jyN6pkrA395SePFsaijYk8unaf2aH8RKhCQNcRu2FkGxneYjZBz7oHIw')"}}></div><div><p className="font-medium text-sm text-gray-800 dark:text-white">Emily C.</p><p className="text-xs text-gray-500 dark:text-gray-400">Front of House</p></div></div>
            </div>
          </div>
          {/* Contextual Info */}
          <div className="rounded-lg bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] p-4 space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white">Contextual Info</h3>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <span className="material-symbols-outlined text-orange-500 mt-1">celebration</span>
              <div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-400 text-sm">Upcoming Event</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Winter Music Fest this weekend. High traffic expected.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <span className="material-symbols-outlined text-blue-500 mt-1">restaurant</span>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 text-sm">Catering Jobs</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">3 catering jobs scheduled for Friday. Check catering panel for details.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-500/10 border border-gray-500/20">
              <span className="material-symbols-outlined text-gray-500 mt-1">history</span>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-400 text-sm">Historical Data</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Last Year (same week): 8 staff members scheduled on average.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <span className="material-symbols-outlined text-green-500 mt-1">auto_awesome</span>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-400 text-sm">Staffing Suggestion</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Recommend +2 drivers for Friday due to event and catering load.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
