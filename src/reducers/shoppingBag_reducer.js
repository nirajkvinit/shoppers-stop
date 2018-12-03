import { ADD_GROCERY, REMOVE_GROCERY } from "../actions";

import { addToBag } from "./helpers";

export default function shoppingBag(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY:
      let shoppingBag = [...state, addToBag(action.id)];
      return shoppingBag.sort((a, b) => a.id > b.id);
    case REMOVE_GROCERY:
      shoppingBag = state.filter(item => item.id !== action.id);
      return shoppingBag.sort((a, b) => a.id > b.id);
    default:
      return state;
  }
}
