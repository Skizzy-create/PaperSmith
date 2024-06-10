import React from 'react'
import PaperSmithLogo from '../assets/Logo.svg';
import InputBox from '../components/InputBox';
import AccentButton from '../components/AccentButton';
import ContinueWithGooglebtn from '../components/ContinueWithGooglebtn';
import TextftLink from '../components/TextftLink';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {

    const navigate = useNavigate();
  return (
    <div className='flex'>
        <div className='w-[600px] flex flex-col py-10 bg-[#F8F8F8]'>
            <img src={PaperSmithLogo} className='w-auto h-8' />
            <div className='mt-20 flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>

              <InputBox text="Email" placeholder="Email" />
              <InputBox text="Password" placeholder="********" hide={true} />
              <InputBox text="Confirm Password" placeholder="********" hide={true} />

              </div>
                <AccentButton text="Register" onClick="" />

                <div className='h-[1.5px] w-72 m-auto relative bg-[#808080]'>
                  <h1 className='font-noto relative left-[46%] text-[#808080] w-6 text-center bg-[#F8F8F8]  -top-3'>
                    or
                  </h1>
                </div>

                <ContinueWithGooglebtn />

                <TextftLink text="Already have an account?" link="Login" onClick={()=>navigate("/login")} />
            </div>

        </div>
        <div className="w-full h-[100vh] bg-[#5278FF] bg-[length:1000px_750px] bg-no-repeat bg-center bg-[url('./assets/LoginHero.png')]"></div>
    </div>
  )
}
