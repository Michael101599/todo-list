import { useState } from "react";
import Todo from "./Todo";
import "./todoApp.css"

export default function TodoApp(){

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    let handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            complete: false
        }
        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);
        setTitle("");
    }

    let handleUpdate = (id, value) => {
        const temp = [...todos];
        const todo = temp.find((todo) => todo.id === id);
        todo.title = value;
        setTodos(temp)
    }

    let handleDelete = (id) => {
        const temp = todos.filter((todo) => todo.id !== id);
        setTodos(temp);
        
    }

    return(
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                className="todoInput" 
                value={title}/>
                <input 
                onClick={handleSubmit} 
                type="submit" value="Crear Tarea" className="buttonCreate" />
            </form>

            <div className="todosContainer">
                {
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    )
}