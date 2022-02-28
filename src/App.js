import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  });
  //to call filter handler
  useEffect(() => {const filterHandler = () => {
    //using switch case to filter the todos based on the filter type chosen
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;

      default:
        setFilteredTodos(todos)
      break;
    }
  }

  //save to locals
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
  
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo)
    }
  }
  return (
    <div className="App">
      <header>
        <h1 className='title'>Sleeky's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} 
      setFilteredTodos={setFilteredTodos} />
      <footer>
        <h3>Copyright &copy; 2022 <span>Sleeky</span></h3>
      </footer>
    </div>
  );
}

export default App;
