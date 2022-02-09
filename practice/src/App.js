import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    const newUser = {
      name: username,
      age: age,
      id: Math.random() * 100
    }

    setUsersList([...usersList, newUser]);
  }

  return (
    <div>
      <AddUser onUserAdd={addUserHandler}/>
      <UsersList users={usersList}/>

    </div>
  );
}

export default App;
