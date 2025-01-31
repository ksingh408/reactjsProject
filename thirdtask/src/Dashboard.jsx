import React from "react";

function DashboardPage({ currentUser }) {
  return (
    <div className="p-4 max-w-sm mx-auto mt-80">
      {currentUser ? (
        <div>
          <h2>Welcome, {currentUser.name}</h2>
          <p>This is your dashboard.</p>
        </div>
      ) : (
        <div className="max-w-sm mx-auto p-4 mt-5" >
          <h1 className="text-6xl">Hii User</h1>
          </div>
        
      )}
    </div>
  );
}

export default DashboardPage;

