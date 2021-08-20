import React from "react";
import Sponsors from "./Sponsors";
import { Grid } from "@material-ui/core";


const Footer = () => {

  return (
    <>
      <Sponsors />

      <Grid
        style={{
          height: "44.50373532550694vh",
          background: "#323232",
        }}
      >
        <div style={{ color: "white", fontSize: 18}}>{"Ништо немам направено кај футерот :("}</div>
      </Grid>
    </>
  );
};

export default Footer;
