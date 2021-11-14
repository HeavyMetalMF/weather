import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import mainReducer from "./main-reduser";
import thunk from 'redux-thunk';


let reducers = combineReducers({
    main: mainReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;