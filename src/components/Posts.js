import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/posts';
import PostCard from './PostCard';
import { ListGroup } from 'reactstrap';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(getPosts([{
            id: 1,
            title: "The best title",
            body: "The best body test",
        }]))
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