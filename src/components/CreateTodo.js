import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'modules/todos';

function CreateTodo() {
  const [text, setText] = useState(null)
  const dispatch = useDispatch();
  const todoInput = useRef();

  const onChange = e => setText(e.target.value);

  const onCreate = () => {
    dispatch(addTodo(text))
    setText('');
    todoInput.current.value = ''
  };
  return (
    <div>
      <input onChange= {onChange} ref={todoInput}/>
      <button onClick= {onCreate}>전송</button>
    </div>
  );
}

export default CreateTodo;