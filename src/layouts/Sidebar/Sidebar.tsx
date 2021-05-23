import React, { useState } from "react";
import styled from "styled-components/macro";
import { rgba, darken } from "polished";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import "../../vendor/perfect-scrollbar.css";
import {
  Badge,
  Chip,
  Grid,
  Avatar,
  Collapse,
  Drawer as MuiDrawer,
  List as MuiList,
  ListItem,
  ListItemText,
  Typography,
  Hidden,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import { RouteType, RouteChildType } from "../../types/routes";
import { sidebarRoutes as routes } from "../../routes";
import {
  SidebarFooterBadge,
  SidebarFooterSubText,
  SidebarFooterText,
  SidebarFooter,
  SidebarSection,
  LinkBadge,
  CategoryBadge,
  LinkText,
  Link,
  CategoryIconMore,
  Category,
  Items,
  List,
  Scrollbar,
  Drawer,
  CategoryIconLess,
  CategoryText,
  HeaderSidebar,
  HeaderBoxTitle,
  HeaderTitle,
  HeaderLeft,
  TitleFooter,
  Brand,
} from "./Saidebar.Style";
import { ReactComponent as SidebarUserImage } from "../components/SidebarLogo/LogoSidebar.svg";
import HoverRating from "../../components/Rating/Rating";
import { ReactComponent as Logo } from "../../assets/images/LogoSidBar.svg";
import { persianNumbers } from "../../utils/persian-text";
import "react-perfect-scrollbar/dist/css/styles.css";

type SidebarCategoryPropsType = {
  name: string;
  icon: JSX.Element;
  classes?: string;
  isOpen?: boolean;
  isCollapsable: boolean;
  badge?: string | number;
  activeClassName?: string;
  button: true;
  onClick?: () => void;
  to?: string;
  component?: typeof NavLink;
  exact?: boolean;
};

const SidebarCategory: React.FC<SidebarCategoryPropsType> = ({
  name,
  icon,
  classes,
  isOpen,
  isCollapsable,
  badge,
  ...rest
}) => {
  return (
    <Category {...rest}>
      {icon}
      <CategoryText>{name}</CategoryText>
      {/* eslint-disable */}
      {isCollapsable ? (
        isOpen ? (
          <CategoryIconMore />
        ) : (
          <CategoryIconLess />
        )
      ) : null}
      {badge ? <CategoryBadge label={badge} /> : ""}
    </Category>
  );
};

type SidebarLinkPropsType = {
  name: string;
  to: string;
  badge?: string | number;
  onClose?: () => void;
  icon?: JSX.Element;
};

const SidebarLink: React.FC<SidebarLinkPropsType> = ({
  name,
  to,
  badge,
  onClose,
  icon,
}) => {
  return (
    <Link
      button
      dense
      component={NavLink}
      exact
      to={to}
      activeClassName="active"
      onClick={onClose}
    >
      <LinkText>{name}</LinkText>
      {badge ? <LinkBadge label={badge} /> : ""}
    </Link>
  );
};

type SidebarPropsType = {
  classes?: string;
  staticContext: string;
  location: {
    pathname: string;
  };
  routes: Array<RouteType>;
  PaperProps?: {
    style: {
      width: number;
    };
  };
  anchor?: string;
  variant?: "permanent" | "persistent" | "temporary";
  open?: boolean;
  onClose?: () => void;
};

const Sidebar: React.FC<RouteComponentProps & SidebarPropsType> = ({
  classes,
  staticContext,
  location,
  anchor,
  onClose,
  ...rest
}) => {
  type tplotOptions = {
    [key: number]: boolean;
  };
  const initOpenRoutes = (): tplotOptions => {
    /* Open collapse element that matches current url */
    const pathName = location.pathname;

    /* eslint-disable */
    let _routes = {};

    routes.forEach((route: RouteType, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === "/";

      /* eslint-disable */
      _routes = Object.assign({}, _routes, {
        [index]: isActive || isOpen || isHome,
      });
    });

    return _routes;
  };

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes());

  const toggle = (index: number) => {
    // Collapse all elements
    Object.keys(openRoutes).forEach(
      (item) =>
        openRoutes[index] ||
        setOpenRoutes((openRoutes) =>
          /* eslint-disable */
          Object.assign({}, openRoutes, { [item]: false })
        )
    );

    // Toggle selected element
    setOpenRoutes((openRoutes) =>
      /* eslint-disable */
      Object.assign({}, openRoutes, { [index]: !openRoutes[index] })
    );
  };

  return (
    <Drawer variant="permanent" onClose={onClose} {...rest}>
      <Hidden smDown>
        <Brand component={NavLink} to="/" button>
          <Logo />
        </Brand>
      </Hidden>
      <Scrollbar>
        <HeaderSidebar>
          <HeaderBoxTitle>
            <SidebarUserImage />
            <HeaderLeft>
              <HeaderTitle>
                <Typography variant={"subtitle2"}>
                  فروشگاه کاشی و سرامیک
                </Typography>
                <Typography variant={"subtitle2"}>محمد علی پور</Typography>
              </HeaderTitle>
              <Typography variant={"caption"}>
                www.maghazeman.com/kashi
              </Typography>
              <HoverRating readOnly />
            </HeaderLeft>
          </HeaderBoxTitle>
          <TitleFooter>
            <div>
              <Typography variant={"body1"}>امتیاز فروشگاه</Typography>
              <Typography variant={"body1"}>
                {persianNumbers("100")} امتیاز
              </Typography>
            </div>
          </TitleFooter>
        </HeaderSidebar>
        <List disablePadding>
          <Items>
            {routes.map((category: RouteType, index) => (
              <React.Fragment key={index}>
                {category.header ? (
                  <SidebarSection variant="h6">
                    {category.header}
                  </SidebarSection>
                ) : null}
                {/* eslint-disable */}
                {category.children && category.icon ? (
                  <React.Fragment key={index}>
                    <SidebarCategory
                      isOpen={!openRoutes[index]}
                      isCollapsable={true}
                      name={category.id}
                      icon={category.icon}
                      button={true}
                      onClick={() => toggle(index)}
                    />

                    <Collapse
                      in={openRoutes[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      {category.children.map(
                        (route: RouteChildType, index: number) => (
                          <SidebarLink
                            {...onClose}
                            key={index}
                            name={route.name}
                            to={route.path}
                            icon={route.icon}
                            badge={route.badge}
                          />
                        )
                      )}
                    </Collapse>
                  </React.Fragment>
                ) : category.icon ? (
                  <SidebarCategory
                    isCollapsable={false}
                    name={category.id}
                    to={category.path}
                    activeClassName="active"
                    component={NavLink}
                    icon={category.icon}
                    exact
                    button
                    badge={category.badge}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </Items>
        </List>
      </Scrollbar>
    </Drawer>
  );
};

export default withRouter(Sidebar);
