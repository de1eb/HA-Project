import React from 'react';
import { Link } from "react-router-dom";

function UserList(props) {
  return (
    <div id='user_selection'>
      <div>유저리스트</div>
      <div>
        {
          props.users.map(function (el) {
            return (
              <ul onClick={props.handleUserSelect} key={el.id}>{el.name}</ul>
            )
          })
        }
      </div>
      <div>
        <div>선택</div>
        <Link to="/">뒤로 가기</Link>
      </div>
    </div>
  )
}

export default UserList;