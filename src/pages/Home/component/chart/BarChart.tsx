import React from "react";
import { useTheme } from "@material-ui/styles";
import { IFakeDataChart } from "../../../../components/charts/CustomChart.type";
import CustomChart from "../../../../components/charts/CustomChart";
import { CHART_LIST } from "../../../../components/charts/common";

const BarChart = () => {
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
        data: [42, 70, 19, 63, 75, 38, 15],
        backgroundColor: "#1DAD9C",
        borderColor: "#1DAD9C",
        borderRadius: 5,
        borderWidth: 2,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
        borderSkipped: false,
      },
      {
        label: "هفته جاری",
        data: [14, 54, 80, 67, 39, 65, 52],
        backgroundColor: "#FA1F09",
        borderColor: "#FA1F09",
        borderRadius: 20,
        borderWidth: 2,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <CustomChart
      dataChart={dataMAke}
      title={"نمودار فروش بر حسب تعداد"}
      typeChart={CHART_LIST.Bar.name}
    />
  );
};
export default BarChart;
