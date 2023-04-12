import React, {useEffect, useState} from 'react';
import Post from "../post/Post";

const Posts = ({fullInfo}) => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => setPosts(value));
    }, [])
    return (
        <>
            {
                posts.map(post => <Post
                    key={post.id}
                    fullInfo={fullInfo}
                    post={post}
                />)
            }
        </>
    );
};

export default Posts;