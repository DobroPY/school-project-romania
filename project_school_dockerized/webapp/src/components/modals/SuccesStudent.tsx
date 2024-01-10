import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SuccesStudent = (props) =>{

    const navigate = useNavigate();
    console.log(props.succes);
    
    const [show, setShow] = useState(true);
    const showModal = () =>{
        setShow(!show);
        
    }
    return(
        <section>
                {show ? (
        <div aria-hidden="true" className=" bg-white fixed top-[20%]  right-0 left-0  m-auto w-[20%] max-w-[25%] h-fit max-h-fit border p-2 border-slate-400 rounded-xl shadow-2xl ">
        <div className="top text-center flex justify-center">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="48" height="48" rx="24" fill="#DBFFE1"/>
<rect x="4" y="4" width="48" height="48" rx="24" stroke="#F0FFF3" stroke-width="8"/>
<path d="M31.9857 24.987C32.0554 25.0566 32.1108 25.1393 32.1485 25.2304C32.1862 25.3214 32.2057 25.419 32.2057 25.5176C32.2057 25.6161 32.1862 25.7137 32.1485 25.8048C32.1108 25.8958 32.0554 25.9785 31.9857 26.0482L26.7357 31.2982C26.6661 31.3679 26.5833 31.4233 26.4923 31.461C26.4012 31.4987 26.3036 31.5182 26.2051 31.5182C26.1065 31.5182 26.0089 31.4987 25.9179 31.461C25.8268 31.4233 25.7441 31.3679 25.6745 31.2982L23.4245 29.0482C23.2837 28.9075 23.2047 28.7166 23.2047 28.5176C23.2047 28.3186 23.2837 28.1277 23.4245 27.987C23.5652 27.8462 23.7561 27.7672 23.9551 27.7672C24.1541 27.7672 24.345 27.8462 24.4857 27.987L26.2051 29.7073L30.9245 24.987C30.9941 24.9172 31.0768 24.8619 31.1679 24.8242C31.2589 24.7864 31.3565 24.767 31.4551 24.767C31.5536 24.767 31.6512 24.7864 31.7423 24.8242C31.8333 24.8619 31.9161 24.9172 31.9857 24.987ZM37.4551 27.7676C37.4551 29.6959 36.8833 31.581 35.8119 33.1844C34.7406 34.7878 33.2178 36.0374 31.4362 36.7754C29.6547 37.5134 27.6943 37.7064 25.803 37.3302C23.9116 36.954 22.1744 36.0254 20.8108 34.6619C19.4472 33.2983 18.5186 31.561 18.1424 29.6697C17.7662 27.7784 17.9593 25.818 18.6973 24.0364C19.4352 22.2548 20.6849 20.7321 22.2883 19.6607C23.8917 18.5894 25.7767 18.0176 27.7051 18.0176C30.2901 18.0203 32.7685 19.0484 34.5964 20.8763C36.4242 22.7042 37.4524 25.1826 37.4551 27.7676ZM35.9551 27.7676C35.9551 26.1359 35.4712 24.5408 34.5647 23.1841C33.6582 21.8274 32.3697 20.77 30.8622 20.1456C29.3547 19.5211 27.6959 19.3578 26.0956 19.6761C24.4952 19.9944 23.0252 20.7802 21.8715 21.9339C20.7177 23.0877 19.9319 24.5577 19.6136 26.1581C19.2953 27.7584 19.4587 29.4172 20.0831 30.9247C20.7075 32.4322 21.7649 33.7207 23.1216 34.6272C24.4783 35.5337 26.0734 36.0176 27.7051 36.0176C29.8924 36.0151 31.9893 35.1451 33.536 33.5985C35.0826 32.0518 35.9526 29.9549 35.9551 27.7676Z" fill="#34CB4C"/>
</svg>
  
        </div>
        <div className="content text-center">
        <p className="font-bold text-xl mt-4">Student added succesfully</p>  
            <p className="px-6 pb-10 mt-2 font-normal">Student added succesfully you can view in student list</p>
        </div>
        <div className="footer flex justify-center">
            <button className="p-2 mb-4 w-[48%]  font-bold border border-slate-300 rounded-xl" onClick={showModal}>Close</button>
            <button className="p-2 mb-4 w-[48%] ml-[2%] bg-[#7E3EE5] text-white font-bold border border-slate-300 rounded-xl" onClick={()=>{navigate("13")}}>View</button>
        </div>
    </div>): null
    }
    </section>
    );
}

export default SuccesStudent