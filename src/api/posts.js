import axios from 'axios';

export const getPosts = () => {
    return axios.get('/posts')
};