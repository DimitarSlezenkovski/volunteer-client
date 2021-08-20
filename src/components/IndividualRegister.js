import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#32C71A",
    },
  },
});

const IndividualRegister = () => {
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
            {"Креирајте индивидуален профил"}
          </Typography>
        </div>
        <div style={{ textAlign: "left", width: "30vw" }}>
          <Typography
            variant="h10"
            component="h10"
            style={{ fontSize: 14, color: "#8692A6" }}
          >
            {"Индивидуален акаунт кој ќе ви овозможи да волонтирате."}
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
                  label="Име и презиме"
                  placeholder="Вашето име и презиме.."
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
                  label="Е-маил адреса"
                  placeholder="Вашата Е-маил адреса.."
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
                  label="Лозинка"
                  placeholder="Вашата лозинка.."
                  variant="outlined"
                  color="primary"
                  style={{
                    width: "67%",
                  }}
                />
                <div
                  onMouseDown={() => setShowPassword(!showPassword)}
                  onMouseUp={() => setShowPassword(false)}
                  style={{
                    textAlign: "center",
                    border: "1px solid #8692A6",
                    padding: 10,
                    height: "100%",
                    background: "#F5F5F5F5",
                    cursor: "pointer",
                    borderRadius: 6,
                  }}
                >
                  {!showPassword ? "Види" : "Пушти"}
                </div>
              </div>
              <FormGroup row style={{ width: "25vw", textAlign: "left" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={() => setAgreement(!agreement)}
                      style={{ color: "#32C71A" }}
                      required={true}
                    />
                  }
                  label="Се сложувам со условите и правилата за користење"
                />
              </FormGroup>
              <Link to={"/individual/continued"}>
                <Button
                  style={{
                    borderRadius: 6,
                    background: "#32C71A",
                    border: "1px solid #32C71A",
                    padding: "1vw 10vh 1vw 10vh",
                    width: "25vw",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                  disabled={!agreement && "disabled"}
                >
                  Продолжи
                </Button>
              </Link>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndividualRegister;
