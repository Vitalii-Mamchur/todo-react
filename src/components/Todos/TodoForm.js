import { useState } from 'react';
import s from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    text && addTodo(text);
    setText('');
  };

  return (
    <>
      <form className={s.todoForm} onSubmit={onSubmitHandler}>
        <input
          className={s.formInput}
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className={s.formButton} type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default TodoForm;
