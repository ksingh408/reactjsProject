import { useEffect, useState } from "react";
import UserTable from "./Appuser";
import React from "react";


export default function App() {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  
  const handleUpdate = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };


  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <UserTable users={users} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
