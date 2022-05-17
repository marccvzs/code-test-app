import * as type from '../types';

const initialState = {
    posts: [],
    loading: false,
    error: null,
    post: {}
}

export default function posts(state = initialState, action) {
    switch(action.type) {
        case type.GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GET_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.post
            }
        case type.GET_POST_FAILED:
            return{
                ...state, 
                loading:false,
                error: action.message
            }
        case type.GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case type.GET_POSTS_FAILED:
            return { 
                ...state,
                loading: false,
                error: action.message
            }
        default: 
            return state;
    }
}