import { combineReducers } from "redux";
import { language, slideDirection } from "./headerStore";

// combines everything into a single entry point for store
export default combineReducers({
    language,
    slideDirection
});
