import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import GlobalContext from "./context/GlobalContext";
import Home from "./components/Home";
import Register from "./components/common/Register";

import NavMenu from "./components/common/NavMenu";
import Footer from "./components/common/Footer";
import IndividualRegister from "./components/IndividualRegister";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 900,
      xl: 1200,
      tablet: 1024,
    },
  },
});

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavMenu />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/individual" component={IndividualRegister} />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
