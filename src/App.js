import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/signin_signup/SignIn';
import SignUp from './components/signin_signup/SignUp';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Header />}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp />}/>
      <Route path='/' element={<Footer />}/>
    </Routes>
    </>    
      )
}
export default App;


