import { useEffect, useState } from 'react';
import React from 'react';

import c3 from 'c3'
import 'c3/c3.css'

import { chartCommonData } from "../../modules/chart-common-data.js";

export default function C3PieChartWrapper(props) {
    const chartRef = React.createRef();
    const [chart, setChart] = useState(null);

    useEffect(() => {
        setChart(c3.generate({
            bindto: chartRef.current,
            data: {
                columns: chartCommonData.data.map( ({label, value}) => [label, value] ),
                type: 'pie',
            },
            label: {
                format: (value, ratio, id) => {
                    return `${id}: ${value}%`;
                }
            }
        }));
    }, []);

    return <div>
        <div ref={chartRef}>&nbsp;</div>
    </div>
}