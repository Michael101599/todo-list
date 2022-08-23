import { useState } from "react"

export default function Todo({todo, onUpdate, onDelete}){

    const [isEdit, setIsEdit] = useState(false);

    let handleClick = (e) => {
        e.preventDefault();
        setIsEdit(true);
    }

    function FormEdit(){

        const [newValue, setNewValue] = useState(todo.title);

        let handleSubmit = (e) => {
            e.preventDefault();
        }
    
        let handleChange = (e) => {
            const value = e.target.value;
            setNewValue(value);
        }

        let handleClick = (e) => {
            e.preventDefault();
            onUpdate(todo.id, newValue);
            setIsEdit(false);
        }

        return(
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
                <button className="button" onClick={handleClick}>Actualizar</button>
            </form>
        )
    }

    function TodoElement(){
        return(
            <div className="todoInfo">
                <span className="todoTitle">{todo.title}</span>
                <button className="button" onClick={handleClick}>Editar</button>
                <button className="buttonDelete" onClick={(e) => onDelete(todo.id)}>Eliminar</button>
            </div>
        )
    }

    return(
        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
    )
}