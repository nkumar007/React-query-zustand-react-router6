import React, { Dispatch } from "react";
import { Action } from "../reducers/loginReducer";

interface authContextType {
  user: string;
  dispatch: Dispatch<Action>;
}

const AuthContext = React.createContext<authContextType>({} as authContextType);

export default AuthContext;
