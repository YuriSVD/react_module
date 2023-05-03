import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentService} from "../../services";
import {commentValidator} from "../../validators";

const CommentForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all", resolver:joiResolver(commentValidator)})
    const submit = async (post) => {
        console.log(post);
        const newPost = await commentService.createPost(post);
        //console.log(newPost.data); // щоб побачити що comment створився
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"postId"} {...register("postId")}/>
            {errors.postId && <span>{errors.postId.message}</span>}
            <input type="text" placeholder={"name"} {...register("name")}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={"email"} {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={"body"} {...register("body")}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Submit</button>
        </form>
    );
};

export {CommentForm};