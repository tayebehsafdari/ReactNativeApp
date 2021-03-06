import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {autoRehydrate, persistStore} from 'redux-persist';


const middleware = [thunk];
middleware.push(createLogger());

const store = createStore(
    reducers,
    undefined,
    compose(
        applyMiddleware(...middleware),
        autoRehydrate()
    )
);

const persistConfig = {
    storage: AsyncStorage,
    blacklist: ['products']
};

persistStore(store, persistConfig);

export default store;