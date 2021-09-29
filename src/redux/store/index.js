import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore} from 'redux-persist';


const middleware = [thunk];
middleware.push(createLogger());

const store = createStore(
    reducers,
    undefined,
    compose(
        applyMiddleware(...middleware)
    )
);

const persistConfig = {
    storage: AsyncStorage
};

persistStore(store, persistConfig);

export default store;