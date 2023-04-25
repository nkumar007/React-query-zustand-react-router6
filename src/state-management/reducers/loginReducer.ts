interface Login {
  type: "LOGIN";
  username: string;
}

interface Logout {
  type: "LOGOUT";
}

export type Action = Login | Logout;

const loginReducer = (state: string, action: Action): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default loginReducer;
