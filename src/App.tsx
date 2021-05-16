import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import DateFnsUtils from "@date-io/date-fns";

import { ThemeProvider } from "styled-components/macro";
import { create } from "jss";
import rtl from "jss-rtl";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";

import createTheme from "./theme";
import Routes from "./routes/Routes";
import { AppStateType } from "./redux/reducers";

const jss: any = create({
  plugins: [...jssPreset().plugins, rtl()],
  insertionPoint: "jss-insertion-point",
});

function App() {
  const theme = useSelector((state: AppStateType) => state.themeReducer);

  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s Maghaze man"
        defaultTitle="Maghaze man - shop"
      />
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MuiThemeProvider theme={createTheme(theme.currentTheme)}>
            <ThemeProvider theme={createTheme(theme.currentTheme)}>
              <Routes />
            </ThemeProvider>
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

export default App;
