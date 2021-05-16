import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { Avatar, Typography } from "@material-ui/core";
import MenuListUser from "../../components/MenuListUser";
import img from "../../../assets/images/Mask Group 2 1.png";
import WalletBar from "../Mobile/WalletBar";

interface OwnProps {}

type Props = OwnProps;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: #eeeeee;
  border-radius: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 2;
`;
const BoxUser = styled.div`
  display: flex;
  width: 188px;
  justify-content: space-between;
`;
const NavBarContent: FunctionComponent<Props> = (props) => {
  return (
    <>
      <NavBar>
        <WalletBar />
        <UserInfo>
          <BoxUser>
            <Avatar alt="Remy Sharp" src={img} />
            <MenuListUser title={"حمیدرضا درختی"} />
          </BoxUser>
        </UserInfo>
      </NavBar>
    </>
  );
};

export default NavBarContent;
