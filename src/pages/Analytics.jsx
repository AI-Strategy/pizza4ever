import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function Analytics() {
  useEffect(() => {
    // Sales by Pizza Type
    const salesByPizzaCtx = document.getElementById('salesByPizzaChart')?.getContext('2d');
    if (salesByPizzaCtx) {
      new Chart(salesByPizzaCtx, {
        type: 'bar',
        data: {
          labels: ['Pepperoni', 'Margherita', 'Supreme', 'Veggie', 'Hawaiian'],
          datasets: [{
            label: 'Pizzas Sold',
            data: [120, 85, 105, 60, 40],
            backgroundColor: '#BF5700',
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(245, 245, 220, 0.1)' }, ticks: { color: '#F5F5DC' } },
            x: { grid: { display: false }, ticks: { color: '#F5F5DC' } }
          }
        }
      });
    }

    // Peak Order Hours
    const peakHoursCtx = document.getElementById('peakHoursChart')?.getContext('2d');
    if (peakHoursCtx) {
      new Chart(peakHoursCtx, {
        type: 'line',
        data: {
          labels: ['11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
          datasets: [{
            label: 'Orders',
            data: [10, 25, 30, 22, 18, 28, 40, 55, 60, 45, 30],
            borderColor: '#FFD700',
            tension: 0.4,
            fill: false
          }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: 'rgba(245, 245, 220, 0.1)' }, ticks: { color: '#F5F5DC' } },
              x: { grid: { display: false }, ticks: { color: '#F5F5DC' } }
            }
          }
      });
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Sales by Pizza Type</h2>
          <div className="h-80">
            <canvas id="salesByPizzaChart"></canvas>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Peak Order Hours</h2>
          <div className="h-80">
            <canvas id="peakHoursChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
