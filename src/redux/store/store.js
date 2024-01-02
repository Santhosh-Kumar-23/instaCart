import counterReducer from '../reducers/reducers';
import authReducer from '../reducers/authReducers';
import {combineReducers, applyMiddleware} from 'redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';

//combine reducers in
const rootRrducers = combineReducers({
  counterReducer,
  authReducer,
});

const loggerMiddleware = store => next => action => {
  console.log('action', action);
};
const middleware = applyMiddleware(thunk);

//create store
const store = createStore(rootRrducers, middleware);

export default store;
