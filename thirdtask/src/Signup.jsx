import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage= ({users,setUsers})=> {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
        if (users.some(user => user.email === email)) {
          alert("User already exists. Please login.");
          navigate("/LoginPage");
          return;
        }
        const newUser = {name, email, password };
        setUsers([...users, newUser]);
        alert("Signup successful. Please login.");
        navigate("/LoginPage");
      };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded shadow-lg mt-80">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
     
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     
      <input
        type="email"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignup}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignupPage;
