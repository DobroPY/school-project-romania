import { useState } from "react";




const RegisterPage = () => {
    return (
        
        <section className="flex justify-center items-center">
        <div className="w-4/12 min-h-max border-2 rounded-md p-8">
          <p className="">Welcome !</p>
          <p className="text-xl mt-10 font-bold">Register in to </p>
          <p className="mt-4 font-normal">SCHOOL MANAGEMENT SYSTEM</p>
  
          <form className="mt-10">
            <p className="font-medium">First Name</p>
            <input
              className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
              placeholder="Enter your first name"
              type="text"
            ></input>
            <p className="font-medium mt-8">Middle Name</p>
            <input
              className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
              placeholder="Enter your middle name"
              type="text"
            ></input>
            <p className="font-medium mt-8">Last Name</p>
            <input
              className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
              placeholder="Enter your last name"
              type="text"
            ></input>
            <p className="font-medium mt-8">Email Name</p>
            <input
              className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
              placeholder="Enter your email"
            ></input>
            <p className="font-medium mt-8">Password</p>
            <input
              className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
              placeholder="Enter your password"
              type="password"
            />
            <button className="w-full mt-10 bg-black text-white p-3 rounded-md">
              Register
            </button>
          </form>
        </div>
      </section>
    );
};

export default RegisterPage;
