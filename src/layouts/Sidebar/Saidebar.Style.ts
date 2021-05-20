import styled from "styled-components/macro";
import {
  Badge,
  Chip,
  Drawer as MuiDrawer,
  List as MuiList,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
import { NavLink } from "react-router-dom";
import { darken, rgba } from "polished";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const Drawer = styled(MuiDrawer)`
  border-right: 0;
  overflow-x: hidden;

  > div {
    border-right: 0;
  }
`;

const Scrollbar = styled(PerfectScrollbar)`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const List = styled(MuiList)`
  background-color: ${(props) => props.theme.sidebar.background};
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)}px;
  padding-bottom: ${(props) => props.theme.spacing(2.5)}px;
`;

const Brand = styled(ListItem)<{
  button?: boolean;
  component?: React.ReactNode;
  to?: string;
}>`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: ${(props) => props.theme.sidebar.header.color};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)}px;
  padding-right: ${(props) => props.theme.spacing(6)}px;
  margin-top: ${(props) => props.theme.spacing(4)}px;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
  justify-content: center;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  /*  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }*/
`;

const BrandIcon = styled("div")`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: white;
  width: 32px;
  height: 32px;
`;

type CategoryType = {
  activeClassName?: string;
  button?: boolean;
  onClick?: () => void;
  to?: string;
  component?: typeof NavLink;
  exact?: boolean;
};

const Category = styled(ListItem)<CategoryType>`
  padding-top: ${(props) => props.theme.spacing(2)}px;
  padding-bottom: ${(props) => props.theme.spacing(2)}px;
  padding-left: ${(props) => props.theme.spacing(3)}px;
  padding-right: ${(props) => props.theme.spacing(7)}px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  width: 92%;
  border-radius: 40px 0 0 40px;
  svg {
    color: ${(props) => props.theme.sidebar.header.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 1;
  }

  &:hover {
    background: ${(props) => props.theme.sidebar.header.hover};
    border-radius: 40px 0 0 40px;
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const CategoryText = styled(ListItemText)`
  margin: 0;
  span {
    color: ${(props) => props.theme.sidebar.color};
    font-size: ${(props) => props.theme.typography.body2.fontSize}px;
    padding: 0 ${(props) => props.theme.spacing(4)}px;
  }
`;

const CategoryIconLess = styled(ExpandLess)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const CategoryIconMore = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const Link = styled(ListItem)<{
  activeClassName: string;
  component: typeof NavLink;
  exact: boolean;
  to: string;
}>`
  padding-right: ${(props) => props.theme.spacing(17.5)}px;
  padding-top: ${(props) => props.theme.spacing(2)}px;
  padding-bottom: ${(props) => props.theme.spacing(2)}px;

  span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.7)};
  }

  &:hover span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.9)};
  }

  &:hover {
    background-color: ${(props) =>
      darken(0.015, props.theme.sidebar.background)};
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const LinkText = styled(ListItemText)`
  color: ${(props) => props.theme.sidebar.color};
  span {
    font-size: ${(props) => props.theme.typography.body2.fontSize}px;
  }
  margin-top: 0;
  margin-bottom: 0;
`;

const LinkBadge = styled(Chip)`
  font-size: 11px;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  height: 20px;
  position: absolute;
  right: 28px;
  top: 8px;
  background: ${(props) => props.theme.sidebar.badge.background};

  span.MuiChip-label,
  span.MuiChip-label:hover {
    cursor: pointer;
    color: ${(props) => props.theme.sidebar.badge.color};
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const CategoryBadge = styled(LinkBadge)`
  top: 12px;
`;

const SidebarSection = styled(Typography)`
  color: ${(props) => props.theme.sidebar.color};
  padding: ${(props) => props.theme.spacing(4)}px
    ${(props) => props.theme.spacing(7)}px
    ${(props) => props.theme.spacing(1)}px;
  opacity: 0.9;
  font-weight: bold;
  display: block;
`;

const SidebarFooter = styled.div`
  background-color: ${(props) =>
    props.theme.sidebar.footer.background} !important;
  padding: ${(props) => props.theme.spacing(2.75)}px
    ${(props) => props.theme.spacing(4)}px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const SidebarFooterText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
`;

const SidebarFooterSubText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
  font-size: 0.7rem;
  display: block;
  padding: 1px;
`;

const SidebarFooterBadge = styled(Badge)`
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
const HeaderSidebar = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 11px;
  background-color: ${(props) => props.theme.sidebar.header.background};
  color: ${(props) => props.theme.sidebar.header.color};
`;
const HeaderBoxTitle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 11px;
  background-color: ${(props) => props.theme.sidebar.header.background};
  color: ${(props) => props.theme.sidebar.header.color};
`;
const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderLeft = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const TitleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  & div {
    //background-color: ${(props) => props.theme.sidebar.header.hover};
    background: linear-gradient(100.39deg, #3eec94 0.7%, #0dd570 100%);
    width: 86%;
    padding: 6px 12px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
  }
`;
export {
  HeaderTitle,
  HeaderLeft,
  TitleFooter,
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
  Brand,
  BrandIcon,
};
