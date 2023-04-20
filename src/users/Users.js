import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {Outlet} from "react-router-dom";
import {axiosService} from "../services/axios.service";
import {urls} from "../configs/urls";

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        axiosService.get(urls.users)
            .then(value => value.data)
            .then(value => setUsers(value))
    }, []);
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <h4>User details</h4>
            <Outlet/>
        </div>
    );
};

export default Users;