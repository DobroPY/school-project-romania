import React, { useEffect, useState } from "react";
import ProgressBarRounded from "./progressbar/ProgressBarRounded";
import GradesPages from "./stats-pages/GradesPages";

const StudentGrades = (props) => {

  const {user} = props;
  
 

    const subjectPages = user.modules;

    

    const [currentPage, setCurrentPage] = useState(subjectPages[0]);

    const changePage = (page)=>{
        setCurrentPage(page);
    }




  return (
    <section>
    <div className="flex px-[2%] justify-between">
      <div className="text-center w-[34%] rounded-lg bg-blue-100 mt-2 mb-2">
        <div className="flex justify-center">
          <svg
            width="40"
            height="40"
            className="mt-2"
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

        <p className="mt-4 font-semibold mb-1">{user.first_name} {user.last_name}</p>
        <p className="font-normal text-sm text-slate-500">ID:{user.id}</p>

        <div className="flex justify-center mt-2 pb-4">
          <p className="bg-blue-200 px-3 py-1 border border-gray-200 rounded-xl text-blue-600">
            {user.class}
          </p>
        </div>

        <div className="bg-white w-[72%] mx-[12%] min-h-[50px] rounded-md flex justify-center pb-1 pt-1">
          <div className="flex justify-evenly mb-2 items-center">
            <p className="pr-4"> Grades Average</p>
            <div className="pr-2">
              <ProgressBarRounded percentage={Number.isNaN(user.gradesAverage) ? 0 : user.gradesAverage * 10} background="#0D659E" />
            </div>
          </div>
        </div>
        <br />
      </div>

      <div className="w-[64%] min-h-[200px] border border-slate-400 rounded-lg my-2"></div>


    
    </div>

    <div className="mx-[2%] mt-4">
        <p className="font-semibold text-lg">Grade Details</p>
        <div className="flex border-b border-slate-300 mt-4">
        {subjectPages && subjectPages.map((sub, index)=>{
            return(
                <div>
                <p className={ currentPage.name == sub.name  ? "px-6 py-2 border-b border-purple-600 bg-purple-100 text-purple-600 cursor-pointer" : "cursor-pointer px-6 py-2"} onClick={()=>{ changePage(sub)}}>{sub.name}</p>
                </div>
                );
        })}
        </div>
        <GradesPages page={currentPage} user={user} />

    </div>
    </section>
  );
};

export default StudentGrades;
