import { Dispatch } from "react";

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};

export type UserReducerAction = {
  type: string;
  payload: any;
};

export interface IAuthContext {
  authState: AuthState;
  dispatchAuthState: Dispatch<UserReducerAction>;
}
