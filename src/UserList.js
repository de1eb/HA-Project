import React from 'react';

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
        <div onClick={props.handlePersonalPage}>선택</div>
        <div onClick={props.handleMainpage}>뒤로 가기</div>
      </div>
    </div>
  )
}

export default UserList;