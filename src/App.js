import React from 'react';
import logo from './logo.svg';
import { Home } from './features/user/Home';
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import { UpdateUserDetails } from './features/user/updateUser';
import { Create } from './features/user/createUser';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<UpdateUserDetails/>} path="UpdateUserDetails/:id"/>
          <Route element={<Create/>} path="Create"/>
        </Routes>

    </div>
  );
}

export default App;
