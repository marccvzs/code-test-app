import * as type from '../types';

export function getPosts() {
    return {
        type: type.GET_POSTS_REQUEST,
        // payload: posts,
    }
}

export function getPost() {
    return{ 
        type: type.GET_POST_REQUEST,
    }
}

export const getPostSuccess = ({ post }) => ({
    type: type.GET_POST_SUCCESS,
    payload: post
})

export const getPostsSuccess = ({ posts }) => ({
    type: type.GET_POSTS_SUCCESS,
    payload: posts
})

export const updatePostRequest = ({ postId, title, body }) => ({
    type: type.UPDATE_POST_REQUEST,
    payload: {
        postId,
        title, 
        body
    }
})