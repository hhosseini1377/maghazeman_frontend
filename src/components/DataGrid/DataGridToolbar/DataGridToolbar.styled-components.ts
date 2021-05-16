import styled from "styled-components";
import { Button } from "@material-ui/core";

export const CustomizedButton = styled(Button)<{ lborder?: boolean }>`
  border-left: ${(props) => props.lborder && "1px solid #E0E0E0"};
`;

export const ButtonsWrapper = styled.div`
  padding: "0px 10px";
`;

export const DataGridToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;
