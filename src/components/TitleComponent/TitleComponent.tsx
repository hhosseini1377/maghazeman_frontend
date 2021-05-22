import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface OwnProps {
  title: string;
}
const useStyle = makeStyles({
  root: {
    padding: "0 10px",
    margin: " 20px 0 ",
    fontSize: 20,
  },
});
type Props = OwnProps;

const TitleComponent: FunctionComponent<Props> = ({ title }) => {
  const classes = useStyle();
  return (
    <>
      <Typography variant={"h4"} className={classes.root}>
        {title}
      </Typography>
    </>
  );
};

export default TitleComponent;
