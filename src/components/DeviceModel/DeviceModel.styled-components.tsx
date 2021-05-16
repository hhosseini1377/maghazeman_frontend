import styled from "styled-components";
import { Chip } from "@material-ui/core";

export const CustomChip = styled(Chip)`
  border-radius: ${(props) => props.theme.spacing(4)}px;
  margin-right: ${(props) => props.theme.spacing(6)}px;
`;
