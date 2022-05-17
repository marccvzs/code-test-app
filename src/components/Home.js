import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/posts';
import { Input, Button, Label, Form, FormGroup, Card, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    function handleClick() {

    }
    
    const searchedTitle = posts.filter(post => {
        return post.title.toLowerCase().includes(title.toLowerCase())
    }).map(post => {
        return (
            <div onClick={handleClick}>
                <Card>
                    <CardGroup className="m-1 border p-1 flex">
                        <Label className="m-1">
                            Title:
                        </Label>
                        <h4 style={{margin: '1px'}}>{post.title}</h4>
                    </CardGroup>
                </Card>
            </div>
        )
    });

  return (
    <div style={{margin: '10px'}}>
        <Form>
            <FormGroup>
                <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Button className="m-1" color="primary">Search</Button>
            </FormGroup>
        </Form>
        {searchedTitle}
    </div>
  )
}

export default Home