import React, { FC } from "react";
import Badge from "@material-ui/core/Badge";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface OwnProps {
  children?: React.ReactNode;
  value: number;
}

type Props = OwnProps;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(0),
      },
    },
  })
);

const BadgeCU: FC<Props> = ({ children, value, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        color="error"
        overlap="circle"
        badgeContent={value}
      >
        {children}
      </Badge>
    </div>
  );
};

export default BadgeCU;
