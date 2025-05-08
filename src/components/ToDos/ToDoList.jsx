import ToDo from './ToDo';

function ToDoList({ todos }) {
  return todos.map((todo, index) => <ToDo key={index} todo={todo} />);
}

export default ToDoList;
