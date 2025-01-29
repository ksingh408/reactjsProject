import { useState } from "react";
import React from "react";


export default function UserTable({ user }) {
  //const [editMode, setEditMode] = useState(false);
  //const [formData, setFormData] = useState(user);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSave = () => {
  //   onUpdate(formData);
  //   setEditMode(false);
  // };

  return (
    
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Branch</th>    
          
          </tr>
        </thead>
        <tbody>
          {user.map((each)=>(
            <tr  className="bg-gray-50">
              <td className="border px-4 py-2">{each.name}</td>
              <td className="border px-4 py-2">{each.age}</td>
              <td className="border px-4 py-2">{each.Branch}</td>
            </tr>
          ))}


          {/* <tr>
            <td className="border px-4 py-2">
              {editMode ? (
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
              {editMode ? (
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="border px-2 py-1"
                />
              ) : (
                user.age
              )}
            </td>

            <td className="border px-4 py-2">
              {editMode ? (
                <input
                  type="text"
                  name="Branch"
                  value={formData.Branch}
                  onChange={handleChange}
                  className="border px-2 py-1"
                />
              ) : (
                user.Branch
              )}
            </td>


            <td className="border px-4 py-2">
              {editMode ? (
                <button onClick={handleSave} className="px-2 py-1 bg-green-500 text-white rounded">
                  Save
                </button>
              ) : (
                <button onClick={() => setEditMode(true)} className="px-2 py-1 bg-blue-500 text-white rounded">
                  Edit
                </button>
              )}
            </td>
          </tr> */}
        </tbody>

      </table>


    
  );
}
