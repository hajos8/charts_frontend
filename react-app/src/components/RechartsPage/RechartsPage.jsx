import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, Rectangle} from 'recharts';
import { PieChart, Pie, Label } from 'recharts';

import { chartCommonData, COLORS } from '../../modules/chart-common-data.js';

const data = chartCommonData.data.map((item, idx) => ({
    name: item.label, 
    value: item.value,
    fill: COLORS[idx % COLORS.length],
}));

const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

export default function RechartsPage(props) {
    console.log(props.mathPlotData)
    return(
        <>
            <h2>React Charts Page</h2>
            <div>
                <h3>Unemployment Rate (%)</h3>
                <LineChart
                    style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="6" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </div>
        
            <div>
                <h3>Unemployment Rate Bar Chart</h3>
                <div>
                    <BarChart
                        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={data}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis width="5" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    </BarChart>
                </div>
            </div>

            <div>
                <h3>Unemployment Rate Pie Chart</h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', maxHeight: '70vh' }}>
                    <PieChart responsive style={{ height: 'calc(100% - 20px)', maxHeight: '20vh', width: '33%', aspectRatio: 1 }}>
                        <MyPie />
                    </PieChart>
                </div>
            </div>
        
            <div>
                <h3>Function Plot</h3>
                <LineChart
                    style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={props.MathPlotData}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis domain={[0, 5]}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                </LineChart>
            </div>
        </>
    );
}