import React, { useState } from "react";
import { updateGrades } from "../../apis/update";
import { deleteGrade } from "../../apis/delete";

const EditGradeModal = (props) =>{
    const [show, setShow] = useState(false);
    const [newGrade, setNewGrade] :any = useState("");
    const showModal = () =>{
        setShow(!show);
        
    }
    
    const handleChange = (event)=>{
        const value = parseInt(event.target.value);
        setNewGrade(value);

        console.log("NEW GRADE:",value);
        
    }
    const {grade , user, module} = props;

    const editGrade = ()=>{
        console.log("grade", grade);
        console.log("user", user);
        console.log("module", module);
        const date = new Date();
        const data = {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            email: user.email,
            classroom: user.class,
            module: module.name,
            grade: newGrade,
            reward:"1",
        }
        console.log(data, grade.id, user.email);
        
        updateGrades(data, grade.id, user.email)
        
        setShow(!show)
    }

    const deleteGrades = ()=>{
        deleteGrade(grade.id);
        setShow(!show);
    }

    return(
        <section>
        <svg onClick={showModal} width="17" className="cursor-pointer" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7594 4.73184L12.268 1.24122C12.1519 1.12511 12.0141 1.03301 11.8624 0.970178C11.7107 0.907342 11.5482 0.875 11.384 0.875C11.2198 0.875 11.0572 0.907342 10.9056 0.970178C10.7539 1.03301 10.6161 1.12511 10.5 1.24122L0.866412 10.8748C0.749834 10.9905 0.657407 11.1281 0.594506 11.2798C0.531604 11.4315 0.499482 11.5942 0.500006 11.7584V15.2498C0.500006 15.5813 0.631702 15.8993 0.866123 16.1337C1.10054 16.3681 1.41849 16.4998 1.75001 16.4998H14.875C15.0408 16.4998 15.1997 16.434 15.3169 16.3168C15.4342 16.1995 15.5 16.0406 15.5 15.8748C15.5 15.7091 15.4342 15.5501 15.3169 15.4329C15.1997 15.3157 15.0408 15.2498 14.875 15.2498H7.00938L15.7594 6.49981C15.8755 6.38373 15.9676 6.24592 16.0304 6.09425C16.0933 5.94257 16.1256 5.78 16.1256 5.61583C16.1256 5.45165 16.0933 5.28908 16.0304 5.13741C15.9676 4.98573 15.8755 4.84792 15.7594 4.73184ZM5.24141 15.2498H1.75001V11.7584L8.62501 4.8834L12.1164 8.37481L5.24141 15.2498ZM13 7.49122L9.50938 3.99981L11.3844 2.12481L14.875 5.61622L13 7.49122Z" fill="#0D659E"/>
</svg>
           {show ? (
   <div aria-hidden="true" className=" bg-white fixed top-[25%]  right-0 left-0 m-auto w-[30%] max-w-[35%] h-fit max-h-fit border border-slate-400 rounded-xl shadow-2xl ">
   <div className="top text-left px-6">
         <p className="font-semibold text-lg text-black mt-4 ">Edit Grades</p>  
   </div>
   <div className="content pl-6  mt-4 ">
       <p className="text-slate-500 font-normal">Subject</p>
       <div className="w-[98%] p-2 bg-gray-200 text-black font-normal rounded-lg mr-[1%] mt-2">
           <p>{module.name}</p>
       </div>
       <p className="text-slate-500 font-normal mt-2">Grade</p>
       <input type="text" onChange={handleChange} className="w-[98%] p-2 text-black font-normal mr-[1%] mt-2 outline-none border border-slate-300 rounded-lg" placeholder="Enter grade here" />
    </div>
   <div className="footer flex  mt-4 justify-between mr-2">
   <button className="p-2 mb-4 w-2/6 text-red-600 rounded-xl ml-2 outline-none" onClick={deleteGrades}>Delete</button>
   
   <button className="p-2 mb-4 w-2/6  text-black border border-slate-300 rounded-xl mr-2 outline-none" onClick={showModal}>Cancel</button>
   
       <button className="p-2 mb-4 w-2/6 bg-[#7E3EE5] text-white border border-slate-300 rounded-xl outline-none" onClick={editGrade}>Add</button>
   </div>
</div>): null
}
</section>
    );
}

export default EditGradeModal;