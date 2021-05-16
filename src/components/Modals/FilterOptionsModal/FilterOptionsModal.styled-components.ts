import {
  Theme,
  withStyles,
  Divider as MuiDivider,
  Grid,
} from "@material-ui/core";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { spacing } from "@material-ui/system";
import styled from "styled-components";

export const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(10),
  },
}))(MuiDialogContent);

export const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),

    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

export const Divider = styled(MuiDivider)(spacing);

export const GridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
`;
