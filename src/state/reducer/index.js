import { combineReducers } from "redux";
import countValueReducer from "./countReducer";
import darkmodeReducer from "./darkModeReducer";

//combinnig all the reducers here
const reducer = combineReducers({
  countValue: countValueReducer,
  darkmode: darkmodeReducer,
});

export default reducer;
