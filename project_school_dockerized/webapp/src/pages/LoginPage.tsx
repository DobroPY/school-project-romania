import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AuthContext from "..";


const LoginPage = () => {
  const auth = useContext(AuthContext);
        if( auth == true){
            window.location.replace("/dashboard");
        }
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

   async function submit(event){
    event.preventDefault();

        const user = {
            "email": email,
            "password":password
        };

        await axios.post('http://localhost:6868/auth',JSON.stringify(user),
        {
            headers:{
                withCredential: true,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then(async (res)=>{
              const token = res.data.accessToken;                
              document.cookie = `jwt=${token}`;
              document.cookie = `email=${email}`;
              document.location.reload();

              
        }).catch((error)=>{
          console.log(error);
          alert("An error occured!")
        })
        
    }

  return (
    <section className="flex justify-center items-center">
      <div className="w-4/12 min-h-max border-2 rounded-md p-8">
        <p className="">Welcome !</p>
        <p className="text-xl mt-10 font-bold">Sign in to </p>
        <p className="mt-4 font-normal">SCHOOL MANAGEMENT SYSTEM</p>

        <form onSubmit={submit} className="mt-10">
          <p className="font-medium">Email</p>
          <input
            onChange={onChangeEmail}
            className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
            placeholder="Enter your email"
            type="text"
          ></input>
          <p className="font-medium mt-8">Password</p>
          <input
            onChange={onChangePassword}
            className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
            placeholder="Enter your password"
            type="password"
          />
          <section className="flex justify-between mt-6">
            <section className="flex items-center justify-center">
              <input className="w-7  h-4" type="checkbox" />{" "}
              <p className="font-normal">Remember me</p>
            </section>
            <a className="underline-none cursor-pointer font-light">
              Forgot your password ?
            </a>
          </section>
          <button
            type="submit"
            className="w-full mt-10 bg-black text-white p-3 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
/*
   {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
 */
