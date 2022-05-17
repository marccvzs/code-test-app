import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(rootSaga);

export default store;