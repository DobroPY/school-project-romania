import React from "react";

const MyDetails = (props)=>{
    return(
        <section>
        <div className="titles ml-6 py-6 border-b ">
            <p className="font-semibold text-xl">Personal info</p>
            <p className="text-gray-500 mt-2"> Update your photo and personal details here.</p>
        </div>
        <div className="ml-6 py-6 flex border-b items-center justify-between">
            <p className="text-gray-500 text-lg w-[20%]">Name</p>
            <div className="flex w-[80%]">
                <input className="border border-gray-500 rounded-lg p-3 outline-none w-[40%]" placeholder="Jane" />
                <input className="border border-gray-500 rounded-lg p-3 outline-none w-[40%] ml-[5%]" placeholder="Cooper" />
            </div>
        </div>
        <div className="ml-6 py-6 flex border-b items-center justify-between">
            <p className="text-gray-500 text-lg w-[20%]">Email address</p>
            <div className="flex w-[80%]">
                <input className="border border-gray-500 rounded-lg p-3 outline-none w-[85%]" placeholder="jane.cooper@gmail.com" />
            </div>
        </div>

        <div className="ml-6 py-6 flex border-b justify-between">
            <div className="w-[30%] flex items-center">
            <div>
            <p className="text-gray-500 text-lg ">Your photo</p>
            <small className="text-gray-400">This will displayed on your profile</small>
            </div>
            <svg
              width="70"
              height="70"
              className="ml-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            </div>
            <div className="flex w-[70%]">
                 <div className="w-[70%] border border-gray-400 flex justify-center rounded-lg pb-6">
                 <div className="image-upload mt-6">
                        <label htmlFor="file-input" className="flex justify-center">
                        <svg width="20" height="20" className="cursor-pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66699 13.3333L10.0003 10M10.0003 10L13.3337 13.3333M10.0003 10V17.5M16.667 13.9524C17.6849 13.1117 18.3337 11.8399 18.3337 10.4167C18.3337 7.88536 16.2816 5.83333 13.7503 5.83333C13.5682 5.83333 13.3979 5.73833 13.3054 5.58145C12.2187 3.73736 10.2124 2.5 7.91699 2.5C4.46521 2.5 1.66699 5.29822 1.66699 8.75C1.66699 10.4718 2.3632 12.0309 3.48945 13.1613" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                                                    </label>

                                                    <input id="file-input" className="w-0 h-0 invisible" type="file" />
                            <div> 
                            <label htmlFor="file-input" className="flex justify-center">
                            <em className="text-purple-500 font-semibold cursor-pointer mr-2">Click to upload</em>  or drag and drop
                            </label>

                                                    <input id="file-input" className="w-0 h-0 invisible" type="file" />
                                                    <small>SVG, PNG, JPG or GIF (max. 800x400px)</small>
                            </div>
                        </div>

                 </div>
            </div>
        </div>

        <div className="actions flex float-right">
            <button className="border border-gray-300 p-3 rounded-lg w-[150px] my-2 mx-2 cursor-pointer">Cancel</button>
            <button className="border border-gray-300 p-3 rounded-lg w-[150px] my-2 mx-2 text-white bg-purple-600 cursor-pointer">Save</button>
        </div>
        </section>
    );
}

export default MyDetails;