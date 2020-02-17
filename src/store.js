import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import { createLogger } from 'redux-logger'
import {allReducers} from "./reducers";

const middleware = applyMiddleware(thunk, createLogger({collapsed: true}));

const store = createStore(allReducers, middleware);

export default store