import React from 'react';
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo{
    
}

const TodosItem: React.FC<ITodoItem> = ({id, title, complete}) => {
    return (
        <li>
            <input type="checkbox" checked={complete}/>
            {title}
        </li>
    );
};

export default TodosItem;