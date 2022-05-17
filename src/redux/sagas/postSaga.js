import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as api from '../../api/posts';
import posts from '../reducers/posts';

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

function* fetchPost() {
    try{ 
        const post = yield call(api.getPost);
        console.log(post)
        yield put({ type: 'GET_POST_SUCCESS', post: post.data});
    } catch(e) {
        yield put({ tyep: 'GET_POST_FAILED', message: e.message })
    }
}

function* watchFetchPost() {
    yield takeEvery('GET_POST_REQUEST', fetchPost);
}

function* updatePost({postId, title, body}) {
    try{
        yield call(api.updatePost, postId, {title, body});
        yield put({ type: 'UPDATE_POST_SUCCESS', postId, title, body})
        yield call(fetchPosts);
    } catch(e) {
        yield put({ type: 'UPDATE_POST_FAILED', message: e.message})
    }
}

function* watchUpdatePost() {
    yield takeEvery('UPDATE_POST_REQUEST', updatePost);
}

const postSagas = [
    fork(postSaga),
    fork(watchUpdatePost),
    fork(watchFetchPost)
]

export default postSagas;