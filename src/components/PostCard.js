import React from 'react';
import { ListGroupItem, Button, Label } from 'reactstrap';

function PostCard({ post }) {
    const { title, body } = post
  return (
    <ListGroupItem>
        <section style={{ display: 'flex' }}>
            <div stype={{ flexGrow: 1, margin: 'auto 0' }}>
                <Label>Title: </Label>
                <h5>{title}</h5>
                <Label>Body: </Label>
                <p>{body}</p>
                <Button color="primary">Edit</Button>
            </div>
        </section>
    </ListGroupItem>
  )
}

export default PostCard;