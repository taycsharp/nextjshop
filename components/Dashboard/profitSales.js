import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import Card from "../Ui/Card";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProfitSales({ data }) {
  const { t } = useTranslation();

  const salesData = data.map((entry) => entry.sales);
  const profitData = data.map((entry) => entry.profit);

  const chData = {
    series: [
      { name: t("Sales"), data: salesData },
      { name: t("Profit"), data: profitData },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
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
      yaxis: {
        labels: {
          formatter: function (value) {
            return Math.round(value);
          },
        },
      },
    },
  };

  return (
    <Card title={`${t("Sales and Profit summary of the year")} ${new Date().getFullYear()}`}>
      <Chart
        options={chData.options}
        series={chData.series}
        type="bar"
        width={"100%"}
        height={320}
      />
    </Card>
  );
}
