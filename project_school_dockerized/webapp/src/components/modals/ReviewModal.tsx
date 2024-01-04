import React, { useState } from "react";

const ReviewModal = () =>{
    const [show, setShow] = useState(false);
    const showModal = () =>{
        setShow(!show);
        
    }
    return(
        <section>
            <button onClick={showModal} className="bg-green-600 text-white rounded-lg px-4 py-2">
                  View Review
             </button>
                {show ? (
        <div aria-hidden="true" className=" bg-white fixed top-[25%]  right-0 left-0 m-auto w-[50%] max-w-[55%] h-fit max-h-fit border-2 border-slate-400 rounded-xl shadow-2xl ">
        <div className="top text-center">
              <p className="font-bold text-xl mt-4">Teacher Review</p>  
        </div>
        <div className="content">
            <p className="px-6 pb-10 mt-6 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur nostrum eius molestiae. Aliquid porro repudiandae libero possimus delectus quaerat nisi ex consequatur facilis! Officiis ullam sit asperiores est adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quisquam hic nemo in obcaecati sit nam, quas voluptatum distinctio porro, beatae vero fugit. Blanditiis aliquam sint quam, itaque quod id?</p>
        </div>
        <div className="footer flex justify-center">
            <button className="p-2 mb-4 w-1/6 bg-green-600 text-white font-bold border border-slate-300 rounded-xl" onClick={showModal}>Close</button>
        </div>
    </div>): null
    }
    </section>
    );
}

export default ReviewModal