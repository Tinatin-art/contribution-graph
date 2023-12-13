import {
    combineReducers
} from "redux";
import dataSlice from "../page/DataSlice"
const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        dataSlice,
        ...asyncReducer,
    });

    return combineReducer(state, action);
};

export default createReducer;