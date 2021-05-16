import React, { FunctionComponent } from "react";
import {
  Caption,
  Counter,
  CardBody,
  CardTitle,
  CardBL,
} from "./CardBlue.Style";

interface OwnProps {
  title: string;
  counter: number | string;
  caption: string;
}

type Props = OwnProps;

const CardBlue: FunctionComponent<Props> = ({ title, counter, caption }) => {
  return (
    <>
      <CardBL>
        <CardTitle>{title}</CardTitle>
        <CardBody>
          <Counter>{counter} </Counter>
          <Caption>{caption}</Caption>
        </CardBody>
      </CardBL>
    </>
  );
};

export default CardBlue;
