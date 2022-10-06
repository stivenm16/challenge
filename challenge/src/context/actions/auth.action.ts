import actionStoreTypes from "../../constants/actionStoreTypes";
import { UserReducerAction } from "../../types/contextTypes/AuthContextTypes";

export const setUser = (
  user: User | null,
  dispatch: React.Dispatch<UserReducerAction>
) => {
  dispatch({
    type: actionStoreTypes.SET_USER,
    payload: {
      isAuthenticated: true,
      user,
    },
  });
};
