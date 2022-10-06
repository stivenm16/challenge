//CORE COMPONENTS
import { useReducer, createContext } from "react";

//TYPES
import {
  AuthState,
  IAuthContext,
} from "../../../types/contextTypes/AuthContextTypes";
import AuthReducer from "../../reducer/AuthReducer";

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const AuthContext = createContext<IAuthContext>({
  authState: initialAuthState,
  dispatchAuthState: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, dispatchAuthState] = useReducer(
    AuthReducer,
    initialAuthState
  );

  return (
    <AuthContext.Provider value={{ authState, dispatchAuthState } as any}>
      {children}
    </AuthContext.Provider>
  );
};

export {};
