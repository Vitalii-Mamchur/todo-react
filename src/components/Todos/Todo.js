import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import s from './Todo.module.css';

function Todo({ todo, delTodo, toggleTodo }) {
  return (
    <div
      className={`${s.todoContainer} ${
        todo.isCompleted ? s.completedTodo : ''
      }`}
    >
      <RiTodoFill className={s.todoIcon} />
      <div className={s.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={s.delIcon}
        onClick={() => delTodo(todo.id)}
      />
      <FaCheck className={s.checkIcon} onClick={() => toggleTodo(todo.id)} />
    </div>
  );
}

export default Todo;
