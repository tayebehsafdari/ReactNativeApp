import {combineReducers} from 'redux';
import user from "./userReducer";
import products from "./productReducer";


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
    rehydrated,
    products
});