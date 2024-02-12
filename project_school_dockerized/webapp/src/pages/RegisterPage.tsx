import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AuthContext from "..";

const RegisterPage = () => {
  const auth = useContext(AuthContext);
        if( auth == true){
            window.location.replace("/login");
        }
  const navigate = useNavigate();
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [middle_name, setmiddle_name] = useState("");
  const [last_name, setlast_name] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangefirst_name = (event) => {
    setfirst_name(event.target.value);
  };
  const onChangemiddle_name = (event) => {
    setmiddle_name(event.target.value);
  };
  const onChangelast_name = (event) => {
    setmiddle_name(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submit = (event) => {

    console.log('---------------G');
    event.preventDefault();

    const user = {
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      email: email,
      password: password,
      status:1,
    };
    console.log(user);
    axios.post("http://localhost:6868/register", JSON.stringify(user),
    {
      headers:{
          withCredential: false,
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
   }
  }
    ).then((res)=>{
      console.log('---------------I');
      navigate("/login");
      
    })
    
  };
  return (
    <section className="flex justify-center items-center">
      <div className="w-4/12 min-h-max border-2 rounded-md p-8">
        <p className="">Welcome !</p>
        <p className="text-xl mt-10 font-bold">Register in to </p>
        <p className="mt-4 font-normal">SCHOOL MANAGEMENT SYSTEM</p>

        <form className="mt-10" onSubmit={submit}>
          <p className="font-medium">First Name</p>
          <input
            onChange={onChangefirst_name}
            className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
            placeholder="Enter your first name"
            type="text"
          ></input>
          <p className="font-medium mt-8">Middle Name</p>
          <input
            onChange={onChangemiddle_name}
            className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
            placeholder="Enter your middle name"
            type="text"
          ></input>
          <p className="font-medium mt-8">Last Name</p>
          <input
            onChange={onChangelast_name}
            className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
            placeholder="Enter your last name"
            type="text"
          ></input>
          <p className="font-medium mt-8">Email</p>
          <input
            onChange={onChangeEmail}
            className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
            placeholder="Enter your email"
          ></input>
          <p className="font-medium mt-8">Password</p>
          <input
            onChange={onChangePassword}
            className=" mt-4 w-full h-12 border-2 border-gray-300 rounded p-2 outline-none"
            placeholder="Enter your password"
            type="password"
          />
          <button
            type="submit"
            className="w-full mt-10 bg-black text-white p-3 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
