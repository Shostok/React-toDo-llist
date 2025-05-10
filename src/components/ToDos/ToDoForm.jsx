import { useState } from 'react';
import styles from './ToDoForm.module.css';

function ToDoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.toDoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ToDoForm;
