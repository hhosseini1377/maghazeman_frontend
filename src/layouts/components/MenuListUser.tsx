import React, { FC } from "react";
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Icon from "@material-ui/core/Icon";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as IStore } from "../../assets/images/icon/store.svg";
import { ReactComponent as IAlert } from "../../assets/images/icon/alert.svg";
import { ReactComponent as IEdit } from "../../assets/images/icon/edit.svg";
import { ReactComponent as IWalletSm } from "../../assets/images/icon/walletSm.svg";
import { ReactComponent as IExist } from "../../assets/images/icon/exist.svg";
import BadgeCU from "../../components/Badge/BadgeCU";
import { persianPrice } from "../../utils/persian-text";
import { signOut } from "../../redux/actions/authActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    btn: {
      color: "#1A8191",
      fontWeight: 500,
      fontSize: 16,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    MenuBox: {
      padding: 0,
      "& li": {
        color: "#131313",
      },
      "& li div": {
        minWidth: 35,
      },
    },
  })
);
const MenuBox = styled(Paper)`
  background-color: #eeeeee;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 15px 15px;
  margin-top: 0px;
  margin-left: 2px;
`;
interface OwnProps {
  title?: string;
  children?: React.ReactNode | null;
}
type Props = OwnProps;
const MenuListComposition: FC<Props> = ({ title, children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<any>(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<any>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as any)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const handleSignOut = async () => {
    await dispatch(signOut());
    history.push("/auth/sign-in");
  };
  return (
    <div className={classes.root}>
      <div>
        <Button
          className={classes.btn}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={
            <Icon>
              <ExpandMoreIcon />
            </Icon>
          }
        >
          {title || children}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement={"bottom-end"}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "right top" : "center-bottom",
              }}
            >
              <MenuBox>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuList className={classes.MenuBox}>
                      <MenuItem
                        style={{
                          color: "#1A8191",
                          borderBottom: "1px solid rgba(26, 129, 145, 0.25)",
                          marginBottom: 5,
                        }}
                      >
                        <ListItemIcon>
                          <IStore />
                        </ListItemIcon>
                        <Typography variant="inherit">
                          فروشگاه کاشی و سرامیک
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <BadgeCU value={3}>
                            <IAlert />
                          </BadgeCU>
                        </ListItemIcon>
                        <Typography variant="subtitle1">اعلانات</Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <IEdit />
                        </ListItemIcon>
                        <Typography variant="subtitle1">ویرایش</Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <IWalletSm />
                        </ListItemIcon>
                        <Typography variant="subtitle1">
                          کیف پول : {persianPrice("15000")} تومان
                        </Typography>
                      </MenuItem>{" "}
                      <MenuItem onClick={handleSignOut}>
                        <ListItemIcon>
                          <IExist />
                        </ListItemIcon>
                        <Typography variant="subtitle1">
                          خروج از حساب کاربری
                        </Typography>
                      </MenuItem>
                    </MenuList>
                  </MenuList>
                </ClickAwayListener>
              </MenuBox>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
export default MenuListComposition;
