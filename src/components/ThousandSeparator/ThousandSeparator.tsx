import React, { FunctionComponent } from "react";
import NumberFormat from "react-number-format";

interface OwnProps {
  value: number;
}

type Props = OwnProps;

const ThousandSeparator: FunctionComponent<Props> = ({ value, ...props }) => {
  return (
    <>
      <NumberFormat
        value={value}
        displayType={"text"}
        thousandSeparator={true}
      />
    </>
  );
};

export default ThousandSeparator;
