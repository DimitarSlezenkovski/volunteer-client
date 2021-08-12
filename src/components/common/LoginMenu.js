import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import Logout from "./Logout";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

const LoginMenu = () => {
  const context = useContext(GlobalContext);

  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {!context.authenticated && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #32C71A",
              padding: 5,
              textDecoration: "none",
              marginRight: 7,
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            <Link
              to={"/"}
              style={{ border: "none", background: "none", }}
            >
              Волонтирај
            </Link>
          </div>
          <div
            style={{
              background: "#32C71A",
              textDecoration: "none",
              padding: 5,
              border: "1px solid #32C71A",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            <Link
              to={"/register"}
              style={{
                color: "white",
                border: "none",
                background: "#32C71A",
                border: "none"
              }}
            >
              Најави се
            </Link>
          </div>
          <div style={{ padding: 10 }}>
            <img src={require("../../assets/profile.svg")} />
          </div>
        </div>
      )}
      {context.authenticated ? (
        <div>
          <Logout />
        </div>
      ) : null}
    </div>
  );
};

export default LoginMenu;
