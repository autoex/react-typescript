import React from 'react';
import {ITodo} from "../types/data";
import TodosItem from "./TodosItem";
interface ITodoList {
    items: ITodo[];
    removeTodo: (id: number)=> void;
    toggleTodo: (id: number)=> void;

}

const Todos:React.FC<ITodoList> = ({items, removeTodo, toggleTodo}) => {
    return (
        <ul>
            {items.map(item=> <TodosItem removeTodo={removeTodo} toggleTodo={toggleTodo} key={item.id} {...item} />)}
            </ul>
    );
};

export default Todos;