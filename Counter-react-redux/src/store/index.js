import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const reducer = function (store = INITIAL_VALUE, action) {
  let newStore = store;

  if (action.type === "INCREMENT") {
    newStore = {
      ...store,
      counter: store.counter + 1,
      
    };
  } else if (action.type === "DECREMENT") {
    newStore = {
      ...store,
      counter: store.counter - 1,

    };
  } else if (action.type === "ADD") {
    return {
     ...store,
      counter : store.counter + action.payload.num
    };
  } else if (action.type === "SUB") {
    return {
      ...store,
      counter: store.counter - action.payload.num,
    
    };
  } else if (action.type === "PRIVACY_TOGGLE") {

    return {
     ...store,
      privacy :!store.privacy
    }
  }

  return newStore;
};

const counterStore = createStore(reducer);

export default counterStore;

