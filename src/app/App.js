import React from 'react';
import './App.css';

const Login = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-[46.2%] bg-[#1AEBB7]"></div>
      <div className="w-[60%] bg-white"></div>

      <div className="w-[1251px] h-[739px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-lg rounded-lg">
        <div className="w-[40%] bg-[#1AEBB7] flex justify-center items-center">
          <img 
            src="/images/image.png" 
            alt="Lion" 
            className="w-[500px] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 bg-white p-[3%] flex flex-col justify-center items-center">
          <h2 className="text-[80px] leading-[97.52px] tracking-[6px] font-bold text-left mb-4">
            <div className="text-[50px] font-bold text-[#000000B2] flex justify-center items-center">
              <span>L</span>
              <span>O</span>
              <span>G</span>
              <span>I</span>
              <span>N</span>
            </div>
          </h2>

          <form className="w-full max-w-md">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2 text-[#555]"></label>
              <input
                type="email"
                id="email"
                className="w-full p-[0.8rem] text-base border border-black outline-none focus:ring-2 focus:ring-[#4C6EF5]"
                placeholder="Username"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm mb-2 text-[#555]"></label>
              <input
                type="password"
                id="password"
                className="w-full p-[0.8rem] text-base border border-black outline-none focus:ring-2 focus:ring-[#4C6EF5]"
                placeholder="Password"
              />
            </div>

           
            <button
              type="submit"
              className="h-[60.74px] bg-[#1AEBB7] mt-5 mx-0 w-[233.27px] border border-black flex justify-center items-center"
            >
              <p className="text-[25px] font-bold text-white">LOGIN</p>
            </button>
          </form>

         
          <div className="flex flex-col gap-2 mt-20 items-end absolute top-[400px] right-[12%]">
       <p className="text-[20px] font-normal leading-[24.38px] text-left">Forgot password?</p>
       <p className="text-[20px] font-normal leading-[24.38px] text-right">
       <a href="#">Register</a>
       </p>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
