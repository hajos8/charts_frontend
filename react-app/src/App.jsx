/* TODO - npm install react-router-dom recharts react-google-charts c3 d3 */

/* TODO - read about React Charts (ReCharts): https://recharts.github.io/ */
/* TODO - read about React Google Charts: https://www.react-google-charts.com/ */
/* TODO - read about C3 (D3): https://c3js.org/ */


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

import DataPage from "./components/DataPage/DataPage.jsx";
import RechartsPage from "./components/RechartsPage/RechartsPage.jsx";
import GoogleChartsPage from "./components/GoogleChartsPage/GoogleChartsPage.jsx";
import C3ChartsPage from "./components/C3ChartsPage/C3ChartsPage.jsx";
import C3LineChart from "./components/C3LineChart/C3LineChart";


// import chartCommonData, COLORS
// import Chart from React-Google-Charts


// Main top menu bar
function MainNav() {
  const location = useLocation(); // TODO - read about useLocation() react hook on the internet
  const isCharts = location.pathname.startsWith("/charts");
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div className="brand">React Data/Charts Site</div>
        <div className="nav-links">
          <Link to="/data" className={location.pathname === "/data" ? "active" : ""}>Data</Link>
          <Link to="/charts/recharts" className={isCharts ? "active" : ""}>Charts</Link>
        </div>
      </div>
    </nav>
  );
}

// Second menu bar under charts only
function ChartsSubNav() {
  const location = useLocation(); 
  if (!location.pathname.startsWith("/charts")) return null;

  return (
    <nav className="sub-nav">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/charts/recharts" className={location.pathname === "/charts/recharts" ? "active" : ""}>Recharts</Link>
          <Link to="/charts/google" className={location.pathname === "/charts/google" ? "active" : ""}>Google</Link>
          <Link to="/charts/c3" className={location.pathname === "/charts/c3" ? "active" : ""}>C3</Link>
        </div>
      </div>
    </nav>
  );
}

// Scrollable content container
function ContentArea({ children }) {
  return (
    <main className="content-area">
      {children}
    </main>
  );
}

const limes = 2;
const f = x => (Math.sin(x) + 2 * x) / x; 
// function should return ( sin(x) + 2x ) / x number by real x, angle measured in radian

// Placeholder pages
// TODO - outsource component

export default function App() {
  let _mathPlotData = []
  /* TODO - prepare array for plotting function properly */

  for(let x = -5; x <= 5; x += 0.5) {
    let y = f(x);
    if(!isFinite(y)){
      y = limes + 1
    }
    _mathPlotData.push( { x: x, y: y } )
  }

  const [mathPlotData, setMathPlotData] = useState(_mathPlotData)

  return (
    <Router>
      <MainNav />
      <ChartsSubNav />
      <ContentArea>
        <Routes>
          <Route path="/data" element={<DataPage  MathPlotData={mathPlotData} />} />
          <Route path="/charts/recharts" element={<RechartsPage MathPlotData={mathPlotData} />} />
          <Route path="/charts/google" element={<GoogleChartsPage MathPlotData={mathPlotData} />} />
          <Route path="/charts/c3" element={<C3ChartsPage MathPlotData={mathPlotData} />} />
          <Route path="*" element={<DataPage MathPlotData={mathPlotData} />} />
        </Routes>
      </ContentArea>
    </Router>
  );
}
