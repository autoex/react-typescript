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
    const inputRef = useRef<HTMLInputElement >(null);
    useEffect(()=> {
        if (inputRef.current) inputRef.current.focus()
    }, [])
    const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <div>
                <input type="text"
                       value={value}
                       onChange={valueHandler}
                       ref={inputRef}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <Todos items={todos}/>
        </div>
    );
};

export default App;