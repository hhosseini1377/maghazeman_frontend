import React, { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import CardBlue from "../component/Card/CardBlue";
import { persianNumbers, persianPrice } from "../../../utils/persian-text";

const useStyle = makeStyles({
  root: {
    flex: 1,
  },
});
interface OwnProps {}

type Props = OwnProps;

const LastInfoSale: FunctionComponent<Props> = (props) => {
  const classes = useStyle();
  return (
    <>
      <TitleComponent title={"آخرین اطلاعات فروش"} />
      <Grid
        container
        justify={"space-between"}
        alignItems="center"
        spacing={5}
        className={classes.root}
      >
        <Grid item lg={3} xs={6}>
          <CardBlue
            title={"سفارش فعال"}
            caption={" منتظر بررسی"}
            counter={persianNumbers("3")}
          />
        </Grid>
        <Grid item lg={3} xs={6}>
          <CardBlue
            title={"فروش در ماه جاری"}
            caption={" تومان"}
            counter={persianPrice("2.800.000")}
          />
        </Grid>
        <Grid item lg={3} xs={6}>
          <CardBlue
            title={"فروش کل"}
            caption={" تومان"}
            counter={persianPrice("12.500.000")}
          />
        </Grid>
        <Grid item lg={3} xs={6}>
          <CardBlue
            title={"تعداد فروش"}
            caption={" مورد"}
            counter={persianNumbers("127")}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default LastInfoSale;
