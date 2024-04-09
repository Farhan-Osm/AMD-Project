import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header'
// import Footer from './components/Footer'
import SignIn from './components/signin_signup/SignIn';
import SignUp from './components/signin_signup/SignUp';
import Navbar from './components/header/Navbar';
import Home from './components/header/Home';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp />}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>    
      )
}
export default App;


