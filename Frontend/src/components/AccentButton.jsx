import React from 'react'

export default function (props) {
  return (
    <div className='bg-[#5278FF] hover:cursor-pointer font-noto text-white text-base text-center py-2 px-[130px] max-w-[300px] rounded-sm  m-auto ' onClick={props.onClick}>
        {props.text}
    </div>
  )
}
