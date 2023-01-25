import { Chart } from "chart.js/auto";

export default function useChart() {
  let arrayHourly;
  let build = true;
  let graph;

  function arrayHourlyBuild(h1, t1, h2, t2, h3, t3, h4, t4, h5, t5) {
    arrayHourly = [
      { hour: h1, pluie: t1 },
      { hour: h2, pluie: t2 },
      { hour: h3, pluie: t3 },
      { hour: h4, pluie: t4 },
      { hour: h5, pluie: t5 },
    ];
    if (build === false) {
      graph.destroy();
    }
    graph = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {
        labels: arrayHourly.map((row) => row.hour),
        datasets: [
          {
            label: 'Précipitation en mm',
            data: arrayHourly.map((row) => row.pluie),
            backgroundColor: '#2F4C77',
            borderColor: '#2F4C77',
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              color: '#D7D7D7',
            },
            ticks: {
              color: '#2F4C77',
            },
          },
          y: {
            max: 1.5,
            grid: {
              display: false,
            },
            beginAtZero: true,
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4,
          },
        },
      },
    });
    build = false;
  }
  return [arrayHourlyBuild, arrayHourly, graph];
}