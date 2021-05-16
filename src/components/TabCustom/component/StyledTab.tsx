import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import React from "react";

interface StyledTabProps {
  label: string;
}
const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#E0E0E0",
      textTransform: "none",
      color: "#fff",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      "&:focus": {
        opacity: 1,
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
export default StyledTab;
