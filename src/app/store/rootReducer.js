import {
    combineReducers
} from "redux";

const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        ...asyncReducer,
    });

    return combineReducer(state, action);
};

export default createReducer;