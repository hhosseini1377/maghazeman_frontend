import Tabs from "@material-ui/core/Tabs";
import { withStyles } from "@material-ui/styles";

const AntTabs = withStyles({
  root: {
    /* borderBottom: "1px solid #e8e8e8", */
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "none",
    },
  },
})(Tabs);
export default AntTabs;
