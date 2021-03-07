import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTodo } from 'modules/todos';

function TodoItem(props) {
  const dispatch = useDispatch();
  const onToggle = useCallback(() => dispatch(toggleTodo(props.id)), [dispatch]);

  return (
    < >
      <h3 onClick= {onToggle}>
        {props.text} --- {props.done && 'done'}
      </h3>
      <Link
        to= {'/todoList/' + props.id}
      >
         ------ 디테일
      </Link>
    </>
  );
}

export default TodoItem;