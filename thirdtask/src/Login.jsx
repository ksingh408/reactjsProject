import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ users ,setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const user = users.find((u)=>u.email===email && u.password===password);
    if(user){
        setCurrentUser(user);
        navigate("/");    
}
   
     else {
      alert("User not found. Please sign up");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded shadow-lg mt-80">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
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
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
