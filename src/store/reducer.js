const initialState = {
  InputValue: "",
  numbers: [9, 8, 7, "*", 6, 5, 4, "+", 3, 2, 1, "-", 0, "/"],
  // numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, "+", "-", "*", "/"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      if (state.Inputvalue === "" && action.value === 0) {
        return { ...state, InputValue: state.InputValue + action.value + "." };
      }
      return { ...state, InputValue: state.InputValue + action.value };
    case "CALCULATE":
      return { ...state, InputValue: eval(state.InputValue) };
    case "DISPLAY":
      return { ...state, InputValue: state.InputValue };
    default:
      return state;
  }
};

export default reducer;
