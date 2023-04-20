import React, {useEffect, useState} from 'react';
import users from "../users/Users";
import {axiosService} from "../services/axios.service";
import {urls} from "../configs/urls";
import Comment from "../comment/Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        axiosService.get(urls.comments)
            .then(value => value.data)
            .then(value => setComments(value))
    }, []);
    return (
        <div>
            <div>
                <h4>Post</h4>
                <Outlet/>
            </div>
            <div>
                <h3>All comments</h3>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
            </div>
        </div>
    );
};

export default Comments;