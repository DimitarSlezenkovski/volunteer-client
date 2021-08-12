import { createContext } from "react";

const values = {
  authenticated: null,
  setAuthenticated: (authenticated) => {},
};

export default createContext(values);
