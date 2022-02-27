import React from 'react';
import {BsCheckSquareFill} from 'react-icons/bs';
import {BsTrashFill} from 'react-icons/bs';

const Todo = ({text}) => {
  return (
    <div className='todo'>
        <li className="todo-item">{text}</li>
        <button className="complete-btn"><BsCheckSquareFill/></button>
        <button className="complete-btn"><BsTrashFill/></button>
    </div>
  )
}

export default Todo