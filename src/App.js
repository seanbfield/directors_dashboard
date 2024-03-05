import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import ResourcesByDir from "./components/PieCharts/ResourcesByDir/ResourcesByDir";
import ProjectList from "./components/ProjectList/ProjectList";
import { Chart } from "react-google-charts";



const App = () => {
  const [portfolioName, setPortfolioName] = useState([]);

  useEffect(() => {
    axios.get("/api/now/table/pm_project").then((res) => {
      setPortfolioName(res.data.result);
    });
  }, []);

  console.log("portfolio", portfolioName);

  const data = [
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];
  
   const options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };




  return (
    <>
      <Header />
      <div className="container">
      <Chart
      chartType="ComboChart"
      // width="70%"
      height="400px"
      data={data}
      style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}
      options={options}
    />
        <ProjectList />
      </div>
    </>
  );
};

export default App;
