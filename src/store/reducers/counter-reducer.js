import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,
} from "../actions/counter-actions";

const initialState = {
  count: 0,
  demo: "ceci est un exemple",
  message: "Le compteur est initialisé",
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state, //Si les ...state ne sont pas mis la ligne en dessous  va faire en sorte que initialState sera pas le meme
        count: state.count + action.payload,
        message: `Le compteur est incrementé de ${action.payload}`,
      };
    case COUNTER_DECREMENT:
      return {
        ...state, //Si les ...state ne sont pas mis la ligne en dessous  va faire en sorte que initialState sera pas le meme
        count: state.count - action.payload,
        message: `Le compteur est décrementé de ${action.payload}`,
      };
    case COUNTER_RESET: //On peut soit caser counterReset pour mettre a le count : 0 ou bien mettre les valeur inital du state avec le default avec return state
      return {
        ...state,
        count: 0,
        message: "Le compteur est remis à zero ",
      };
    // Alternaytive: Remise a la valeur initial du state inital
    // return {...initialState };
    default:
      return state;
  }
};

export default counterReducer;
