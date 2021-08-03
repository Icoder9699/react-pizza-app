import { combineReducers } from "redux";
import filterReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartReducer from "./cart";

export const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
});