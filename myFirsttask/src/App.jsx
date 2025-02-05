import { useState } from "react";
import UserTable from "./table";
import React from "react";

let userData=[
  { name: "John Doe", age: 25 ,Branch:"cse"},
  { name: "John", age: 28 ,Branch:"Ec"},
  { name: "Jonathan Doe", age: 47 ,Branch:"cse"},
  { name: "Joni", age: 56 ,Branch:"civil"}
]


 function App() {


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <UserTable user={userData} />
    </div>
  );
}

export default App
