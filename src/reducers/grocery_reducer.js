import { ADD_GROCERY } from "../actions";
import groceryItemsList from "../data/groceryItems.json";
export default function grocery(state = groceryItemsList, action) {
  switch (action.type) {
    case ADD_GROCERY:
      let grocery = state.filter(item => item.id !== action.id);
      return grocery;
    default:
      return state;
  }
}
