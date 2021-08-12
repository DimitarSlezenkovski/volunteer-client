import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import reducer from "./Reducer";
import {
    IS_USER_AUTHENTICATED
} from "./Actions";

const initialState = {
    authenticated: null,
};

const GlobalState = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    authenticated: state.authenticated,
    setAuthenticated: (authenticated) => {
        dispatch({ type: IS_USER_AUTHENTICATED, authenticated: authenticated})
    }
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;