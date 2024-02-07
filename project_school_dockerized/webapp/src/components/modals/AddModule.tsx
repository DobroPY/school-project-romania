import React, { useState } from "react";
import SuccesStudent from "./SuccesStudent";

const AddModule = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  

  const submit = (event)=>{
    


    setShow(!show);
  }


  return (
    <section>
      <button onClick={showModal} className="border border-slate-300 rounded-md bg-purple-500 text-white outline-none p-2 mr-6">
          + Add new module
        </button>
      {show ? (
        <div
          aria-hidden="true"
          className=" bg-white fixed top-0  right-0  m-auto w-[30%] max-w-[35%] h-full max-h-fit rounded-xl drop-shadow-2xl "
        >
          
        </div>
      ) : null}
    </section>
  );
};

export default AddModule;
