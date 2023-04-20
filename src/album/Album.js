import React from 'react';

const Album = ({item}) => {
    return (
        <div>
            {item.id} {item.title}
        </div>
    );
};

export default Album;