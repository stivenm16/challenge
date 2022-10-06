import actionStoreTypes from "../../constants/actionStoreTypes";

function AuthReducer(state: any, { payload, type }: any) {
  switch (type) {
    case actionStoreTypes.SET_USER:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
      };
    default:
      return state;
  }
}

export default AuthReducer;
