import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserTable({ users, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save edited user
  const handleSave = () => {
    onUpdate(formData);
    setEditId(null);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditId(null);
  };

  // Handle row click to navigate to user detail page
  const handleRowClick = (id) => {
    if (editId !== null) return; // Prevent navigation while editing
    navigate(`/user/${id}`);
  };

  return (
    <div className="p-4">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-500 text-white">
            <th className="border px-4 py-2">Id</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Mobile</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-gray-150 cursor-pointer hover:bg-gray-200"
              onClick={() => handleRowClick(user.id)}
            >
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditId(user.id);
                    setFormData({ ...user });
                  }}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(user.id);
                  }}
                  className="px-2 py-1 bg-red-500 text-white rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editId && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Edit User</h3>
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mt-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mt-2">Mobile</label>
              <input
                type="number"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
