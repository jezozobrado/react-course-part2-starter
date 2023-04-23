import { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";
import React from "react";

interface UserContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;
