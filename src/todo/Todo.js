import React from 'react';

const Todo = ({item}) => {
    return (
        <div>
            {item.id} {item.title}
        </div>
    );
};

export default Todo;