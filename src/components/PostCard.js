import React, { useState } from 'react';
import { ListGroupItem, Button, Label } from 'reactstrap';
import EditForm from './EditForm';

function PostCard({ post }) {
    const { title, body } = post
    const [toggleEdit, setToggleEdit] = useState(false);

    function handleEdit() {
      setToggleEdit(toggleEdit => !toggleEdit);
    }
  return (
    <ListGroupItem>
        <section style={{ display: 'flex' }}>
            <div stype={{ flexGrow: 1, margin: 'auto 0' }}>
                <Label>Title: </Label>
                <h5>{title}</h5>
                <Label>Body: </Label>
                <p>{body}</p>
                <Button color="primary" onClick={handleEdit}>Edit</Button>
            </div>
            {toggleEdit ? <EditForm post={post} /> : null}
        </section>
    </ListGroupItem>
  )
}

export default PostCard;