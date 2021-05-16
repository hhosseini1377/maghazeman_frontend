import React, { FunctionComponent } from "react";
import LastInfoSale from "./section/LastInfoSale";
import SalesActivity from "./section/SalesActivity";

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <LastInfoSale />
      <SalesActivity />
    </div>
  );
};

export default Home;
