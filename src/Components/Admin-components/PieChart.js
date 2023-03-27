import {  Box, Stack,Typography } from '@mui/material'
import ReactApexChart from "react-apexcharts";
import React from 'react'

const PieChart = ({title, value, series, colors}) => {
  return (
    <Box
    id='chart'
    flex={1}
    display='flex'
    bgcolor='#144272'
    flexDirection='row'
    justifyContent='space-between'
    alignItems='center'
    pl={3.5}
    py={2}
    ml={3}
    mr={3}
    gap={2}
    borderRadius='15px'
    minHeight='110px'
    width='fit-content'>
<Stack>
<Typography fontSize={14} color="white">{title}</Typography>
      <Typography fontSize={24}
      color='white' fontWeight={700} mt={1}>{value}</Typography>
</Stack>
<ReactApexChart
    options={{
      chart:{type:'donut'},
      colors,
      legend:{show:false},
      dataLabels:{enabled:false}
    }}
    series = {series}
    type='donut'
    width='120px'
    />
    </Box>
  )
}

export default PieChart