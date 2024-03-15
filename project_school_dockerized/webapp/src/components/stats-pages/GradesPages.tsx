import React from "react";
import AddGradeModal from "../modals/AddGradeModal";
import EditGradeModal from "../modals/EditGradeModal";

const GradesPages = (props)=>{


    const module = props.page;
    const grades = props.user.grades;
    const user = props.user;

    const calculateGradesAverage = (grades) =>{
        let sum = 0;
        let count = 0;
        for( let i =0; i < grades.length; i++){
          sum += parseInt(grades[i].grade);
          count++;
        }
    
        const average = sum / count;
        return average;
        
    }

    const currentModuleGrades = grades ? grades.filter((grade)=> grade.module == module.id) : [];
    
    

    return(
        <section>
        <div className="flex w-full items-center justify-around text-[#0D659E] font-semibold rounded-lg bg-slate-200 mt-4 p-4">
            <p className="font-normal">Grade Average:</p>
            <p>{currentModuleGrades.length > 0 ? calculateGradesAverage(grades) : ""}</p>
           <AddGradeModal module={module} user={user} />
        </div>

        <div className="grid grid-cols-2 gap-x-4 w-full mt-2">
            {currentModuleGrades && 
            currentModuleGrades.map((item,index)=>{
                return(
                    <div className="flex justify-between items-center font-semibold p-4 border border-slate-400 rounded-lg mt-3">
                        <p>Exam {index + 1}</p>
                        <div className=" flex items-center">
                            <p className="mr-4">{item.grade
                            }</p>

                            <EditGradeModal grade={item} module={module} user={user}/>

                         </div>   
                    </div>
                );
            })}
        </div>
        </section>
    );
}

export default GradesPages;