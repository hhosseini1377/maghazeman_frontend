import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import { spacing } from "@material-ui/system";
import {
  Hidden,
  CssBaseline,
  Paper as MuiPaper,
  withWidth,
} from "@material-ui/core";

import { isWidthUp } from "@material-ui/core/withWidth";
import { GlobalStyleProps } from "../types/styles";
import { RouteType } from "../types/routes";
import Sidebar from "./Sidebar/Sidebar";
import Header from "../components/AppBar";
import Footer from "../components/Footer";
import { ReactComponent as RectangleLeft } from "../assets/images/RectangleContentLeft.svg";
import NavBarContent from "./NavBarContent/desktop/NavBarContent";
import WalletBar from "./NavBarContent/Mobile/WalletBar";

const drawerWidth = 382;

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.palette.background.default};
  }

  .MuiCardHeader-action .MuiIconButton-root {
    padding: 4px;
    width: 28px;
    height: 28px;
  }
`;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
  margin: 20px;
  border-radius: 40px;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%),
      0 1px 8px 0 rgb(0 0 0 / 12%);
  }
`;
const MainContentMobile = styled(Paper)`
  flex: 1;
  margin: 20px;
`;
const Rectangle = styled.div`
  width: 40px;
  height: 100%;
  background-color: #0c765f;
  z-index: -1;
  position: absolute;
  left: 0;
  border-radius: 0 40px 40px 0;
`;
type DashboardPropsType = {
  routes: Array<RouteType>;
  width: "md" | "xs" | "sm" | "lg" | "xl";
};

const Dashboard: React.FC<DashboardPropsType> = ({
  children,
  routes,
  width,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <Drawer>
        <Hidden mdUp implementation="js">
          <Sidebar
            routes={routes}
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden smDown implementation="css">
          <Sidebar
            routes={routes}
            PaperProps={{ style: { width: drawerWidth } }}
          />
        </Hidden>
      </Drawer>
      <AppContent>
        <Hidden smDown implementation="css">
          <Rectangle />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Header onDrawerToggle={handleDrawerToggle} />
          <MainContentMobile>
            <WalletBar />
            {children}
          </MainContentMobile>
        </Hidden>
        <Hidden smDown implementation="css">
          <MainContent p={isWidthUp("lg", width) ? 12 : 5}>
            <NavBarContent />
            {children}
          </MainContent>
        </Hidden>
      </AppContent>
      {/* TODO: Add component for select dark and light style */}
      {/* <Settings /> */}
    </Root>
  );
};

export default withWidth()(Dashboard);
