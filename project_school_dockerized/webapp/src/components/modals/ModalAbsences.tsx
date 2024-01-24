import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalAbsences = (props) => {
  const day = props.day;
  const index = props.index

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  return (
    <section>
         <div className="border-t border-r px-1  border-slate-300 h-[120px]" key={index} onClick={showModal}>
                        {day.active ? (
                            <>
                            <p className="font-semibold text-lg text-center">{day.date}</p>
                            <ul>
                            <li className="text-xs mt-1 flex items-center"><div className="point w-[7px] h-[7px] rounded-[50%] bg-red-600"></div> Ahmed Mohamed</li>
                            <li className="text-xs mt-1 flex items-center"><div className="point w-[7px] h-[7px] rounded-[50%] bg-red-600"></div> Ahmed Mohamed</li>
                            <li className="text-xs mt-1 flex items-center"><div className="point w-[7px] h-[7px] rounded-[50%] bg-red-600"></div> Ahmed Mohamed</li>
                            <li className="text-xs mt-1 flex items-center">+3</li>
                        </ul>
                        </>
                        ):(
                            <p className="font-semibold text-slate-400 text-lg text-center">{day.date}</p>
                        )}

                    </div>
      {show ? (
        <div
          aria-hidden="true"
          className=" bg-white fixed top-[20%] flex  right-0 left-0  m-auto w-[50%] max-w-[55%] min-h-[500px] max-h-[600px] border p-2 border-slate-400 rounded-xl shadow-2xl "
        >
          <div className="p-4 bg-blue-100 w-[25%] min-h-[500px] max-h-[600px] rounded-lg">
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-blue-700">2 January  2024</p>
                <p className="text-blue-700 pb-4 border-b border-slate-300 " >Tuesday</p>

                <p className="text-sm text-gray-500 pt-4">Subjects</p>
                {[1,2,3,4,5,6].map((sub,index)=>{
                    return(
                        <p className="py-2">Math</p>
                    );
                })}
                
          </div>
          <div className="w-[75%] ">
                <p className="px-4 py-2 font-semibold text-xl">Absent students (3)</p>
                <div className="grid grid-cols-2">
                        {[1,2,3].map((item, index)=>{
                            return(
                                <div className="border p-2 m-2 flex border-slate-400 rounded-lg">
                                    <svg
                width="25"
                height="25"
                className="aspect-square object-contain object-center w-10 self-center overflow-hidden shrink-0 max-w-full rounded-[50%]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div className="username ml-2 text-left">
                <p className="font-semibold text-sm">Phonenix Baker</p>
                <p className="text-sm font-light">ID: 123456</p>
              </div>
                                </div>
                            );
                        })}
                </div>

                <button onClick={showModal} className="border border-gray-300 rounded-lg px-4 py-2 bg-purple-100 text-purple-600 outline-none absolute bottom-0 right-0 mr-4 mb-4 ">Close</button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ModalAbsences;
