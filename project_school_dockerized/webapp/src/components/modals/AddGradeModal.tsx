import React, { useState } from "react";

const AddGradeModal = (props) =>{
    const [show, setShow] = useState(false);
    const showModal = () =>{
        setShow(!show);
        
    }
    return(
        <section>
             <button className="text-white bg-[#0D659E] p-2 rounded-lg" onClick={showModal}>Add Grade</button> 
                {show ? (
        <div aria-hidden="true" className=" bg-white fixed top-[25%]  right-0 left-0 m-auto w-[30%] max-w-[35%] h-fit max-h-fit border border-slate-400 rounded-xl shadow-2xl ">
        <div className="top text-left px-6">
              <p className="font-semibold text-lg text-black mt-4 ">Add Grades</p>  
        </div>
        <div className="content pl-6  mt-4 ">
            <p className="text-slate-500 font-normal">Subject</p>
            <div className="w-[98%] p-2 bg-gray-200 text-black font-normal rounded-lg mr-[1%] mt-2">
                <p>English</p>
            </div>
            <p className="text-slate-500 font-normal mt-2">Grade</p>
            <input type="text" className="w-[98%] p-2 text-black font-normal mr-[1%] mt-2 outline-none border border-slate-300 rounded-lg" placeholder="Enter grade here" />
         </div>
        <div className="footer flex  mt-4 justify-end mr-2">
        <button className="p-2 mb-4 w-2/6  text-black border border-slate-300 rounded-xl mr-2 outline-none" onClick={showModal}>Cancel</button>
        
            <button className="p-2 mb-4 w-2/6 bg-[#7E3EE5] text-white border border-slate-300 rounded-xl outline-none" onClick={showModal}>Add</button>
        </div>
    </div>): null
    }
    </section>
    );
}

export default AddGradeModal;