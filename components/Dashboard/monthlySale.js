import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Ui/Card";
import { useTranslation } from "react-i18next";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesAreaChart = ({ yearlySalesData }) => {
  const [data, setData] = useState([]);
  const {
    settingsData: {
      currency: { symbol },
      color: { primary },
    },
  } = useSelector((state) => state.settings);
  const [chartData, setChartData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (yearlySalesData && yearlySalesData.length > 0) {
      const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      let ORData = [];
      let __data = yearlySalesData[0]?.monthlySales || [];
      month.map((mn) => {
        const bb = __data.find((x) => x.month === mn);
        if (bb) {
          ORData.push({ ...bb, total: Math.round(bb.total) });
        } else {
          ORData.push({
            month: mn,
            total: 0,
          });
        }
      });
      setData(ORData);
    }
  }, [yearlySalesData]);

  useEffect(() => {
    setChartData({
      options: {
        chart: {
          id: "area-chart",
        },
        xaxis: {
          categories: [
            t("Jan"),
            t("Feb"),
            t("Mar"),
            t("Apr"),
            t("May"),
            t("Jun"),
            t("Jul"),
            t("Aug"),
            t("Sep"),
            t("Oct"),
            t("Nov"),
            t("Dec"),
          ],
        },
        dataLabels: {
          formatter: function (value) {
            return symbol + value.toFixed(2);
          },
        },
        colors: [primary],
      },
      series: [
        {
          name: t("Sales"),
          data: data.map((entry) => entry.total),
        },
      ],
    });
  }, [data, t, symbol, primary]);

  return (
    <Card
      title={`${t("Sales summary of the year")} ${new Date().getFullYear()}`}
    >
      {chartData && (
        <ApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      )}
    </Card>
  );
};

export default SalesAreaChart;
