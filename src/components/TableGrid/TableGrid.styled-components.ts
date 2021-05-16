import styled from "styled-components";
import { Card as MuiCard, Paper as MuiPaper } from "@material-ui/core";

import { spacing } from "@material-ui/system";

export const Card = styled(MuiCard)(spacing);

export const Paper = styled(MuiPaper)(spacing);

export const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;
