import React, { useState } from "react";
import SuccesStudent from "./SuccesStudent";

const CreateClassroomModal = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  const submit = (event)=>{
    const user = {
    }

    console.log(user);

    setShow(!show);
  }


  return (
    <section>
      <button onClick={showModal} className="border border-slate-300 rounded-md bg-purple-500 text-white outline-none p-2 mr-6">
          + Add new classroom
        </button>
      {show ? (
       <></>
      ) : null}
    </section>
  );
};

export default CreateClassroomModal;
