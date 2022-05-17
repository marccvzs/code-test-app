import axios from 'axios';

export const getPosts = () => {
    return axios.get('/posts')
};

export const getPost = (postId) => {
    return axios.get(`/posts/${postId}`)
}

export const updatePost = (postId, {title, body}) => {
    return axios.put(`/posts/${postId}`, {
        body: {
            title: title,
            body: body
        }
    })
} 