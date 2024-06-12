import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Registerpage';
import HomePage from './pages/HomePage';
import DashBoardLayout from './layouts/DashBoardLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index path='/' element={<LoginPage/>} /> 
      <Route path='register' element={<RegisterPage />} />
      <Route path='aa' element={<DashBoardLayout />}>
      <Route path='h' element={<HomePage />} />

      </Route>
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)