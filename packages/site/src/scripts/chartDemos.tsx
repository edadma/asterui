import React from 'react'
import { createRoot } from 'react-dom/client'
import { Chart } from 'asterui'

const demos: Record<string, React.ReactNode> = {
  line: (
    <Chart
      type="line"
      height={300}
      series={[
        {
          name: 'Sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ]}
      options={{
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
      }}
    />
  ),
  'multi-line': (
    <Chart
      type="line"
      height={300}
      series={[
        {
          name: 'Revenue',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: 'Expenses',
          data: [20, 35, 40, 35, 40, 55, 60, 75],
        },
      ]}
      options={{
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        stroke: {
          curve: 'smooth',
        },
      }}
    />
  ),
  bar: (
    <Chart
      type="bar"
      height={300}
      series={[
        {
          name: 'Sales',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
      ]}
      options={{
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
          },
        },
      }}
    />
  ),
  'stacked-bar': (
    <Chart
      type="bar"
      height={300}
      series={[
        {
          name: 'Product A',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Product B',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'Product C',
          data: [11, 17, 15, 15, 21, 14],
        },
      ]}
      options={{
        chart: {
          stacked: true,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
          },
        },
      }}
    />
  ),
  pie: (
    <Chart
      type="pie"
      height={350}
      series={[44, 55, 13, 43, 22]}
      options={{
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
          position: 'bottom',
        },
      }}
    />
  ),
  donut: (
    <Chart
      type="donut"
      height={350}
      series={[44, 55, 41, 17, 15]}
      options={{
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Grapes'],
        legend: {
          position: 'bottom',
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Total',
                },
              },
            },
          },
        },
      }}
    />
  ),
  area: (
    <Chart
      type="area"
      height={300}
      series={[
        {
          name: 'Series 1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Series 2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ]}
      options={{
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        stroke: {
          curve: 'smooth',
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.1,
          },
        },
      }}
    />
  ),
  radar: (
    <Chart
      type="radar"
      height={350}
      series={[
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
        },
      ]}
      options={{
        xaxis: {
          categories: ['Speed', 'Power', 'Agility', 'Endurance', 'Accuracy', 'Stealth'],
        },
      }}
    />
  ),
  radialbar: (
    <Chart
      type="radialBar"
      height={350}
      series={[76, 67, 61, 90]}
      options={{
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: 'TOTAL',
              },
            },
          },
        },
      }}
    />
  ),
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.demo-container').forEach((container) => {
    const example = container.dataset.example
    if (example && demos[example]) {
      const root = createRoot(container)
      root.render(demos[example])
    }
  })
})
