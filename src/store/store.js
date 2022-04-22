import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter-reducer";
import personReducer from "./reducers/person-reducer";

const reducer = combineReducers({
  counter: counterReducer,
  person: personReducer, // cette ligne permet d'injecter dans le store via le super reducer personReducer
});

const devTools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;
export const store = createStore(reducer, devTools);

export default store; // <= ce reducer est celui qui regroupe tous les autres reducers
