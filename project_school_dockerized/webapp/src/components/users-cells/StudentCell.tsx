import React from "react";

const StudentCell = (props)=>{
    return (
        
        <div className="flex items-start w-full gap-2.5 px-4 py-2 border-b">
          <div className="flex items-center w-[40%]">
          <svg width="25" height="25" className="aspect-square object-contain object-center w-10 self-center overflow-hidden shrink-0 max-w-full rounded-[50%]"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg>
           <p className="text-slate-700 text-sm font-medium my-auto ml-2">Maria Barbara</p>
          </div>
          <div className="text-green-500 text-sm font-medium self-center w-[20%] my-auto">
            8.9
          </div>
          <div className="text-slate-700 text-sm font-medium self-center w-[20%] whitespace-nowrap my-auto">
            75%
          </div>
        
        <div className="text-slate-700 text-sm font-medium self-center w-[20%] my-auto">
          12
        </div>
        </div>
    
    );
}

export default StudentCell;