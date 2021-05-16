import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components/macro";
import { ReactComponent as IWallet } from "../../../assets/images/icon/wallet.svg";
import { persianPrice } from "../../../utils/persian-text";

interface OwnProps {}

type Props = OwnProps;
const Wallet = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.content.navBar.background};
  color: ${(props) => props.theme.content.navBar.color};
  padding: 15px 20px;
  flex: 1;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
    flex: 2;
    & p {
      padding: 0 3px;
    }
  }
`;
const WalletBar: FC<Props> = (props) => {
  return (
    <>
      <Wallet>
        <div>
          <Typography variant={"body2"}>موجودی کیف پول : </Typography>
          <Typography variant={"body2"}>
            {persianPrice("150000")} تومان
          </Typography>
        </div>
        <IWallet />
      </Wallet>
    </>
  );
};

export default WalletBar;
