export const ADD_GROCERY = "ADD_GROCERY";

export function addGroceryById(id) {
  const action = {
    type: ADD_GROCERY,
    id
  };
  return action;
}
