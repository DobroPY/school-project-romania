import React, { useState } from "react";

const PasswordSucces = () => {
  const [succes, setSuccess] = useState(false);

  return (
    <>
      {succes ? (
        <div className="succes pb-6">

          <div className="flex justify-center mt-6">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.16602L12.3597 14.834C13.1311 15.374 13.5168 15.644 13.9363 15.7485C14.3069 15.8409 14.6944 15.8409 15.065 15.7485C15.4845 15.644 15.8702 15.374 16.6416 14.834L26.1673 8.16602M8.43398 23.3327H20.5673C22.5275 23.3327 23.5076 23.3327 24.2563 22.9512C24.9149 22.6156 25.4503 22.0802 25.7858 21.4217C26.1673 20.673 26.1673 19.6929 26.1673 17.7327V10.266C26.1673 8.30583 26.1673 7.32574 25.7858 6.57705C25.4503 5.91848 24.9149 5.38305 24.2563 5.04749C23.5076 4.66602 22.5275 4.66602 20.5673 4.66602H8.43398C6.4738 4.66602 5.49371 4.66602 4.74502 5.04749C4.08645 5.38305 3.55102 5.91848 3.21546 6.57705C2.83398 7.32574 2.83398 8.30583 2.83398 10.266V17.7327C2.83398 19.6929 2.83398 20.673 3.21546 21.4217C3.55102 22.0802 4.08645 22.6156 4.74502 22.9512C5.49371 23.3327 6.4738 23.3327 8.43398 23.3327Z"
                stroke="#7F56D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text text-center mt-4">
                <p className="font-semibold text-lg">Check your email</p>
                <p className="text-sm text-gray-500 mt-1">We sent a password reset link to </p>
                <p className="text-sm text-gray-500 mt-1">olivia@untitledui.com</p>
                
          </div>
 
          <button className="outline-none p-3 text-white bg-purple-600 w-[80%] mx-[10%] mt-4 rounded-lg">Open the email app</button>

          <div className="bottom-text text-center mt-4">
                <p>Didn't receive the email? <span className="text-purple-600">Click to resend</span></p>
          </div>

        </div>
      ) : (
        <div className="succes pb-6">

        <div className="flex justify-center mt-6">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8333 10.4999C19.8333 9.9028 19.6055 9.30568 19.1499 8.85008C18.6943 8.39447 18.0972 8.16667 17.5 8.16667M17.5 17.5C21.366 17.5 24.5 14.366 24.5 10.5C24.5 6.63401 21.366 3.5 17.5 3.5C13.634 3.5 10.5 6.63401 10.5 10.5C10.5 10.8193 10.5214 11.1336 10.5628 11.4415C10.6309 11.948 10.6649 12.2013 10.642 12.3615C10.6181 12.5284 10.5877 12.6184 10.5055 12.7655C10.4265 12.9068 10.2873 13.046 10.009 13.3243L4.04673 19.2866C3.84496 19.4884 3.74407 19.5893 3.67192 19.707C3.60795 19.8114 3.56081 19.9252 3.53224 20.0442C3.5 20.1785 3.5 20.3212 3.5 20.6065V22.6333C3.5 23.2867 3.5 23.6134 3.62716 23.863C3.73901 24.0825 3.91749 24.261 4.13701 24.3728C4.38657 24.5 4.71327 24.5 5.36667 24.5H8.16667V22.1667H10.5V19.8333H12.8333L14.6757 17.991C14.954 17.7127 15.0932 17.5735 15.2345 17.4945C15.3816 17.4123 15.4716 17.3819 15.6385 17.358C15.7987 17.3351 16.052 17.3691 16.5585 17.4372C16.8664 17.4786 17.1807 17.5 17.5 17.5Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </div>
        <div className="text text-center mt-4">
              <p className="font-semibold text-lg">Forgot your password?</p>
              <p className="text-sm text-gray-500 mt-1">No worries, we’ll send you reset instructions.</p>
              
        </div>

        <div className="mx-[10%] mt-4">
            <p className="text-sm text-gray-500">Email id</p>
            <input className="rounded-lg border border-gray-400 p-2 outline-none mt-2 w-[100%]" placeholder="Enter your email"/>

        </div>

        <button className="outline-none p-3 text-white bg-purple-600 w-[80%] mx-[10%] mt-10 rounded-lg">Reset password</button>

      </div>
      )}
    </>
  );
};

export default PasswordSucces;
