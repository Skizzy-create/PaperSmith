import React, { useState } from 'react';
import PaperSmithLogo from '../assets/Logo.svg';
import InputBox from '../components/InputBox';
import AccentButton from '../components/AccentButton';
import ContinueWithGooglebtn from '../components/ContinueWithGooglebtn';
import TextftLink from '../components/TextftLink';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleLogin () {
    try {
      const response = await axios.post(
        'http://localhost:3000/user/login',
        { email, password },
        { withCredentials: true } // Include cookies in the request
      );

      if (response.data.validation !== true) {
        throw new Error('Login failed');
      }

      console.log('Login successful!');
      navigate('/aa/h'); // Navigate after successful login
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className='flex'>
      <div className='w-[600px] flex flex-col py-10 bg-[#F8F8F8]'>
        <img src={PaperSmithLogo} className='w-auto h-8' alt="PaperSmith Logo" />
        <div className='mt-20 flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <InputBox text="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <InputBox text="Password" placeholder="********" hide={true} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <AccentButton text="Login" onClick={handleLogin} />
          {error && <div className="text-red-500">{error}</div>}
          <div className='h-[1.5px] w-72 m-auto relative bg-[#808080]'>
            <h1 className='font-noto relative left-[46%] text-[#808080] w-6 text-center bg-[#F8F8F8] -top-3'>
              or
            </h1>
          </div>
          <ContinueWithGooglebtn />
          <TextftLink text="Don't have an account?" link="Register" onClick={() => navigate("/register")} />
        </div>
      </div>
      <div className="w-full h-[100vh] bg-[#5278FF] bg-[length:1000px_750px] bg-no-repeat bg-center bg-[url('./assets/LoginHero.png')]"></div>
    </div>
  );
}
