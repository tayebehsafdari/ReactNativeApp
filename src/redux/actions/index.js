import {DECREMENT_PRODUCTS_PAGE, INCREMENT_PRODUCTS_PAGE, RECEIVE_PRODUCTS, REFRESH_PRODUCTS, SET_USER} from "./type";

export const setUser = user => ({
    type: SET_USER,
    // payload: user
    user
});

export const receiveProducts = (products, page) => ({
    type: RECEIVE_PRODUCTS,
    payload: {
        products,
        page
    }
});

export const incrementPage = () => ({
    type: INCREMENT_PRODUCTS_PAGE
});

export const decrementPage = () => ({
    type: DECREMENT_PRODUCTS_PAGE
});

export const refreshProducts = () => ({
    type: REFRESH_PRODUCTS
});