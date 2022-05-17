import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api/posts';

function* fetchPosts() {
    try{ 
        const posts = yield call(api.getPosts);
        console.log(posts.data);
        yield put({ type: 'GET_POSTS_SUCCESS', posts: posts.data });
    } catch(e) {
        yield put({ type: 'GET_POSTS_FAILED', message: e.message });
    }
}

function* postSaga() {
    yield takeEvery('GET_POSTS_REQUEST', fetchPosts);
}

export default postSaga;