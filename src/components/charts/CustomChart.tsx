import React from "react";
import { withTheme } from "styled-components/macro";
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "chart.js";
import { Card, Spacer, ChartWrapper, DivSort } from "./CustomChart.Style.";
import { ICustomChart } from "./CustomChart.type";
import { CHART_LIST } from "./common";

const useStyle = makeStyles({
  root: {
    padding: 5,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
  },
  title: {
    color: "#1A8191",
    fontWeight: 700,
  },
});

function CustomChart({
  dataChart,
  title,
  subtitle,
  theme,
  typeChart,
}: ICustomChart) {
  const classes = useStyle();
  const data = {
    labels: dataChart?.labels,
    datasets: dataChart?.data,
  };
  Chart.defaults.global.defaultFontFamily = "IRANSans";
  const ComponentChart = CHART_LIST[typeChart].component;

  return (
    <Card mb={1} className={classes.root}>
      <CardContent>
        <DivSort>
          <Typography variant="h4" gutterBottom className={classes.title}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" gutterBottom>
              ( {subtitle} )
            </Typography>
          )}
        </DivSort>
        <Spacer mb={2} />
        <ChartWrapper>
          {
            <ComponentChart
              data={data}
              options={CHART_LIST[typeChart].options}
              width={400}
            />
          }
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}

export default withTheme(CustomChart);
