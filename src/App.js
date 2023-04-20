import {Link, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import Users from "./users/Users";
import UserDetails from "./user-details/UserDetails";
import Layout from "./layout/Layout";
import Posts from "./posts/Posts";
import About from "./about/About";
import PostDetails from "./post-details/PostDetails";
import Todos from "./todos/Todos";
import Albums from "./albums/Albums";
import Comments from "./comments/Comments";
import CommentPost from "./commentPost/CommentPost";

function App() {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/layout"}>Layout</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>View</h2>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/layout"} element={<Layout/>}>
                        <Route path={"users"} element={<Users/>}>
                            <Route path={":id"} element={<UserDetails/>}/>
                        </Route>
                        <Route path={"posts"} element={<Posts/>}>
                            <Route path={":id"} element={<PostDetails/>}/>
                        </Route>
                        <Route path={"comments"} element={<Comments/>}>
                            <Route path={":id"} element={<CommentPost/>}/>
                        </Route>
                        <Route path={"todos"} element={<Todos/>}/>
                        <Route path={"albums"} element={<Albums/>}/>
                    </Route>
                    <Route path={"/about"} element={<About/>}/>
                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;
