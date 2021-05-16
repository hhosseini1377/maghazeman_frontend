import styled from "styled-components/macro";
import { Card as MuiCard } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div``;
const DivSort = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    padding: 5px;
  }
`;

export { Card, Spacer, ChartWrapper, DivSort };
