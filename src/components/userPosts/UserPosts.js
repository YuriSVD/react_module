import React from 'react';
import UserPost from "../userPost/UserPost";

const UserPosts = ({posts}) => {
    return (
        <>
            {
                posts.map(post => <UserPost
                key={post.id}
                post={post}
                />)
            }
        </>
    );
};

export default UserPosts;