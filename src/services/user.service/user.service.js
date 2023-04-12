import axios from "axios";
//axios не розглядали на уроці, але був у превю до даного уроку
// плюс не хотів повторяти код з першого завдання.
// якщо лізу вперед, вибачаюсь
let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
const getUsers = () => {
    return axiosInstance.get("/users/");
}
const getUserPosts = (id) => {
    return axiosInstance.get( "/users/" + id + "/posts");
}
export {getUsers, getUserPosts};