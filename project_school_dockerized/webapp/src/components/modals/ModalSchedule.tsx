import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalSchedule = (props) => {
  const day = props.day;
  const index = props.index

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  return (
    <section>
         <div className="border-t border-r px-1  border-black h-[120px] cursor-pointer" onClick={showModal} key={index}>
                        {day.active ? (
                            <>
                            <p className="font-semibold text-lg text-center">{day.date}</p>
                            <ul>
                            <li className="border-l-4 border-green-500 text-xs mt-1">Math</li>
                            <li className="border-l-4 border-green-500 text-xs mt-1">Sport</li>
                            <li className="border-l-4 border-green-500 text-xs mt-1">English</li>
                            <li className="border-l-4 text-xs mt-1">+3</li>
                        </ul>
                        </>
                        ):(
                            <p className="font-semibold text-slate-400 text-lg text-center">{day.date}</p>
                        )}

                    </div>
      {show ? (
        <div
          aria-hidden="true"
          className=" bg-white fixed top-[20%] flex  right-0 left-0  m-auto w-[20%] max-w-[55%] h-fit max-h-fit border px-2 pt-2 border-slate-400 rounded-xl shadow-2xl "
        >
          <div className="px-2 w-full min-h-[400px] max-h-[500px] rounded-lg">
                <p className="font-semibold mb-4">Schedule</p>
                <div className="bg-blue-200 rounded-md  border-b border-slate-300 p-2 mb-4 ">
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-blue-700">2 January  2024 , Tuesday</p>
                </div>

                {[1,2,3,4,5,6].map((sub,index)=>{
                    return(
                        <p className="py-2">Math</p>
                    );
                })}
                <div className="flex justify-center">
                 <button onClick={showModal} className="border border-gray-300 rounded-lg px-4 py-2 mt-2 mb-2 bg-purple-100 text-purple-600 outline-none mx-auto ">Close</button>
                 </div>
                
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ModalSchedule;
