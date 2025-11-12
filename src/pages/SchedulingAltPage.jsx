import { useEffect, useState } from 'react';

// Mock data for employees, replace with API call if available
const employees = [
  { id: 1, name: 'A. Smith', role: 'Kitchen', avatar: '...' },
  { id: 2, name: 'B. Jones', role: 'Kitchen', avatar: '...' },
  { id: 3, name: 'C. Miller', role: 'Kitchen', avatar: '...' },
  { id: 4, name: 'D. Chen', role: 'Kitchen', avatar: '...' },
  { id: 5, name: 'E. Garcia', role: 'Kitchen', avatar: '...' },
  { id: 6, name: 'F. White', role: 'Front of House', avatar: '...' },
  { id: 7, name: 'G. Lee', role: 'Front of House', avatar: '...' },
  { id: 8, name: 'H. Davis', role: 'Bar Staff', avatar: '...' },
];

const Shift = ({ shift }) => {
    const employee = employees.find(e => e.id === shift.employeeId);
    let color = 'bg-gray-500';
    if(shift.role === "Kitchen") color = "bg-blue-500";
    if(shift.role === "Front of House") color = "bg-teal-500";
    if(shift.role === "Bar Staff") color = "bg-purple-500";


    return (
        <div className={`${color} text-white p-2 rounded-lg text-xs`}>
            <strong>{employee ? employee.name + ':' : 'Open'}</strong> {shift.time}
        </div>
    );
}


export default function SchedulingAltPage() {
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

    const roles = ['Kitchen', 'Front of House', 'Bar Staff', 'Catering'];
    const days = ['Mon, Oct 30', 'Tue, Oct 31', 'Wed, Nov 1', 'Thu, Nov 2', 'Fri, Nov 3', 'Sat, Nov 4', 'Sun, Nov 5'];

    const getShiftsForRoleAndDay = (role, day) => {
        return shifts.filter(shift => shift.role === role && shift.day === day);
    }
  return (
    <div className="flex-1 p-6 grid grid-cols-1 xl:grid-cols-4 gap-6">
      <div className="xl:col-span-3 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Weekly Schedule</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="hidden sm:inline">View:</span>
              <button className="px-3 py-1 rounded-md bg-brand-green/10 dark:bg-brand-green text-brand-green dark:text-white font-medium">Timeline</button>
              <button className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/10">By Role</button>
              <button className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/10">By Employee</button>
            </div>
          </div>
          <div className="relative w-full overflow-x-auto">
            <div className="grid" style={{gridTemplateColumns: '150px repeat(7, 1fr)', minWidth: '1200px'}}>
              <div className="sticky left-0 bg-white dark:bg-black/20 z-10"></div>
              {days.map(day => (
                <div key={day} className="text-center py-2 border-b border-gray-200 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200">
                    <p>{day}</p>
                </div>
              ))}
            </div>
            <div className="grid divide-y divide-gray-200 dark:divide-white/10" style={{gridTemplateColumns: '150px repeat(7, 1fr)', minWidth: '1200px'}}>
                {roles.map(role => (
                    <>
                        <div className="sticky left-0 bg-white dark:bg-black/20 z-10 p-4 font-semibold text-gray-700 dark:text-gray-300 flex items-center">{role}</div>
                        {days.map(day => (
                            <div key={day} className="p-2 space-y-1">
                                {getShiftsForRoleAndDay(role, day).map(shift => (
                                    <Shift key={shift.id} shift={shift} />
                                ))}
                            </div>
                        ))}
                    </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="xl:col-span-1 flex flex-col gap-6">
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Wildcard Factors</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg">
              <span className="material-symbols-outlined text-brand-orange mt-1">ac_unit</span>
              <div>
                <p className="font-bold text-brand-orange">Heavy Snow Forecast</p>
                <p className="text-sm text-brand-orange/80 dark:text-brand-orange/90">Wed, Nov 1. Expect higher demand and potential staff travel delays.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-pink-500/10 border-l-4 border-pink-500 rounded-r-lg">
              <span className="material-symbols-outlined text-pink-500 mt-1">celebration</span>
              <div>
                <p className="font-bold text-pink-600 dark:text-pink-400">Major Catering Event</p>
                <p className="text-sm text-pink-700/80 dark:text-pink-400/90">Sat, Nov 4. Requires dedicated staff, reducing on-site availability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Staffing Analysis (Wed, Nov 1)</h3>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Comparison of scheduled vs. anticipated &amp; historical needs.</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Kitchen</span>
                  <span className="text-gray-500 dark:text-gray-400">18 / 22 Needed</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5">
                  <div className="bg-brand-orange h-2.5 rounded-full" style={{width: '81%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Front of House</span>
                  <span className="text-gray-500 dark:text-gray-400">10 / 12 Needed</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '83%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Bar Staff</span>
                  <span className="text-gray-500 dark:text-gray-400">5 / 5 Needed</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10">
          <div className="flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">On-Call Staff</h2>
            <button className="text-sm font-medium text-brand-green hover:underline">Manage List</button>
          </div>
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
            <div className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhckRooLXHqJzreS_sG8kBKBEScwqh1szYXDbKMSEKpzOxsuQJprXrJx-IWAWaxmHPdUuz7Pj0SIuaApo1IjgeKss2Y4ff3guHfC2eplAJJUcwjhMXXqPJBFqbWnl1yfBQpC8LMKnmO3LhzTmnwe0sB7znkDr4UVGown4DB08o7zVy98CTWwPQ94E298n2Jn2doRXAvgwd31V8xrWOV43AyP7-Ayt_MCzEOBl8LrlB9M8TNshQBuQJneXLLzDdBl-iugFIQYhUa5s")'}}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Maria Rodriguez</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Kitchen, FOH</p>
                </div>
              </div>
              <button className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
                <span className="material-symbols-outlined text-lg">call</span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhckRooLXHqJzreS_sG8kBKBEScwqh1szYXDbKMSEKpzOxsuQJprXrJx-IWAWaxmHPdUuz7Pj0SIuaApo1IjgeKss2Y4ff3guHfC2eplAJJUcwjhMXXqPJBFqbWnl1yfBQpC8LMKnmO3LhzTmnwe0sB7znkDr4UVGown4DB08o7zVy98CTWwPQ94E298n2Jn2doRXAvgwd31V8xrWOV43AyP7-Ayt_MCzEOBl8LrlB9M8TNshQBuQJneXLLzDdBl-iugFIQYhUa5s")'}}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">David Kim</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Bar</p>
                </div>
              </div>
              <button className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
                <span className="material-symbols-outlined text-lg">call</span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhckRooLXHqJzreS_sG8kBKBEScwqh1szYXDbKMSEKpzOxsuQJprXrJx-IWAWaxmHPdUuz7Pj0SIuaApo1IjgeKss2Y4ff3guHfC2eplAJJUcwjhMXXqPJBFqbWnl1yfBQpC8LMKnmO3LhzTmnwe0sB7znkDr4UVGown4DB08o7zVy98CTWwPQ94E298n2Jn2doRXAvgwd31V8xrWOV43AyP7-Ayt_MCzEOBl8LrlB9M8TNshQBuQJneXLLzDdBl-iugFIQYhUa5s")'}}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Chloe Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Kitchen</p>
                </div>
              </div>
              <button className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
                <span className="material-symbols-outlined text-lg">call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
