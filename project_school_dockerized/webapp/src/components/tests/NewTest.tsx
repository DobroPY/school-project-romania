import React from "react";

const NewTest = () =>{
    return(
        <>
        {[1,2,3].map((item,index)=>{
            return(
                <div className="flex justify-between w-[98%] bg-gray-100 min-h-[30px] mx-[1%] rounded-lg my-2">
            <div className="flex items-center p-2">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#DCF2DF"/>
                     <path d="M34 13H32V12C32 11.7348 31.8946 11.4804 31.7071 11.2929C31.5196 11.1054 31.2652 11 31 11C30.7348 11 30.4804 11.1054 30.2929 11.2929C30.1054 11.4804 30 11.7348 30 12V13H26V12C26 11.7348 25.8946 11.4804 25.7071 11.2929C25.5196 11.1054 25.2652 11 25 11C24.7348 11 24.4804 11.1054 24.2929 11.2929C24.1054 11.4804 24 11.7348 24 12V13H20V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12V13H16C15.4696 13 14.9609 13.2107 14.5858 13.5858C14.2107 13.9609 14 14.4696 14 15V34C14 35.0609 14.4214 36.0783 15.1716 36.8284C15.9217 37.5786 16.9391 38 18 38H32C33.0609 38 34.0783 37.5786 34.8284 36.8284C35.5786 36.0783 36 35.0609 36 34V15C36 14.4696 35.7893 13.9609 35.4142 13.5858C35.0391 13.2107 34.5304 13 34 13ZM29 30H21C20.7348 30 20.4804 29.8946 20.2929 29.7071C20.1054 29.5196 20 29.2652 20 29C20 28.7348 20.1054 28.4804 20.2929 28.2929C20.4804 28.1054 20.7348 28 21 28H29C29.2652 28 29.5196 28.1054 29.7071 28.2929C29.8946 28.4804 30 28.7348 30 29C30 29.2652 29.8946 29.5196 29.7071 29.7071C29.5196 29.8946 29.2652 30 29 30ZM29 26H21C20.7348 26 20.4804 25.8946 20.2929 25.7071C20.1054 25.5196 20 25.2652 20 25C20 24.7348 20.1054 24.4804 20.2929 24.2929C20.4804 24.1054 20.7348 24 21 24H29C29.2652 24 29.5196 24.1054 29.7071 24.2929C29.8946 24.4804 30 24.7348 30 25C30 25.2652 29.8946 25.5196 29.7071 25.7071C29.5196 25.8946 29.2652 26 29 26Z" fill="#34CB4C"/>
                 </svg>
                 <div className="ml-4">
                    <p className="font-semibold">Logical Mathematical Intelligence</p>
                    <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                 </div>

            </div>

            <div className="flex items-center p-2">
                <p className="text-gray-500 mr-4">18/12/2024</p>
                <button  className="bg-purple-500 text-white ml-2 px-4 min-w-[100px] h-[40px] rounded-lg">Assign</button>
            </div>
        </div>
            );
        })}
        </>
    );
}

export default NewTest;