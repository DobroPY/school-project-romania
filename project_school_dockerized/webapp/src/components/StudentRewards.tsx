import React, { useState } from "react";
import ProgressBarRounded from "./progressbar/ProgressBarRounded";
import GradesPages from "./stats-pages/GradesPages";
import ProgressBar from "./progressbar/ProgressBar";

const StudentRewards = (props) => {

    const preparation = '80%';
    const implication = '56%';

    const {user} = props;

    const subjectPages = [
        {
            name:"Preparation"
        },
        {
            name:"Implication"
        },
        {
            name:"Grade predictions"
        },{
            name:"Improvements"
        },
    ]

    const firstPage= subjectPages[0];

    const [currentPage, setCurrentPage] = useState(firstPage);

    const changePage = (page)=>{
        setCurrentPage(page);
    }

  return (
    <section>
    <div className="mx-[2%] mt-4">
        <div className="flex w-full bg-blue-200 rounded-lg p-2">
        <div className="flex border-r border-slate-400 pr-6" >
                    <svg
                      width="30"
                      height="30"
                      className="aspect-square object-contain object-center w-10 self-center overflow-hidden shrink-0 max-w-full rounded-[50%]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="username ml-2 text-left">
                      <p className="font-semibold text-sm">{user.first_name} {user.last_name}</p>
                      <p className="text-sm font-light">ID: {user.id}</p>
                    </div>
                  </div>

        <div className="ml-2">
            <div className="flex items-center">
                <p className="text-[#446ECB] text-lg">Preparation</p>
                <div className="w-[400px] h-[15px] bg-white ml-2 rounded-lg">
                <div className={`w-[80%] h-[15px] bg-[#446ECB]  rounded-lg`}>

                </div>
                </div>
                <p className="ml-2">{preparation}</p>
            </div>

            <div className="flex items-center">
                <p className="text-[#446ECB] text-lg">Implication</p>
                <div className="w-[400px] h-[15px] bg-white ml-2 rounded-lg">
                <div className={`w-[56%] h-[15px] bg-[#FFC42A]  rounded-lg`}>

                </div>
                </div>
                <p className="ml-2">{implication}</p>
            </div>
        </div>

        </div>

        <div className="flex border-b border-slate-300 mt-4">
        {subjectPages.map((sub, index)=>{
            return(
                <div>
                <p className={currentPage.name == sub.name ? "px-6 py-2 border-b border-purple-600 bg-purple-100 text-purple-600 cursor-pointer" : "cursor-pointer px-6 py-2"} onClick={()=>{ changePage(sub)}}>{sub.name}</p>
                </div>
                );
        })}
        </div>
        <div className="w-full border border-slate-400 rounded-lg min-h-[150px] mt-4">

        </div>

    </div>
    </section>
  );
};

export default StudentRewards;
