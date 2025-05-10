import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDos/ToDoForm';
import ToDoList from './components/ToDos/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = text => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = index => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <ToDoForm addTodo={addTodoHandler} />
      <ToDoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
