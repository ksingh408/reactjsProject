import { useState } from "react";
import React from "react";
//{ id: "", name: "", email: "" }
export default function UserTable({ users, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  // Save edited user
  const handleSave = () => {
    onUpdate(formData);
    setEditId(null);
  };

  return (
    <div >
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
          <th className="border px-4 py-2">Id</th>
          <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Mobile</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>

<td className="border px-4 py-2">
                {editId === user.id ? (
                  <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  user.id
                )}
                </td>
                
              <td className="border px-4 py-2">
                {editId === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  user.name
                )}
              </td>

              
              
              <td className="border px-4 py-2">
                {editId === user.id ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  user.email
                )}
              </td>

              <td className="border px-4 py-2">
                {editId === user.id ? (
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  user.phone
                )}
                </td>


              <td className="border px-4 py-2">
                {editId === user.id ? (
                  <button
                    onClick={handleSave}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(user.id);
                      setFormData(user);
                    }}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>
                )}


                <button
                  onClick={() => onDelete(user.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded ml-2"
                >
                  Delete
                </button>


              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
