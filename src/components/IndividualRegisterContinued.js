import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button
} from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#32C71A",
    },
  },
});

const IndividualRegisterContinued = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreement, setAgreement] = useState(false);

  return (
    <div
      style={{
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
            width: "30vw",
          }}
        >
          <Typography variant="h5" component="h5" style={{ fontSize: 30 }}>
            {"Комплетирајте го профилот"}
          </Typography>
        </div>
        <div style={{ textAlign: "left", width: "30vw" }}>
          <Typography
            variant="h10"
            component="h10"
            style={{ fontSize: 14, color: "#8692A6" }}
          >
            {"Поради потребите на организациите кои имаат потреба од волонтери."}
          </Typography>
        </div>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "30vw",
              borderBottom: "1px solid #F5F5F5",
              height: 1,
            }}
          ></div>
          <Grid
            item
            container
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "3vh 0 3vh 0",
            }}
          >
            <ThemeProvider theme={theme}>
              <div
                style={{
                  display: "flex",
                  width: "30vw",
                  marginBottom: "2vh",
                }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Телефонски број"
                  placeholder="Вашиот телефонски број.."
                  variant="outlined"
                  color="primary"
                  style={{
                    width: "80%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "30vw",
                  marginBottom: "2vh",
                }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Адреса на живеење"
                  placeholder="Вашата адреса на живеење.."
                  variant="outlined"
                  color="primary"
                  style={{
                    width: "80%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "30vw",
                }}
              >
                <TextField
                  required
                  id="outlined-required"
                  type={showPassword ? "text" : "password"}
                  label="Град"
                  placeholder="Градот во кој живеете.."
                  variant="outlined"
                  color="primary"
                  style={{
                    width: "80%",
                  }}
                />
              </div>
              <Button
                style={{
                  borderRadius: 6,
                  background: "#32C71A",
                  border: "1px solid #32C71A",
                  padding: "1vw 10vh 1vw 10vh",
                  width: "25vw",
                  color: "white",
                  textTransform: "capitalize"
                }}
                disabled={!agreement && "disabled"}
              >
                Креирај профил
              </Button>
              <p><><img src={require("../assets/lock.svg")}/></>Вашите информации се безбедни</p>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndividualRegisterContinued;
