import React from 'react';

const Post = ({post, fullInfo}) => {
    return (
        <div>
            <h2>{post.id} - {post.title}</h2>
            <button onClick={() => {
                fullInfo(post);
            }
            }>Full info</button>
        </div>
    );
};

export default Post;