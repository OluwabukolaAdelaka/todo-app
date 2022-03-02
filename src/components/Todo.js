import React from 'react';
//import {BsCheckSquareFill} from 'react-icons/bs';
//import {BsTrashFill} from 'react-icons/bs';


const Todo = ({text, todo, todos, setTodos}) => {
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }));
  };

  const deleteHandler = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">`<i class="fas fa-check"></i></button>
        <button onClick={deleteHandler} className="complete-btn"><i class="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo