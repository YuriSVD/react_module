import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {axiosService} from "../services/axios.service";
import {urls} from "../configs/urls";

const CommentPost = () => {
    let {state} = useLocation();
    let [commentPost, setCommentPost] = useState(null);
    useEffect(() => {
        axiosService.get(`${urls.posts}/${state.postId}`)
            .then(value => value.data)
            .then(value => setCommentPost(value))
    }, [state.id])
    return (
        <div>
            {
                commentPost && JSON.stringify(commentPost)
            }
        </div>
    );
};
export default CommentPost;