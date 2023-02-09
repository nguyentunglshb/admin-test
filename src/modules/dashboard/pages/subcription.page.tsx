import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Typography } from "antd";
import dayjs from "dayjs";
import { ChartData, Chart as ChartJS } from "chart.js";
import "chart.js/auto";

const { Text } = Typography;

const labels = Array(7)
  .fill("")
  .map((_, index) => {
    return dayjs(
      new Date().setDate(new Date().getDate() - (index + 1))
    ).toISOString();
  })
  .reverse();

const mockData = [33, 53, 85, 41, 44, 65, 99];

const data = {
  labels,
  datasets: [
    {
      label: "Subcription",
      data: mockData,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
} as ChartData<"line">;

export const SubcriptionPage = () => {
  const subcriptionChartRef = useRef<ChartJS>(null);

  return (
    <div>
      <Text>Subcription Page</Text>
      <Line ref={subcriptionChartRef} data={data} />
    </div>
  );
};
