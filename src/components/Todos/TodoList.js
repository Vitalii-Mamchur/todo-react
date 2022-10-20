import Todo from './Todo';
import s from './TodoList.module.css';

function TodoList({ todos, delTodo, toggleTodo }) {
  return (
    <div className={s.listContainer}>
      {!todos.length ? (
        <h2 className={s.listText}>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            delTodo={delTodo}
            toggleTodo={toggleTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
