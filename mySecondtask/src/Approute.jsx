
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const Approute = () => {
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UsersTable />} />
              <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
          </BrowserRouter>
        );
      };
      
      export default Approute;