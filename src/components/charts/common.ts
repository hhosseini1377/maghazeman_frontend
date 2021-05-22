import { Bar, Doughnut, Line, Pie, Polar, Radar } from "react-chartjs-2";
import {
  humanizeToEnglish,
  humanizeToFarsi,
} from "../../utils/humanizeToFarsiChart";

/* eslint-disable */
export let CHART_LIST: any = {
  Bar: {
    name: "Bar",
    component: Bar,
    options: {
      cornerRadius: 5,
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          boxWidth: 7,
          textAlign: "center",
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(0,0,0,0)",
            },
            stacked: false,
            ticks: {
              stepSize: 15,
              callback(value: number | string) {
                return humanizeToFarsi(value);
              },
            },
          },
        ],
        xAxes: [
          {
            stacked: false,
            gridLines: {
              display: false,
              color: "rgba(0,0,0,0)",
            },
          },
        ],
      },
    },
  },
  Doughnut: {
    name: "Doughnut",
    component: Doughnut,
    options: {
      maintainAspectRatio: false,
      cutoutPercentage: 65,
      legend: {
        display: false,
      },
    },
  },
  Line: {
    name: "Line",
    component: Line,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          textAlign: "center",
          usePointStyle: true,
          boxWidth: 2,
        },
      },
      tooltips: {
        intersect: false,
      },
      hover: {
        intersect: true,
      },
      plugins: {
        filler: {
          propagate: false,
        },
      },
      scales: {
        xAxes: [
          {
            reverse: true,
            gridLines: {
              display: false,
              color: "rgba(0,0,0,0)",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              stepSize: 3000000,
              callback(value: number | string) {
                return humanizeToFarsi(value);
              },
            },
            display: true,
            borderDash: [5, 5],
            gridLines: {
              display: false,
              color: "rgba(0,0,0,0)",
              fontColor: "#fff",
            },
          },
        ],
      },
    },
  },
  Pie: {
    name: "Pie",
    component: Pie,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  },
  Polar: {
    name: "Polar",
    component: Polar,
    options: { maintainAspectRatio: false },
  },
  Radar: {
    name: "Radar",
    component: Radar,
    options: { maintainAspectRatio: false },
  },
};
