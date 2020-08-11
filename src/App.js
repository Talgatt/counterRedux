// redux - responsible for our data (storing, updating)
// react-redux - responsible for connecting our app to redux
// import createStore - stores data, think of state
// store is looking for reducer - a function that used to update store value

// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE STATE - redux built in IMMUTABILITY
// IMMITABILITY - makes a copy.

// Provider, connect - react-redux

import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { DECREASE, INCREASE, RESET } from "./actions";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import countReducer from "./countReducer";
import productReducer from "./productReducer";
import modalReducer from "./modalReducer";

// redux thunk
import thunk from "redux-thunk";

// get components
import Modal from "./Modal";
import Products from "./Products";

const middleware = [thunk];

//setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),

  composeWithDevTools(applyMiddleware(...middleware))
);

//console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="random value" />;
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
