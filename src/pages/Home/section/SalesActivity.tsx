import Grid from "@material-ui/core/Grid";
import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/styles";
import LineChart from "../component/chart/LineChart";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import BarChart from "../component/chart/BarChart";

const useStyle = makeStyles({
  root: {
    margin: " 20px 0 ",
  },
});

interface OwnProps {}

type Props = OwnProps;

const SalesActivity: FunctionComponent<Props> = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <TitleComponent title={"میزان فروش و فعالیت"} />
      <Grid container spacing={5}>
        <Grid item lg={5} xs={12}>
          <LineChart />
        </Grid>
        <Grid item lg={5} xs={12}>
          <BarChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default SalesActivity;
