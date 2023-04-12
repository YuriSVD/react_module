import React from 'react';

const UserPost = ({post}) => {
    return (
        <div>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default UserPost;