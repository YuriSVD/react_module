import React from 'react';

const PostFullInfo = ({value}) => {
    return (
        <>
            <h4>UserId: {value.userId},
                Id: {value.id},
                Title: {value.title}
            </h4>
            <p>Body: {value.body}</p>
        </>
    );
};

export default PostFullInfo;