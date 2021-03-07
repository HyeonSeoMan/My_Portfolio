import React from 'react';

const TodoDetail = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { userId } = match.params;
  
  return (
    <div>
      <h3>
        {userId}
      </h3>
    </div>
  );
};

export default TodoDetail;