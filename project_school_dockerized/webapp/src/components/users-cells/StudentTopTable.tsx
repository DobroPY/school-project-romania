import React from "react";

const StudentTopTable = (props)=>{
    return (
        
        <div className="flex items-start w-full gap-2.5 px-4 py-2 border-b bg-slate-200">
          <div className="flex items-center w-[40%]">
           <p className="text-slate-700 text-sm font-medium text-left  ml-2">Student</p>
          </div>
          <div className="text-slate-700 text-sm w-[20%] font-medium text-left ">
            Grades
          </div>
          <div className="text-slate-700 text-sm w-[20%] font-medium whitespace-nowrap text-left ">
            Rewards
          </div>
        
        <div className="text-slate-700 text-sm w-[20%] text-left font-medium  ">
         Absences
        </div>
        </div>
    
    );
}

export default StudentTopTable;