import React from "react";
import ForgotPassword from "../modals/ForgotPassword";

const Password = (props)=>{
    return(
        <section>
             <div className="titles ml-6 py-6 border-b ">
            <p className="font-semibold text-xl">Password</p>
            <p className="text-gray-500 mt-2"> Please enter your current password to change your password</p>
        </div>
        <div className="ml-6 py-6 flex border-b  justify-between">
            <p className="text-gray-500 w-[20%]">Current Password</p>
            <div className="flex w-[80%] items-center">
                <input className="border border-gray-500 rounded-lg p-3 outline-none w-[70%]" placeholder="" type="password" />
               <ForgotPassword/>
            </div>
        </div>
        <div className="ml-6 py-6 flex border-b  justify-between">
            <p className="text-gray-500 w-[20%]">New Password</p>
            <div className=" w-[80%]">
                <input className="border border-gray-500 rounded-lg p-3 outline-none w-[70%]" placeholder="" type="password" />
                <p className="text-sm">Your new password must be more than 8 characters</p>
            </div>
        </div>

        <div className="ml-6 py-6 flex border-b  justify-between">
            <p className="text-gray-500 w-[20%]">Confirm Password</p>
            <div className=" w-[80%]">
                <input className="border border-gray-500 rounded-lg p-3 outline-none w-[70%]" placeholder="" type="password" />
            </div>
        </div>
            
        <div className="actions flex float-right">
            <button className="border border-gray-300 p-3 rounded-lg w-[150px] my-2 mx-2 cursor-pointer">Cancel</button>
            <button className="border border-gray-300 p-3 rounded-lg w-[150px] my-2 mx-2 text-white bg-purple-600 cursor-pointer">Update password</button>
        </div>
        
        </section>
    );
}

export default Password;