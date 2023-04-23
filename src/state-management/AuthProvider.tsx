import React, { ReactNode, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import UserContext from "./context/userContext";

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default AuthProvider;
