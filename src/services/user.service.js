import {axiosServiceForJSON} from "./axios.service";
import {urls} from "../configs";

const userService = {
    createUser: (user) => axiosServiceForJSON.post(urls.users, user)
}
export {userService}