import React, {useEffect, useState} from 'react';
import {axiosService} from "../services/axios.service";
import {urls} from "../configs/urls";
import Todo from "../todo/Todo";

const Todos = () => {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        axiosService.get(urls.todos)
            .then(value => value.data)
            .then(value => setTodos(value))
    }, []);
    return (
        <div>
            <h3>All todos</h3>
            {
                todos.map(value => <Todo item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Todos;