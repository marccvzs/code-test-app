import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

function EditForm({ post }) {
    const { title, body } = post
    const [formData, setFormData] = useState({
        title,
        body
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        setFormData({
            title: '',
            body: '',
        })
    }
  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label>Title:</Label>
            <Input placeholder={title} value={formData.title} name="title" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <Label>Body:</Label>
            <Input placeholder={body} value={formData.body} name="body" onChange={handleChange}/>
        </FormGroup>
        <Button>Submit Changes</Button>
    </Form>
  )
}

export default EditForm