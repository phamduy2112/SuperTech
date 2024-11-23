import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
      };
  return (
    <div className='flex-1 box-border h-[300px]'>
    <Line
      data={{
        labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
        datasets: [
          {
            label: 'Doanh Thu',
            data: [200, 3000, 400, 600],
            backgroundColor: 'rgba(75, 112, 192, 0.2)',
            borderColor: 'rgba(75, 112, 192,1)',
            borderWidth: 1,
            tension: 0.4,
          },
          {
            label: 'Chi Tiêu',
            data: [100, 800, 2980, 1520],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            tension: 0.4,
          },
        ],
      }}
      options={options}
    />
  </div>
  )
}

export default LineChart