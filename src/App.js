import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

/**
 * A material-UI method to change the specified themes in their standard css
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(75, 192, 192)"
    },
    secondary: { main: "rgb(255, 0, 0)" }
  },
  typography: {
    fontFamily: '"Exo 2", sans-serif'
  }
});

/**
 * Represents the full application
 */
function App() {
  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
      </ThemeProvider>
    </div>
  );
}

export default App;
