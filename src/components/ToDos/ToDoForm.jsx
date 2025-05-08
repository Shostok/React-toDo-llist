import { useState } from 'react';

function ToDoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ToDoForm;
