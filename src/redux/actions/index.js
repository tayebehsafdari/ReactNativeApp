import {RECEIVE_PRODUCTS, SET_USER} from "./type";

export const setUser = user => ({
    type: SET_USER,
    // payload: user
    user
});

export const receiveProducts = (products, page) => ({
    type: RECEIVE_PRODUCTS,
    products: {
        products,
        page
    }
});