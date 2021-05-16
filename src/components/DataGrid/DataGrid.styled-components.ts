import styled from "styled-components";
import {
  Card as MuiCard,
  Paper as MuiPaper,
  makeStyles,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

export const Card = styled(MuiCard)(spacing);

export const Paper = styled(MuiPaper)(spacing);

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",

    "& .MuiPaper-root.MuiPaper-elevation2.MuiPaper-rounded": {
      "& > table.MuiTable-root": {
        maxWidth: "max-content",
        margin: "0 auto",
        padding: "17px 0 24px 0",
        direction: "rtl",
      },
    },
  },
});
