import React, {useState, useEffect, useRef, createRef} from 'react';
import {ITodo} from "../types/data";
import Todos from "./Todos";


const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false
        }]);
        setValue('')
    };
    const removeTodo =(id:number):void => {
        setTodos(todos.filter(todo=> todo.id !== id))

    };
    const toggleTodo =(id:number):void=> {
        setTodos(todos.map(todo=>{
            if(todo.id === id) return {...todo, complete: !todo.complete}
            return todo
        }))
    }
    const inputRef = useRef<HTMLInputElement >(null);
    useEffect(()=> {
        if (inputRef.current) inputRef.current.focus()
    }, [])
    const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') addTodo()
    }
    return (
        <div>
            <div>
                <input type="text"
                       onKeyDown={keyDownHandler}
                       value={value}
                       onChange={valueHandler}
                       ref={inputRef}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <Todos items={todos}
                   toggleTodo={toggleTodo}
                   removeTodo={removeTodo}/>
        </div>
    );
};

export default App;