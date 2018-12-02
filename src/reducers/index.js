import { ADD_GROCERY } from "../actions";
import groceryItemsList from "../data/groceryItems.json";

export default function grocery(state = groceryItemsList, action) {
  switch (action.type) {
    case ADD_GROCERY:
      console.log("Add grocery clicked");
      return state;
    default:
      return state;
  }
}
