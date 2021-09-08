import React from 'react';
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo{
    removeTodo: (id: number)=> void;
    toggleTodo: (id: number)=> void;
    
}

const TodosItem: React.FC<ITodoItem> = ({id, title, complete, toggleTodo, removeTodo}) => {
    return (
        <li>
            <input type="checkbox" checked={complete} onChange={()=>toggleTodo(id)}/>
            {title}
            <button onClick={()=>removeTodo(id)}>X</button>
        </li>
    );
};

export default TodosItem;