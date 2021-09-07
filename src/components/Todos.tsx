import React from 'react';
import {ITodo} from "../types/data";
import TodosItem from "./TodosItem";
interface ITodoList {
    items: ITodo[];
    
}

const Todos:React.FC<ITodoList> = ({items}) => {
    return (
        <ul>
            {items.map(item=> <TodosItem key={item.id} {...item} />)}
            </ul>
    );
};

export default Todos;