import './App.css';
import Posts from "./components/posts/Posts";
import {useState} from "react";
import PostFullInfo from "./components/postFullInfo/PostFullInfo";
import SpaceXFlights from "./components/spaceXFlights/SpaceXFlights";
import Users from "./components/users/Users";
import {getUserPosts} from "./services/user.service/user.service";
import UserPosts from "./components/userPosts/UserPosts";

function App() {
    let [chosenPost, setChosenPost] = useState(null);
    let fullInfo = (value) => {
        setChosenPost(value);
    }
    let [chosenUserPosts, setChosenUserPosts] = useState([]);
    const userPosts = (id) => {
        getUserPosts(id).then(posts =>
            setChosenUserPosts(posts.data))
    }
    return (
        <>
            <div>
                {<Posts fullInfo={fullInfo}/>}
            </div>
            {
                chosenPost && <div><PostFullInfo value={chosenPost}/></div>
            }
            <div>
                {<SpaceXFlights/>}
            </div>
            <div>
                {
                    <Users userPosts={userPosts}/>
                }
            </div>
            <div>
                {
                    chosenUserPosts && <UserPosts
                    posts={chosenUserPosts}
                    />
                }
            </div>
        </>
    );
}

export default App;
