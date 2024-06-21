import React from 'react'
import GoogleLogo from '../assets/GoogleLogo.svg'

export default function ContinueWithGooglebtn() {
  return (
    <div className='flex hover:cursor-pointer bg-white  justify-center gap-2  py-2 border rounded-sm border-black border-opacity-10'>
        <img src={GoogleLogo} />
        <h1 className='text-gray-400 font-noto'>Continue with Google</h1>
    </div>
  )
}
