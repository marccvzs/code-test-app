import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/posts';
import PostCard from './PostCard';
import { ListGroup } from 'reactstrap';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts.data);
    const loading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const postsList = posts.map(post => {
        return ( 
            <PostCard key={post.id} post={post} />
        )
    })

  return (
    <ListGroup>
        {postsList}
    </ListGroup>
  )
}

export default Posts;