import React from 'react'
import ReactApexChart from "react-apexcharts";

class OverviewRadial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [76, 67, 61],
            options: {
                chart: {
                    height: 390,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 10,
                            size: '40%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: true,
                            },
                            value: {
                                show: true,
                            }
                        }
                    }
                },
                colors: ['#1565C0', '#0082c8', '#4e54c8'],
                labels: ['US', 'Asia', 'Africa'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '12px',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 600,
                    position: 'left',
                    offsetX: 20,
                    offsetY: -20,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 1
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={235} />
            </div>
        );
    }
}
export default OverviewRadial;