import React from "react";
import SelectGrades from "../select/SelectGrades";

const GradesStats = (props)=>{
    return(
        <div className="flex container w-full mt-4">
            <div className="w-[35%]">
                <div className=" flex  justify-between mr-4 p-3 rounded-lg  bg-slate-200">
                    <p className="text-[#0D659E] font-semibold">Grade Average</p>
                    <p className="text-[#0D659E] font-bold">8.6</p>
                </div>
                <p className="mt-6 text-sm text-gray-400 italic">Subject wise grades</p>
                <SelectGrades />
                <SelectGrades />
                <SelectGrades />
                <SelectGrades />
                <SelectGrades />
            </div>
            <div className="w-[65%] border border-slate-400 rounded-lg min-h-[100px]">
                <p className="p-4 font-bold">Grade Average <small className="font-normal">(by subject)</small></p>
            </div>
        </div>
    );
}

export default GradesStats;