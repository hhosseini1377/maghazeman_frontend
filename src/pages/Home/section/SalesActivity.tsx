import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Grid } from "@material-ui/core";
import LineChart from "../component/chart/LineChart";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import BarChart from "../component/chart/BarChart";
import Chart from "../../../assets/images/box.png";

const useStyle = makeStyles({
  root: {
    margin: " 20px 0 ",
  },
  box: {
    margin: "10px 0",
  },
  Img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

interface OwnProps {}

type Props = OwnProps;

const SalesActivity: FunctionComponent<Props> = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item lg={10} xs={12}>
          <TitleComponent title={"میزان فروش و فعالیت"} />
          <Grid container spacing={5}>
            <Grid item lg={6} xs={12}>
              <LineChart />
            </Grid>
            <Grid item lg={6} xs={12}>
              <BarChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={2} xs={12} justify={"center"} alignItems={"center"}>
          <TitleComponent title={"وضعیت اشتراک شما"} />
          <div className={classes.Img}>
            <img style={{ width: 165, height: 228 }} src={Chart} alt="item" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SalesActivity;
