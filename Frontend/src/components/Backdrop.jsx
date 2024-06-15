import React from 'react'
import Modal from './Modal'

export default function Backdrop({onClick}) {
  return (
    <div className='bg-black opacity-50 w-full h-[100vh] absolute left-0 top-0 z-50 hover:cursor-pointer' onClick={onClick}></div>
  )
}
