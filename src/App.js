import './App.css';
import UserForm from "./components/UserForm/UserForm";
import Cars from "./components/Cars/Cars";
import CommentForm from "./components/CommentForm/CommentForm";
function App() {
    return (
        <div>
            <UserForm/>
            <hr/>
            <CommentForm/>
            <hr/>
            <Cars/>
        </div>
    );
}

export default App;
