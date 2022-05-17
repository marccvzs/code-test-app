import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function getApi() {
    return fetch(apiUrl, {
        method: "GET",
        headers: {
            'Content-Type': 'applicaton/json',
        }
    }).then(r => r.json())
    .catch((e) => { throw e })
}

function* fetchPosts(action) {
    try{ 
        const posts = yield call(getApi);
        yield put({ type: 'GET_POSTS_SUCCESS', posts: posts });
    } catch(e) {
        yield put({ type: 'GET_POSTS_FAILED', message: e.message });
    }
}

function* postSaga() {
    yield takeEvery('GET_POSTS_REQUEST', fetchPosts);
}

export default postSaga;