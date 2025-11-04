import fgraphStatic from "../../assets/fgraphStatic.png";
import {chartCommonData} from "../../modules/chart-common-data.js";

export default function DataPage() {
    return (
        <>
            <h2>Data</h2>
            <p><strong>Title:</strong> {chartCommonData.title}</p>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Unemployment rate [%]</th>
                    </tr>
                </thead>
                <tbody>
                    {chartCommonData.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.label}</td>
                            <td>{item.value}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                <img src={fgraphStatic} alt="fgraphStatic.png" />
            </p>
        </>
        );
}