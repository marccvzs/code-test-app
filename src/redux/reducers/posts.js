import * as type from '../types';

const imnitialState = {
    posts: [],
}

export default function posts(state = imnitialState, action) {
    switch(action.type) {
        case type.GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default: 
            return state;
    }
}