import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import "../assets/fonts/css/style.css";
import "../assets/fonts/css/fontiran.css";

const typography: TypographyOptions = {
  fontFamily: [
    "IRANSans",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h4: {
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: "1.0625rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body1: {
    fontSize: 13,
    fontWeight: 400,
  },
  body2: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "18px",
  },
  button: {
    textTransform: "none",
  },
  subtitle2: {
    fontSize: "16px",
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: 900,
  },
  overline: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "25px",
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
  },
};

export default typography;
