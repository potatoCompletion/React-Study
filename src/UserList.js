import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList( {users} ) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>     //리액트에서 배열 랜더링 시 key 값을 항상 가져야 한다. (없어도 실행은 되지만 콘솔에서 에러메세지) key 값 없으면 랜더링 속도 비효율적 
            ))}                                      
        </div>
    )
}

export default UserList;