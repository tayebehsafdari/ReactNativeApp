import {SET_USER} from "../actions/type";

const initialState = {
    id: null,
    name: null,
    email: null,
    apiToken: null
};


let user;

export default user = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER:
            const {user} = action;
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                apiToken: user.apiToken
            };
            break;
        default:
            return state;
    }
};