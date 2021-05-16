import styled from "styled-components";
import {
  Paper,
  TextField as MuiTextField,
  Button as MuiButton,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

export const Alert = styled(MuiAlert)(spacing);

export const TextField = styled(MuiTextField)<{ my?: number }>(spacing);

export const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

export const Button = styled(MuiButton)(spacing);

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
