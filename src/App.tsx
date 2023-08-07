import React from 'react';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Subscription from './Component/Subscription/Subscription';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Watching from './Component/Watching/Watching';
import Forgot_pass from './Component/Forgot/Forgot_pass';
import RequestOTP from './Component/Forgot/Requestotp';
import ResetPass from './Component/Forgot/ResetPass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to = '/Login'/>}> </Route>
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/SignUp' element={<SignUp/>}/> 
        <Route path='/Subscription' element={<Subscription/>}/> 
        <Route path='/Watching' element={<Watching/>}/> 
        <Route path='/Forgot' element={<Forgot_pass/>}/>
        <Route path='/RequestOTP' element={<RequestOTP/>}/>
        <Route path='/ResetPass' element={<ResetPass/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
