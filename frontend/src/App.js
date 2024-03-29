import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import User from './Components/Users/User';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navbar';
import SignUp from './Components/Signup/Signup';
import Post from './Components/Post/Post';
import Profile from './Components/Profile/Profile';
import Notification from './Components/Notification/Notification';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/user" exact element={<User />} />
        <Route path="/post" exact element={<Post />} />
        <Route path="/notifications" exact element={<Notification/>} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/profile/:id" exact element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
