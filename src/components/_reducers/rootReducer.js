import { combineReducers } from "redux";
import { language } from "./headerStore";

// combines everything into a single entry point for store
export default combineReducers({
    language,
});
