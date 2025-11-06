import React from "react";

import c3 from 'c3'
import 'c3/c3.css'

import { chartCommonData, COLORS } from "../../modules/chart-common-data.js";

export default class C3BarChart extends React.Component {
    state = {
        chartRef: React.createRef(),
        chart: null,
    }

    componentDidMount() {
        this.setState({chart: c3.generate({
            bindto: this.state.chartRef.current,
            data: {
                labels: true,
                columns: [
                    [ chartCommonData.title,
                        ...chartCommonData.data.map( ({label, value}) => value )
                    ],
                ],
                type: 'bar',
                color: (defaultColor, d) => {
                    if (d && d.index != null) {
                        return COLORS[d.index % COLORS.length];
                    }
                    return defaultColor;
                },
            },
            axis: {
                x: {
                    type: 'category',
                    categories: chartCommonData.data.map(({ label }) => label),
                }
            }
        })})
    }

    render() {
        return <div>
            <div ref={this.state.chartRef}>&nbsp;</div>
        </div>
    }
}