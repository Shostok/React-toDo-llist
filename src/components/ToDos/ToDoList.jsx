// import ToDo from './ToDo';

// function ToDoList({ todos }) {
//   return (
//     <div className="">
//       {!todos.length && <h2>ToDo list is empty</h2>}
//       {todos.map((todo, index) => (
//         <ToDo key={index} todo={todo} />
//       ))}
//     </div>
//   );
// }

import ToDo from './ToDo';
import styles from './ToDoList.module.css';

function ToDoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length === 0 ? (
        <h2>TODO LIST IS EMPTY</h2>
      ) : (
        todos.map((todo, index) => (
          <ToDo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  );
}

export default ToDoList;
