import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

export default function DashBoardLayout() {
  return (
    <div className='flex bg-[#F8F8F8] h-[100vh] overflow-hidden '>
        <Sidebar />
        <div className='flex flex-col w-full'>
            <Navbar />
            
            <Outlet />

        </div>
    </div>
  )
}
