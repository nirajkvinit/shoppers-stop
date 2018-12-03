import { ADD_GROCERY, REMOVE_GROCERY } from "../actions";
import { addToBag } from "./helpers";

export default function spendCalculator(state = 50, action) {
  switch (action.type) {
    case ADD_GROCERY:
      let item = addToBag(action.id);
      let spend = state - item.cost;
      return spend;
    case REMOVE_GROCERY:
      item = addToBag(action.id);
      spend = state + item.cost;
      return spend;
    default:
      return state;
  }
}
