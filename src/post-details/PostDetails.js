import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PostDetails = () => {
    let {id} = useParams();
    let [post, setPost] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            })
    }, [id]);
    return (
        <div>
            {
                post && <div>
                <h4>{post.id} {post.title}</h4>
                <p>{post.body}</p>
                </div>
            }
        </div>
    );
};

export default PostDetails;