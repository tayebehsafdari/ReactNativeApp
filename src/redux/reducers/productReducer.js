import {RECEIVE_PRODUCTS} from "../actions/type";

const initialState = {
    data: [],
    page: 1
};


let products;

export default products = (state = initialState, action = {}) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {};
            break;
        default:
            return state;
    }
};