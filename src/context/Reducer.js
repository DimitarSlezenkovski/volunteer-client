import { 
    IS_USER_AUTHENTICATED
} from "./Actions";

const reducer = (state, action) => {
  switch (action.type) {
    case IS_USER_AUTHENTICATED: 
        return { ...state, authenticated: action.authenticated}
    default:
      return state;
  }
};

export default reducer;