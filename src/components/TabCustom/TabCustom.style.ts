import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    /* backgroundColor: theme.palette.background.paper, */
  },
  Tabs: {
    backgroundColor: theme.palette.background.default,
    /* margin: "0 20px", */
  },
  tab: {
    backgroundColor: "#E0E0E0",
  },
}));
