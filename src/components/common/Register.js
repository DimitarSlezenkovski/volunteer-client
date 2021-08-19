import React from "react";
import { Grid } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Search from "../common/Search";
import { Card } from "../common/Card.js";
import { ads } from "../../repository/mockData";
import { Link } from "react-router-dom";

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
        // height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        container
        style={{
          marginTop: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
            width: "25vw",
          }}
        >
          <Typography variant="h5" component="h5">
            {"Зачлени се"}
          </Typography>
        </div>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ textAlign: "left", width: "25vw" }}>
            <Typography variant="h10" component="h10" style={{ fontSize: 14, color: "#8692A6"}}>
              {
                "Доколку сте спремни да започнете нови и возбудливи хуманитарни авантури."
              }
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "3vh 0 3vh 0",
            }}
          >
            <Grid
              item
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "3vh",
                alignItems: "center",
              }}
            >
              <Link style={{ color: "none", textDecoration: "none"}} to={"/individual"}>
              <button
                style={{
                  width: "25vw",
                  height: "13vh",
                  background: "#F4F4F4",
                  border: "1px solid #32C71A",
                  borderRadius: 6,
                  boxShadow: "0px 4px 14px 1px rgba(0, 0, 0, 0.4)",
                  padding: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("../../assets/user.svg")}
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        marginLeft: "1vw",
                        color: "black",
                      }}
                    >
                      Индивидуалец
                    </p>
                    <p
                      style={{
                        color: "#8692A6",
                        fontSize: 13,
                        padding: 0,
                        margin: 0,
                        marginLeft: "1vw",
                      }}
                    >
                      Индивидуален акаунт кој ќе ви овозможи да волонтирате.
                    </p>
                  </div>
                  <div>
                    <img src={require("../../assets/arrow-right.svg")} />
                  </div>
                </div>
              </button>
              </Link>
            </Grid>

            <Grid
              item
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
            <Link style={{ color: "none", textDecoration: "none"}} to={"/organization"}>
              <button
                style={{
                  width: "25vw",
                  height: "13vh",
                  background: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  borderRadius: 6,
                  boxShadow: "0px 2px 14px 1px rgba(0, 0, 0, 0.4)",
                  padding: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("../../assets/organization.svg")}
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        marginLeft: "1vw",
                        color: "black",
                      }}
                    >
                      Организација
                    </p>
                    <p
                      style={{
                        color: "#8692A6",
                        fontSize: 13,
                        padding: 0,
                        margin: 0,
                        marginLeft: "1vw",
                      }}
                    >
                      Акаунт за организација преку кој ќе можете да барате
                      волонтери.
                    </p>
                  </div>
                </div>
              </button>
              </Link>
            </Grid>
          </div>
        </Grid>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ color: "#8692A6" }}>
            Веќе имате кориснички профил?{" "}
            <span>
              <Link style={{ color: "#32C71A" }} to={"/login"}>
                Најави се
              </Link>
            </span>
          </p>
        </div>
      </Grid>
    </div>
  );
};
export default Register;
