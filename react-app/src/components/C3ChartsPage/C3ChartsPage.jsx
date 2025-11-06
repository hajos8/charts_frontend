import { chartCommonData } from "../../modules/chart-common-data"
import C3LineChart from "../C3LineChart/C3LineChart.jsx";
import C3PieChart from "../C3PieChart/C3PieChart.jsx";
import C3BarChart from "../C3BarChart/C3BarChart.jsx";

export default function C3ChartsPage(props) {
    return (
        <>
            <h2>C3.js Charts Page</h2>
            <div>
                <h3>C3 Line chart</h3>
                <C3LineChart/>
            </div>
            <div>
                <h3>C3 Pie chart</h3>
                <C3PieChart/>
            </div>
            <div>
                <h3>C3 Bar chart</h3>
                <C3BarChart/>
            </div>
        </>
    );
}