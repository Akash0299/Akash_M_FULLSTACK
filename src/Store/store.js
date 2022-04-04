import {createStore,combineReducers,applyMiddleware} from 'redux'
import counterReducer  from '../Reducers/CounterReducer';
import cartReducer from '../Reducers/CartReducer';
import  ThunkMiddleware  from 'redux-thunk';

const reducers = combineReducers({
    carts : cartReducer,
    counters : counterReducer
})

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;