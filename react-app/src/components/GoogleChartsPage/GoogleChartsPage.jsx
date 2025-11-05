import { Chart } from "react-google-charts";
import { chartCommonData } from "../../modules/chart-common-data.js";

const data = [
    ['Country', 'Unemployment Rate'],
    ...chartCommonData.data.map(item => [item.label, item.value])
];

export default function GoogleChartsPage(props) {
    return (
        <>
            <h2>Google Charts Page</h2>
            <div>
                <h3>Unemployment Rate LineChart(%)</h3>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={{title: 'Unemployment Rate by Country', hAxis: {title: 'Country'}, vAxis: {title: 'Unemployment Rate (%)'}}}
                    legendToggle
                    />
            </div>
            <div>
                <h3>Unemployment Rate BarChart(%)</h3>
                    <Chart
                    chartType="Bar"
                    data={data}
                    width={"100%"}
                    height={"150%"}
                    options={{title: 'Unemployment Rate by Country', hAxis: {title: 'Country'}, vAxis: {title: 'Unemployment Rate (%)'}}}
                    legendToggle
                    />
            </div>
            <div>
                <h3>Unemployment Rate PieChart(%)</h3>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width={"100%"}
                        height={"100%"}
                        options={{title: 'Unemployment Rate by Country', hAxis: {title: 'Country'}, vAxis: {title: 'Unemployment Rate (%)'}}}
                        legendToggle
                        />
            </div>
            <div>
                <h3>Unemployment Rate GeoChart(%)</h3>
                
                <Chart
                    chartEvents={[
                        {
                        eventName: "select",
                        callback: ({ chartWrapper }) => {
                            const chart = chartWrapper.getChart();
                            const selection = chart.getSelection();
                            if (selection.length === 0) return;
                            const region = data[selection[0].row + 1];
                            console.log("Selected : " + region);
                        },
                        },
                    ]}
                    chartType="GeoChart"
                    width={"100%"}
                    height={"100%"}
                    data={data}
                    />
            </div>
        </>
    );
}