import React from "react";
import c3 from "c3";
import "c3/c3.css";

import { chartCommonData } from "../../modules/chart-common-data.js";

export default class C3LineChart extends React.Component {
    state = {
        chartRef: React.createRef(),
        chart: null,
    }

    componentDidMount() {
        this.setState({chart: c3.generate({
            bindto: this.state.chartRef.current,
            type: 'line',
            data: {
                columns: [
                    ['Unemployment Rate', ...chartCommonData.data.map(item => item.value)]
                ],
                // set type here and enable value labels on points
                type: 'line',
                labels: true
            },
            axis: {
                x: {
                    label: {text: 'Country', position: 'outer-center'},
                    type: 'category',
                    categories: chartCommonData.data.map(item => item.label)
                },
                y: {
                    label: {text: 'Unemployment Rate (%)', position: 'outer-middle'},
                    min: chartCommonData.minValue - 1,
                    max: chartCommonData.maxValue + 1,
                    type: 'linear'
                }
            }
        })});
    }


    render() {
        return <div>
            <div ref={this.state.chartRef}>&nbsp;</div>
        </div>
    }
}