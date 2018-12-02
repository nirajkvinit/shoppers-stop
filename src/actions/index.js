export const ADD_GROCERY = "ADD_GROCERY";

export function addGorceryById(id) {
  const action = {
    type: ADD_GROCERY,
    id
  };
  return action;
}
