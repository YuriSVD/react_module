import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()} state={{...item}}>
                {item.id} {item.name}
            </Link>
        </div>
    );
};

export default Comment;