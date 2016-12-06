import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/root-reducer';

const logger = applyMiddleware(createLogger(), thunkMiddleware);


export default createStore(reducer, logger);
