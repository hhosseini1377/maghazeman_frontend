import { createStyles, Theme } from "@material-ui/core";

/* eslint-disable */
export const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    closeButton: {
      color: theme.palette.grey[500],
    },
  });
