import React, { useState } from "react";
import GradeDropdown from "../components/dropdowns/GradeDropdown";
import StudentGrades from "../components/StudentGrades";

const Grades = () => {

  const [students,setStudents] = useState ([
    {
      name:"Name 1",
      id:"123456"
    },{
      name:"Name 2",
      id:"234567"
    },
    {
      name:"Name 3",
      id:"345678"
    }, 
  ]);

  const[currentUser, setCurrentUser] = useState(students[0]);

  const changeUser = (user)=>{
    //change index with user
   setCurrentUser(user)
  }


  return (
    <section className="w-4/5">
      <p className="px-6 pt-6 font-semibold text-2xl">Grades</p>
      <p className="px-6 font-normal text-slate-500">
        Select Classrom and Check Individual grade of each student
      </p>
      <div className="ml-6 mt-10  flex">
        <select
          className="border-2 border-gray-200 rounded-md p-2 w-[200px] outline-none "
          id="classrooms"
        >
          <option value="Classroom 1">Classroom 1</option>
          <option value="Classroom 2">Classroom 2</option>
          <option value="Classroom 3">Classroom 3</option>
          <option value="Classroom 4">Classroom 4</option>
        </select>
      </div>

      <div className="flex w-[98%] mx-[1%] border border-slate-400 rounded-lg mt-6 mb-2 min-h-[calc(100vh_-_100px)]">
        <div className="student-list-details w-[30%]">
          <div className="title flex items-center">
            <p className="font-semibold text-xl pl-4 pr-1 py-4">Students</p>
            <p className="font-ligth text-lg text-slate-400">(32)</p>
          </div>

          <div className="input px-4 mt-2 ">
            <label
              htmlFor="search"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <svg
                width="15"
                height="15"
                className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 ml-2"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                name="search"
                placeholder="Student ID or name"
                className="form-input w-full outline-none pr-2 pl-8 py-2 border border-slate-400 rounded-lg"
              />
            </label>
          </div>

          <p className="px-4 mt-4 italic font-sm text-slate-400">
            Student list
          </p>

          <div className="student-list px-4 mt-2 max-h-[calc(100vh_-_100px)] overflow-auto scrollbar-thumb-slate-300 scrollbar-thin scrollbar-h-[15px]">
            {students.map((item, index) => {
              return (
                <div className={ currentUser.id == item.id ? "flex justify-between items-center py-1 bg-purple-100 text-purple-600 rounded-lg p-2 cursor-pointer" :"flex justify-between items-center py-1 p-2 cursor-pointer"} onClick={()=>{changeUser(item)}}>
                  <div className="flex">
                    <svg
                      width="25"
                      height="25"
                      className="aspect-square object-contain object-center w-10 self-center overflow-hidden shrink-0 max-w-full rounded-[50%]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="username ml-2 text-left">
                      <p className="font-semibold text-sm">Phonenix Baker</p>
                      <p className="text-sm font-light">ID: 123456</p>
                    </div>
                  </div>
                  <p>8.2</p>
                </div>
              );
            })}
          </div>

        </div>


        <div className="w-[68%] h-screen mx-[1%] mt-4 mb-2 border border-slate-400 rounded-lg">
          <StudentGrades user={currentUser} />
        </div>
      </div>
    </section>
  );
};

export default Grades;
