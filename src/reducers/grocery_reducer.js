import { ADD_GROCERY, REMOVE_GROCERY } from "../actions";
import groceryItemsList from "../data/groceryItems.json";
import { addToBag } from "./helpers";

export default function grocery(state = groceryItemsList, action) {
  switch (action.type) {
    case ADD_GROCERY:
      let grocery = state.filter(item => item.id !== action.id);
      return grocery.sort((a, b) => a.id > b.id);
    case REMOVE_GROCERY:
      grocery = [...state, addToBag(action.id)];
      return grocery.sort((a, b) => a.id > b.id);
    default:
      return state.sort((a, b) => a.id > b.id);
  }
}
