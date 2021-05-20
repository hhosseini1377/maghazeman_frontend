import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    alert: {
      padding: 20,
      margin: "20px  0",
      backgroundColor: "#fff",
      color: "#4D4D4D",
      boxShadow: " 0px 0px 8px rgba(0, 0, 0, 0.25)",
    },
  })
);

export default function SimpleAlerts({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.alert}>{title}</div>
    </div>
  );
}
