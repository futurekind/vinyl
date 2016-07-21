import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';
import persistStateMiddleWare, {getDataFromLocalStorage} from './persistStateMiddleWare';

const initialDataFromLocalStorage = {
    albums: JSON.parse(getDataFromLocalStorage()) || []
};

const persistState = () => {};

const store = createStore(
    rootReducer,
    initialDataFromLocalStorage,
    compose(
        applyMiddleware(thunk, persistStateMiddleWare),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store;
