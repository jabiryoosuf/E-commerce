import React from "react";
import ReactApexChart from "react-apexcharts";
import { TotalRevenueOptions, TotalRevenueSeries } from "../../config/Cartconfig";
import "../../styles/chart.css"
const Chart = () => {
  return (
    <main style={{maxWidth:"1263px",border:"none"}}>
      
      <div
        style={{
          padding: "42px",
          marginTop: "45px",
          marginLeft:"25px",
          flex: "1px",
          backgroundColor: "#144272",
          id: "chart",
          display: "flex",
          flexDirection: "column",
          borderRadius: "15px",
        }}
      >
         <ReactApexChart 
      series={TotalRevenueSeries}
        type="bar"
        width={1150}
        height={310}
        options={TotalRevenueOptions}
      />
      </div>
    </main>
  );
};

export default Chart;
