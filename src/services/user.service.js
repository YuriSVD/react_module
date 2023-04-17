import {axiosServiceForJSON} from "./axios.service";
import {urls} from "../configs/urls";

const userService = {
    createUser: (user) => axiosServiceForJSON.post(urls.users, user)
}
export {userService}