import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardGroup, Label } from 'reactstrap';
import { getPost } from '../redux/actions/posts';

function Post() {
    const { id } = useParams();
    const post = useSelector(state => state.post)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(id))
    })

    console.log(post)

  return (
    <div>
        <Card>
            <CardGroup>
                <Label>
                    Title:
                </Label>
            </CardGroup>
        </Card>
    </div>
  )
}

export default Post