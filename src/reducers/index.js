import {combineReducers} from "redux";
import colorReducer from "./colorReducer";

export const allReducers = combineReducers({
    colorValues: colorReducer,
});
