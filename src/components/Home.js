import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Search from "./common/Search";
import { Card } from "./common/Card.js";
import { ads } from "../repository/mockData";

const Home = () => {

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Grid
      item
      container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "4vh",
        }}
      >
        <Typography variant="h5" component="h5" style={{ marginTop: "6.5vh" }}>
          {"Листа на организации кои имаат потреба од волонтери"}
        </Typography>
      </Grid>
      <Grid
      item 
      container
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          marginTop: "4vh",
        }}
      >
        <Search />
      </Grid>
      <Grid
      item
      container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4vh",
        }}
      >
        <Grid
          item
          container
          sm={6}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card ads={ads} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
