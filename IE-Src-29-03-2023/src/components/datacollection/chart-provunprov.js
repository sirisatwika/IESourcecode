import React from 'react'
import ReactApexChart from "react-apexcharts";

class Provisionedunprovisioned extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [80, 50]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },                
                plotOptions: {
                    bar: {
                        columnWidth: '40%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: ['Provisioned', 'Unprovisioned'],
                    title:{
                        Text:'adf',
                    },
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis:{
                    show: true,
                    title:{
                        Text:'adf',
                    },
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={200}/>
            </div>
        )
    }
}
export default Provisionedunprovisioned;