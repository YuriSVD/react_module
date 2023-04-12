import React from 'react';

const User = ({user, userPosts}) => {
    return (
        <div>
            <h2>{user.id} {user.name}</h2>
            <button onClick={() => {
                userPosts(user.id);
            }
            }>User Posts</button>
        </div>
    );
};

export default User;