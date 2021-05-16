import React, { FunctionComponent } from "react";
import { Avatar } from "@material-ui/core";
import img from "../../../assets/images/Mask Group 2 1.png";
import MenuListUser from "../../components/MenuListUser";

interface OwnProps {}

type Props = OwnProps;

const UserIListLink: FunctionComponent<Props> = (props) => {
  return (
    <>
      <MenuListUser>
        <Avatar alt="Remy Sharp" src={img} />
      </MenuListUser>
    </>
  );
};

export default UserIListLink;
