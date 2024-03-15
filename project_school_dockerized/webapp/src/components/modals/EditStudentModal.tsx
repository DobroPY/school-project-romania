import React, { useState } from "react";
import { updateStudent } from "../../apis/update";

const EditStudentModal = (props) => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  const student = props.student;
  const modules = props.modules;

  
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[parentOneName, setParentOneName] = useState("");
  const[parentTwoName, setParentTwoName] = useState("");
  const[middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [classroom, setClassRoom] = useState(""); // create and get a select of classrooms

  const submit = (event)=>{
    event.preventDefault();

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

    console.log(student.id)

    updateStudent(user, student.id)

    console.log(user);

    setShow(!show);


  }


  return (
    <section>
      <p
        onClick={showModal}
        className="flex items-center text-[#446ECB] cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          className="mr-[2px]"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9834 5.15878L12.8412 2.01722C12.7367 1.91272 12.6127 1.82983 12.4762 1.77328C12.3397 1.71673 12.1933 1.68762 12.0456 1.68762C11.8978 1.68762 11.7515 1.71673 11.615 1.77328C11.4785 1.82983 11.3545 1.91272 11.25 2.01722L2.57977 10.6875C2.47485 10.7915 2.39167 10.9154 2.33506 11.052C2.27844 11.1885 2.24953 11.3349 2.25001 11.4827V14.625C2.25001 14.9233 2.36853 15.2095 2.57951 15.4204C2.79049 15.6314 3.07664 15.75 3.37501 15.75H15.1875C15.3367 15.75 15.4798 15.6907 15.5853 15.5852C15.6907 15.4797 15.75 15.3366 15.75 15.1875C15.75 15.0383 15.6907 14.8952 15.5853 14.7897C15.4798 14.6842 15.3367 14.625 15.1875 14.625H8.10844L15.9834 6.74995C16.0879 6.64548 16.1708 6.52145 16.2274 6.38494C16.2839 6.24844 16.313 6.10212 16.313 5.95437C16.313 5.80661 16.2839 5.6603 16.2274 5.52379C16.1708 5.38728 16.0879 5.26325 15.9834 5.15878ZM6.51727 14.625H3.37501V11.4827L9.56251 5.29519L12.7048 8.43745L6.51727 14.625ZM13.5 7.64222L10.3584 4.49995L12.0459 2.81245L15.1875 5.95472L13.5 7.64222Z"
            fill="#446ECB"
          />
        </svg>
       {props.text}
      </p>
      {show ? (
        <div
          aria-hidden="true"
          className=" bg-white fixed top-0  right-0  m-auto w-[30%] max-w-[35%] h-screen overflow-scroll scrollbar-thumb-slate-300 scrollbar-thin scrollbar-h-[15px]  rounded-xl drop-shadow-2xl "
        >
          <div className="flex p-4 items-center justify-between">
            <p className="text-lg">Edit Profile</p>
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
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setFirstName(event.target.value)}} placeholder={student.first_name}></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Last Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setLastName(event.target.value)}} placeholder={student.last_name}></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Middle Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setMiddleName(event.target.value)}} placeholder={student.middle_name}></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Email</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setEmail(event.target.value)}} placeholder={student.email}></input>
                    
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Parent 1 Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setParentOneName(event.target.value)}} placeholder={""}></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Parent 2 Name</p>
                    <input className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setParentTwoName(event.target.value)}} placeholder={""}></input>
                    <p className="mx-[5%] text-sm text-gray-700 mt-4">Select Class</p>
                    <select className="w-[90%] mx-[5%] border border-gray-400 rounded-lg p-2 mt-2 outline-none" onChange={(event)=>{ setClassRoom(event.target.value)}}>
                        <option value="">Please Select a Class</option>
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
            <button className="border border-gray-300 p-2 w-[49%] rounded-lg bg-[#7E3EE5] text-white ml-[2%]" onClick={submit}>Save</button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default EditStudentModal;
