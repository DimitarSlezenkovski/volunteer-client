import React from "react";
import { Grid } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Search from "../common/Search";
import { Card } from "../common/Card.js";
import { ads } from "../../repository/mockData";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
      tablet: 1024,
    },
  },
});

const Register = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      <Grid item container style={{ marginTop: "20vh", display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" component="h5">
          {"Зачлени се!"}
        </Typography>
        <Typography variant="h10" component="h10">
          {
            "Доколку сте спремни да започнете нови и возбудливи хуманитарни авантури."
          }
        </Typography>
      </Grid>
      <Grid item container>
        <button style={{ width: "25vw", height: "13vh" }}>
          <img src={require("../../assets/individualLogin.svg")} />
        </button>
      </Grid>{" "}
      <Grid item container>
        <button style={{ width: "25vw", height: "13vh" }}>
          <img src={require("../../assets/individualLogin.svg")} />
        </button>
      </Grid>
    </div>
  );
};
export default Register;
