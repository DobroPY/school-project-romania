import React, { useState } from "react";
import SuccesStudent from "./SuccesStudent";
import { addStudent } from "../../apis/add";

const CreateStudentModal = (props) => {

  const { modules} = props;
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[middleName, setMiddleName] = useState("");
  const[parentOneName, setParentOneName] = useState("");
  const[parentTwoName, setParentTwoName] = useState("");
  const [classroom, setClassRoom] = useState(""); // create and get a select of classrooms
  const [email, setEmail] = useState("");

  const submit = (event)=>{
    const user = {
        fisrt_name: firstName,
        last_name:lastName,
        middle_name:middleName,
        email:email,
        class:classroom,
        parentOneName:parentOneName,
        parentTwoName:parentTwoName,
        status:1,
    }

    addStudent(user)

    console.log(user);
    alert("USER CREATED SUCCESFULLY!");

    setShow(!show);
  }


  return (
    <section>
      <button onClick={showModal} className="border border-slate-300 rounded-md bg-purple-500 text-white outline-none p-2 mr-6">
          + Add new student
        </button>
      {show ? (
        <div
          aria-hidden="true"
          className=" bg-white fixed top-0  right-0  m-auto w-[30%] max-w-[35%] h-screen overflow-scroll scrollbar-thumb-slate-300 scrollbar-thin scrollbar-h-[15px] rounded-xl drop-shadow-2xl "
        >
          <div className="flex p-4 items-center justify-between">
            <p className="text-lg">Add New Student</p>
            <svg
            onClick={showModal} 
            className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.281 18.2194C19.3507 18.2891 19.406 18.3718 19.4437 18.4629C19.4814 18.5539 19.5008 18.6515 19.5008 18.7501C19.5008 18.8486 19.4814 18.9462 19.4437 19.0372C19.406 19.1283 19.3507 19.211 19.281 19.2807C19.2114 19.3504 19.1286 19.4056 19.0376 19.4433C18.9465 19.4811 18.849 19.5005 18.7504 19.5005C18.6519 19.5005 18.5543 19.4811 18.4632 19.4433C18.3722 19.4056 18.2895 19.3504 18.2198 19.2807L12.0004 13.0604L5.78104 19.2807C5.64031 19.4214 5.44944 19.5005 5.25042 19.5005C5.05139 19.5005 4.86052 19.4214 4.71979 19.2807C4.57906 19.1399 4.5 18.9491 4.5 18.7501C4.5 18.551 4.57906 18.3602 4.71979 18.2194L10.9401 12.0001L4.71979 5.78068C4.57906 5.63995 4.5 5.44907 4.5 5.25005C4.5 5.05103 4.57906 4.86016 4.71979 4.71943C4.86052 4.5787 5.05139 4.49963 5.25042 4.49963C5.44944 4.49963 5.64031 4.5787 5.78104 4.71943L12.0004 10.9397L18.2198 4.71943C18.3605 4.5787 18.5514 4.49963 18.7504 4.49963C18.9494 4.49963 19.1403 4.5787 19.281 4.71943C19.4218 4.86016 19.5008 5.05103 19.5008 5.25005C19.5008 5.44907 19.4218 5.63995 19.281 5.78068L13.0607 12.0001L19.281 18.2194Z"
                fill="#344054"
              />
            </svg>
          </div>

          <div className="picture flex justify-center ">
          <svg
              width="100"
              height="100"
              className="mt-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <div className="inputs mt-10">
                <form action="">
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">First Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setFirstName(event.target.value)}} placeholder="First Name"></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Last Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setLastName(event.target.value)}} placeholder="Last Name"></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Middle Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setMiddleName(event.target.value)}} placeholder="Middle Name"></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Email</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setEmail(event.target.value)}} placeholder="Email"></input>
                    
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Parent 1 Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setParentOneName(event.target.value)}} placeholder="Parent Name"></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Parent 2 Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setParentTwoName(event.target.value)}} placeholder="Parent Name"></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Select Class</p>
                    <select className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setClassRoom(event.target.value)}}>
                        <option value="">Please select class</option>
                        {modules && modules.map((item, index)=>{
                          return(
                            <option key={index} value={item.id}>{item.name}</option>
                          );
                        })}
                    </select>    
                </form>
          </div>

          <div className="actions w-[90%] mx-[5%] flex justify-between mt-10 ">
            <button className="border border-gray-300 p-2 w-[49%] text-[#7E3EE5] rounded-lg" onClick={()=>{setShow(!show)}}>Close</button>
            <button className="border border-gray-300 p-2 w-[49%] rounded-lg bg-[#7E3EE5] text-white ml-[2%]" onClick={submit}>Add</button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CreateStudentModal;
