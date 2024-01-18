import React from "react";
import AddGradeModal from "../modals/AddGradeModal";
import EditGradeModal from "../modals/EditGradeModal";

const GradesPages = (props)=>{
    return(
        <section>
        <div className="flex w-full items-center justify-around text-[#0D659E] font-semibold rounded-lg bg-slate-200 mt-4 p-4">
            <p className="font-normal">Grade Average</p>
            <p>8.5</p>
           <AddGradeModal />
        </div>

        <div className="grid grid-cols-2 gap-x-4 w-full mt-2">
            {[1,2,3,4,5,6].map((item,index)=>{
                return(
                    <div className="flex justify-between items-center font-semibold p-4 border border-slate-400 rounded-lg mt-3">
                        <p>Exam 1</p>
                        <div className=" flex items-center">
                            <p className="mr-4">6.2</p>

                            <EditGradeModal/>

                         </div>   
                    </div>
                );
            })}
        </div>
        </section>
    );
}

export default GradesPages;