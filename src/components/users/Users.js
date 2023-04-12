import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/user.service/user.service";
import User from "../user/User";

const Users = ({userPosts}) => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(user => setUsers(user.data));
    })
    return (
        <>
            {
                users.map(user => <User
                key={user.id}
                user={user}
                userPosts={userPosts}
                />)
            }
        </>
    );
};

export default Users;