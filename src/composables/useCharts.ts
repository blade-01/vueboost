export default () => {
  const barChartOptions = {
    chart: {
      id: 'vuechart-example',
      height: 350,
      width: '100%',
      type: 'bar'
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top' // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#eef1f8']
      }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#eef1f8',
            colorTo: '#eef1f8',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true
      },
      labels: {
        style: {
          colors: '#26A0FC'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#26A0FC'
        }
      }
    }
  };
  const barChartSeries = [
    {
      name: 'V One',
      data: [30, 40, 35, 50, 49, 60, 70, 91]
    }
  ];

  const polarChartSeries = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const polarChartOptions = {
    chart: {
      type: 'polarArea'
    },
    style: {
      fontSize: '12px',
      colors: ['#eef1f8']
    },
    stroke: {
      colors: ['#eef1f8']
    },
    fill: {
      opacity: 0.8
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  const radialSeries = [44, 55, 67, 83];
  const radialOptions = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w: any) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
  };

  const areaChartSeries = [
    {
      name: 'Area One',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Area Two',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];
  const areaChartOptions = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z'
      ],
      labels: {
        style: {
          colors: '#26A0FC'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#26A0FC'
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };

  return {
    barChartSeries,
    barChartOptions,
    polarChartOptions,
    polarChartSeries,
    radialOptions,
    radialSeries,
    areaChartOptions,
    areaChartSeries
  };
};
