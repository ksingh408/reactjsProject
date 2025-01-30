import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-12 bg-green-200 ring ... w-md h-full shadow-lg rounded-lg sm mx-auto mt-50 ">
      <h2 className="text-xl font-bold p-2">{user.name}</h2>
      <p className="p-2">Email: {user.email}</p>
      <p className="p-2">Phone: {user.phone}</p>
      <p className="p-2">Website: {user.website}</p>
      <p className="p-2">Company: {user.company?.name}</p>
    </div>
  );
}
