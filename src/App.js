import React, { useContext } from 'react'
import Register from "./pages/Register";
import './style.scss'
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import Forgot_Password from './pages/Forgot_Password';
import Forgot_Password_Login from './pages/Forgot_Password_Login';

function App() {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />
    }
  
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <ProtectedRoute>

              <Home />
            </ProtectedRoute>
          } />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot' element={<Forgot_Password />} />
          <Route path='forgot_login' element={<Forgot_Password_Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
