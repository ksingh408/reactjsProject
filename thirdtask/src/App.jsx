import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./Login";
import SignupPage from "./Signup";
import DashboardPage from "./Dashboard";

function App() {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <Router>
      <div className="w-screen min-h-screen bg-amber-50">
      <nav className="w-screen p-6 bg-blue-500 text-white flex justify-between ">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-blue-200 text-2xl">Dashboard</Link>
            </li>
          </ul>
         <ul className="flex justify-item-end gap-4">
            <li>
              <Link to="/login" className="hover:text-blue-200 flex justify-items-end text-xl">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-blue-200 flex justify-items-end text-xl">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<DashboardPage currentUser={currentUser} />}
          />
          <Route
            path="/login"
            element={<LoginPage users={user} setCurrentUser={setCurrentUser}/>}
          />
          <Route
            path="/signup"
            element={<SignupPage users={user} setUsers={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


