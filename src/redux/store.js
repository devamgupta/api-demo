import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import menuItemReducer from "./menuItem/menuItemReducer";

const store = createStore(
    menuItemReducer,
    applyMiddleware(thunk),
);

export default store;