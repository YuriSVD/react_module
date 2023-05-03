import {axiosServiceForJSON} from "./axios.service";
import {urls} from "../configs";

const commentService = {
    createPost: (comment) => axiosServiceForJSON.post(urls.comments, comment)
}
export {commentService}