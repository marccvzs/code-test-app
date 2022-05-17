import { all } from 'redux-saga/effects';
import postSagas from './postSaga';

export default function* rootSaga() {
    yield all([
        ...postSagas,
    ])
}