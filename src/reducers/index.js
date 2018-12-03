import grocery from "./grocery_reducer";
import shoppingBag from "./shoppingBag_reducer";
import spendCalculator from "./spend_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  grocery,
  shoppingBag,
  spendCalculator
});

export default rootReducer;
