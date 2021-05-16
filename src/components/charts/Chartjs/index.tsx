import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";

import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

import LineChart from "./LineChart/LineChart";
import BarChart from "./BarChart/BarChart";
import DoughnutChart from "./DoughnutChart/DoughnutChart";
import PieChart from "./PieChart/PieChart";
import RadarChart from "./RadarChart/RadarChart";
import PolarChart from "./PloarChart/PolarChart";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function ChartSelect() {
  return (
    <React.Fragment>
      <Helmet title="Charts" />
      <Typography variant="h3" gutterBottom display="inline">
        Charts
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Typography>Charts</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <DoughnutChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <RadarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PolarChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ChartSelect;
