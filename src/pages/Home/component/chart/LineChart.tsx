import React from "react";
import { useTheme } from "@material-ui/styles";
import { IFakeDataChart } from "../../../../components/charts/CustomChart.type";
import CustomChart from "../../../../components/charts/CustomChart";
import { CHART_LIST } from "../../../../components/charts/common";

const LineChart = () => {
  const theme: any = useTheme();
  const dataMAke: IFakeDataChart = {
    labels: [
      "شنبه",
      "یک شنبه",
      "دوشنبه",
      "سه شنبه",
      "چهارشنبه",
      "پنج شنبه",
      "جمعه",
    ],
    data: [
      {
        label: "هفته گذشته",
        data: [5400000, 2400000, 1000000, 5000000, 550000, 1500000, 800000],
        fill: false,
        borderColor: "#1DAD9C",
        tension: 0.1,
        borderWidth: 2,
        pointBackgroundColor: "#1DAD9C",
        pointBorderWidth: 10,
      },
      {
        label: "هفته جاری",
        data: [1400000, 5400000, 8000000, 7000000, 950000, 6500000, 500000],
        fill: false,
        borderColor: "#FA1F09",
        tension: 0.1,
        borderWidth: 2,
        pointBackgroundColor: "#FA1F09",
        pointBorderWidth: 10,
      },
    ],
  };

  return (
    <CustomChart
      dataChart={dataMAke}
      title={"نمودارفروش بر حسب قیمت"}
      typeChart={CHART_LIST.Line.name}
    />
  );
};
export default LineChart;
