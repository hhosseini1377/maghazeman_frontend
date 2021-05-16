import styled from "styled-components";
import { Typography as MuiTypography, makeStyles } from "@material-ui/core";
import { spacing } from "@material-ui/system";

export const useStyles = makeStyles({
  root: {
    marginLeft: "auto",
  },
});

export const Typography = styled(MuiTypography)(spacing);

export const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;
`;
