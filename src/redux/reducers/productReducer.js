import {DECREMENT_PRODUCTS_PAGE, INCREMENT_PRODUCTS_PAGE, RECEIVE_PRODUCTS, REFRESH_PRODUCTS} from "../actions/type";

const initialState = {
    data: [],
    page: 1
};


let products;

export default products = (state = initialState, action = {}) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            const {products, page} = action.payload;
            return {
                data: page === 1 ? products : [...state.data, ...products],
                page
            };
            break;
        case INCREMENT_PRODUCTS_PAGE:
            return {
                ...state,
                page: state.page + 1
            };
            break;
        case DECREMENT_PRODUCTS_PAGE:
            return {
                ...state,
                page: state.page - 1
            };
            break;
        case REFRESH_PRODUCTS:
            return {
                ...state,
                page: 1
            };
            break;
        default:
            return state;
    }
};