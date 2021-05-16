import { Tab } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { createStyles, withStyles } from "@material-ui/styles";
import React from "react";

interface StyledTabProps {
  label: string;
}
const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 4,
      textTransform: "none",
      minWidth: 105,
      height: 24,
      color: "black",
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(3),
      padding: "6px 16px",
      /*    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","), */
      "&:hover": {
        /* color: "#40a9ff", */
        opacity: 1,
      },
      "&$selected": {
        color: "#fff",
        backgroundColor: "#1565C0",
        fontWeight: theme.typography.fontWeightMedium,
        boxShadow: "none",
        border: "none",
      },
      "&:focus": {
        color: "#40a9ff",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
export default AntTab;
