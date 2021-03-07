import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TodoItem from 'components/TodoItem'
import CreateTodo from 'components/CreateTodo'
import TodoDetail from 'components/TodoDetail'

function TodoList() {
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    console.log(todos);
  });

  return (
    <div>
      TodoList
      <hr/>
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
      </div>
      <hr />
      <CreateTodo />
      <div>
        <Route
          path="/todoList"
          exact
          render={() => <div>할일을 선택해주세요.</div>}
        />
        <Route path="/todoList/:userId" component={TodoDetail} />
      </div>
    </div>
  );
}

export default TodoList;