import styled from "styled-components/macro";
import {
  Avatar,
  Button,
  Paper,
  TextField as MuiTextField,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";

export const Alert = styled(MuiAlert)(spacing);
export const BoxBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  margin-top: 10px;
`;
export const CuButton = styled(Button)`
  background-color: ${(props) => props.theme.sidebar.header.hover};
  width: 40%;
  color: white;
  padding: 2px 10px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 40px;
`;
export const CuBtn = styled(Button)`
  background-color: white;
  border: 2px solid #000000;
  width: 40%;
  color: #000;
  padding: 2px 10px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 40px;
`;
export const TextField = styled(MuiTextField)`
  margin-bottom: ${(props) => props.theme.spacing(3)}px;

  div {
    background-color: #ffffff;
    border-radius: 15px;
  }
  ,
  input {
    padding: 10px 5px;
    &::placeholder {
      font-size: 14px;
      font-weight: 400;
      line-height: 27px;
      font-family: IRANSans;
      color: #4d4d4d;
    }
  }
  ,
  label {
    font-size: 20px;
    font-weight: 400;
    font-family: IRANSans;
  }
`;
export const useStyle = makeStyles({
  root: {
    marginTop: 40,
  },
  icon: {
    marginTop: 0,
    marginLeft: "10px",
    "&.MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)": {
      marginTop: 0,
      marginRight: 10,
    },
  },
});
export const Wrapper = styled("div")`
  padding: ${(props) => props.theme.spacing(6)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

export const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacing(5)}px;
`;
export const BoxLink = styled("div")`
  margin-top: 20px;
  & a {
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    background-color: transparent;
  &:hover {
    background-color: transparent;
  },
  }
`;
