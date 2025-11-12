import { useEffect, useState } from 'react';

// Mock data for employees, replace with API call if available
const employees = [
  { id: 1, name: 'Jane D.', role: 'Cook', avatar: '...' },
  { id: 2, name: 'John S.', role: 'Cook', avatar: '...' },
  { id: 3, name: 'Mike R.', role: 'Driver', avatar: '...' },
  { id: 4, name: 'Sarah L.', role: 'Driver', avatar: '...' },
  { id: 5, name: 'Emily C.', role: 'Front of House', avatar: '...' },
  { id: 6, name: 'David P.', role: 'Front of House', avatar: '...' },
];

const ShiftCard = ({ shift }) => {
    const employee = employees.find(e => e.id === shift.employeeId);
    return (
        <div className={`cursor-pointer rounded-lg border-l-4 p-2 text-xs ${employee ? 'border-red-400 bg-red-400/20' : 'border-dashed border-gray-400 bg-gray-50 dark:bg-gray-800/50 text-center'}`}>
            <p className="font-bold text-gray-800 dark:text-white">{employee ? employee.name : 'Unassigned'}</p>
            <p className="text-gray-600 dark:text-gray-300">{shift.time}</p>
        </div>
    );
};


export default function SchedulingPage() {
    const [shifts, setShifts] = useState([]);

    useEffect(() => {
        const fetchSchedule = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch('http://localhost:3001/api/schedule', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setShifts(data);
                }
            } catch (error) {
                console.error('Failed to fetch schedule:', error);
            }
        };
        fetchSchedule();
    }, []);

    const roles = ['Cook', 'Driver', 'Front of House'];
    const days = ['Mon, Oct 28', 'Tue, Oct 29', 'Wed, Oct 30', 'Thu, Oct 31', 'Fri, Nov 1', 'Sat, Nov 2', 'Sun, Nov 3'];

    const getShiftsForRoleAndDay = (role, day) => {
        return shifts.filter(shift => shift.role === role && shift.day === day);
    }

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
                  {days.map(day => (
                     <th key={day} className="w-48 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-[#3b4754]">
                {roles.map(role => (
                    <tr key={role}>
                        <td className="h-24 align-top p-2 text-sm font-medium text-gray-800 dark:text-white">{role}</td>
                        {days.map(day => (
                            <td key={day} className="h-24 align-top p-1">
                                <div className="flex h-full w-full flex-col gap-1">
                                    {getShiftsForRoleAndDay(role, day).map(shift => (
                                        <ShiftCard key={shift.id} shift={shift} />
                                    ))}
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
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
                {employees.map(employee => (
                    <div key={employee.id} className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-800/50 cursor-grab">
                        <div>
                            <p className="font-medium text-sm text-gray-800 dark:text-white">{employee.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{employee.role}</p>
                        </div>
                    </div>
                ))}
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
