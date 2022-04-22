import { PERSON_ADD, PERSON_REMOVE } from "../actions/person-actions";

const initialState = {
  list: [],
  count: 0, // count: 0 le count ne peut pas etre initialement 0 car on a 2 id donc 2
};
export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSON_ADD:
      return {
        ...state,
        list: [...state.list, action.payload],
        count: state.count + 1,
      };
    case PERSON_REMOVE:
      const list = state.list.filter((p) => p.id !== action.payload);
      return {
        ...state,
        list,
        count: list.length,
      };
    default:
      return state;
  }
};
export default personReducer;
