import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Typography } from "antd";
import { ChartData, Chart as ChartJS } from "chart.js";
import "chart.js/auto";

const { Text } = Typography;

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const mockData = [33, 53, 85, 41, 44, 65, 99, 12, 23, 55, 56, 87];

const data = {
  labels,
  datasets: [
    {
      label: "Renevue",
      data: mockData,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
} as ChartData<"bar">;

export const RenevuePage = () => {
  const renevueChartRef = useRef<ChartJS>(null);

  return (
    <div>
      <Text>Renevue Page</Text>
      <Bar ref={renevueChartRef} data={data} />
    </div>
  );
};
