import React, { FunctionComponent } from "react";
import LastInfoSale from "./section/LastInfoSale";
import SalesActivity from "./section/SalesActivity";
import Alert from "./component/Alert/Alert";

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <Alert
        title={`ورود شما را به فروشگاه اینترنتی  "مغازه من"  خوش آمد می گوییم. با آرزوی موفقیت برای شما`}
      />
      <LastInfoSale />
      <SalesActivity />
    </div>
  );
};

export default Home;
