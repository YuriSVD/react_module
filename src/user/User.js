import React from 'react';
import {Link} from "react-router-dom";

const User = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()} state={{...item}}>
                {item.name}
            </Link>
        </div>
    );
};

export default User;