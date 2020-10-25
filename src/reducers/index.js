import  counterReducers from "./counter"
import loggedReducers from "./islogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducers,
    isLogged: loggedReducers
})

export default allReducers;