import { DECREASE, INCREASE, RESET } from "./actions";

const defaultState = {
  count: 0,
  name: "john",
};

export default function reducer(state = defaultState, action) {
  //console.log({ state, action });
  // if (action.type === "DECREASE") {
  //   //console.log("hey it worked");
  //   // state.count = state.count - 1;
  //   // return state;
  //   return { ...state, count: state.count - 1 };
  // }
  // increase, reset

  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
