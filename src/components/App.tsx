import React, {useState, useEffect, useRef} from 'react';
import {ITodo} from "../types/data";


const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const addTodo =()=> {
        setTodos([...todos, {
            id: Date.now(),
                title:value,
                complete: false
        }]);
        setValue('')
    }
    return (
        <div>
            <div>
                <input type="text"
                       value={value}
                       onChange={e=>setValue(e.target.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>
        </div>
    );
};

export default App;