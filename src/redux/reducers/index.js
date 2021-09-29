import {combineReducers} from 'redux';
import user from "./userReducer";
import {SET_USER} from "../actions/type";

const rehydrated = (state = false, action) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            return true;
            break;
        default:
            return state;
    }
};

export default combineReducers({
    user,
    rehydrated
});