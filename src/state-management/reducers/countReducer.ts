interface Action {
  type: "INCREMENT" | "RESET";
}

const counterReducer = (state: number, action: Action) => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return state - 1;
  return state;
};

export default counterReducer;
