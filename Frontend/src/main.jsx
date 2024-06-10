import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Registerpage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route path='login' element={<LoginPage/>} /> 
      <Route path='register' element={<RegisterPage />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)