import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
import {Outlet} from "react-router-dom";
import {axiosService} from "../services/axios.service";
import {urls} from "../configs/urls";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        axiosService.get(urls.posts)
            .then(value => value.data)
            .then(value => setPosts(value))
    }, []);
    return (
        <div>
            <div>
                <h4>Post details view</h4>
                <Outlet/>
            </div>
            <div>
                <h3>All posts</h3>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        </div>
    );
};

export default Posts;