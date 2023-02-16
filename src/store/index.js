import { applyMiddleware, combineReducers, createStore } from "redux";
import { mealsReducer } from "./meals/mealsReducer";
import thunk from "redux-thunk";
import { BasketReducer } from "./basket/BasketReducer";
export const rootReducer = combineReducers({
  meals: mealsReducer,
  basket: BasketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
