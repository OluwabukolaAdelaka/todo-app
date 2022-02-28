import React from 'react';
import {MdAddBox} from 'react-icons/md';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const addhandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 100)},
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <>
        <form>
            <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler}/>
            <button className="todo-button" onClick={addhandler} type="submit">
               <MdAddBox/>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        </>
    );
}

export default Form;