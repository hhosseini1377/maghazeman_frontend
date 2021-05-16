import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const labels: { [index: string]: string } = {
  0.5: "۰.۵",
  1: "۱",
  1.5: "۱.۵",
  2: "۲",
  2.5: "۲.۵",
  3: "۳",
  3.5: "۳.۵",
  4: "۴",
  4.5: "۴.۵",
  5: "۵",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
    margin: "7px 0",
  },
});
interface HoverRatingType {
  value: number;
}

const HoverRating = ({ ...props }) => {
  const [value, setValue] = React.useState<number | null>(3);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {value !== null && (
        <Box ml={2}>
          <Typography variant={"overline"} style={{ paddingLeft: "15px" }}>
            {labels[hover !== -1 ? hover : value]}
          </Typography>
        </Box>
      )}
      <Rating
        style={{ direction: "ltr" }}
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        {...props}
      />
    </div>
  );
};
export default HoverRating;
