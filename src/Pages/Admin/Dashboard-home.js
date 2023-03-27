import { Box } from "@mui/material";
import React from "react";
import Chart from "../../Components/Admin-components/Chart";
import Header from "../../Components/Admin-components/Header";
import PieChart from "../../Components/Admin-components/PieChart";
import SidebarNew from "../../Components/Admin-components/sidebar";

const DashboardHome = () => {
  return (
    <div>
      <div style={{display:"flex",background: "#0A2647"}}>
        <SidebarNew />
        <div style={{width:"100%"}}>
        <Header/>
        <h1 style={{  marginLeft: "3rem",color:"white" }}>Dashboard</h1>
        <Box mt='20px'display='flex' flexWrap='wrap' gap={4}>
        <PieChart
        title = 'Properties for Sale'
        value={684}
        series={[75,25]}
        colors={['#275be8','#c4e8ef']}
        />
        <PieChart
        title = 'Properties for Rend'
        value={550}
        series={[60,40]}
        colors={['#275be8','#c4e8ef']}
        />
        <PieChart
        title = 'Total customers'
        value={5684}
        series={[75,25]}
        colors={['#275be8','#c4e8ef']}
        />
        <PieChart
        title = 'Properties for Cities'
        value={555}
        series={[75,25]}
        colors={['#275be8','#c4e8ef']}
        />

      </Box>
        <Chart />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
