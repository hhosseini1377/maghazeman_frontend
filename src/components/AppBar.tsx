import React, { useState } from "react";
import styled, { withTheme } from "styled-components/macro";
import { darken } from "polished";
import {
  Grid,
  Hidden,
  InputBase,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
  Avatar,
  Typography,
  Badge,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import NotificationsDropdown from "./NotificationsDropdown";
import UserDropdown from "./UserDropdown";
import { ReactComponent as Logo } from "../assets/images/logos/logoNavbar.svg";
import UserIListLink from "../layouts/NavBarContent/Mobile/UserIListLink";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Search = styled.div`
  cursor: pointer;
  border-radius: 2px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid  ${(props) =>
    darken(0.05, props.theme.header.background)};
};
  /*background-color: ${(props) => props.theme.header.background};*/
  &:hover {
    /*background-color: ${(props) =>
      darken(0.05, props.theme.header.background)};*/
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    display: block;
  }
`;

const SearchIconWrapper = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  right: -30px;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const HeaderProfile = styled.div`
  /*  background-color: ${(props) =>
    props.theme.sidebar.footer.background} !important;*/
  padding: ${(props) => props.theme.spacing(2.75)}px
    ${(props) => props.theme.spacing(4)}px;
`;

const HeaderText = styled(Typography)`
  /*color: ${(props) => props.theme.sidebar.footer.color};*/
`;

const HeaderSubText = styled(Typography)`
  /*color: ${(props) => props.theme.sidebar.footer.color};*/
  font-size: 0.7rem;
  display: block;
  padding: 1px;
`;
const HeaderSearch = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(1)}px;
  span {
    background-color: ${(props) =>
      props.theme.sidebar.footer.online.background};
    border: 1.5px solid ${(props) => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;
const Input = styled(InputBase)`
  color: inherit;
  width: 100%;

  > input {
    color: ${(props) => props.theme.header.search.color};
    padding-top: ${(props) => props.theme.spacing(2.5)}px;
    padding-right: ${(props) => props.theme.spacing(2.5)}px;
    padding-bottom: ${(props) => props.theme.spacing(2.5)}px;
    padding-left: ${(props) => props.theme.spacing(12)}px;
    width: 160px;
  }
`;

type AppBarProps = {
  theme: {};
  onDrawerToggle: React.MouseEventHandler<HTMLElement>;
};

const AppBarComponent: React.FC<AppBarProps> = ({ onDrawerToggle }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container justify={"space-between"} alignItems="center">
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Logo />
            </Grid>
            <Grid item>
              <HeaderSearch>
                <UserIListLink />
              </HeaderSearch>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(AppBarComponent);
