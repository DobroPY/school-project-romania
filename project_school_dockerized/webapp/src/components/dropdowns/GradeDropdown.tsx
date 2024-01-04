import React, { useState } from "react";

const GradeDropdown = () => {
  const [show, setShow] = useState(false);

  const showGrades = () => {
    setShow(!show);
  };

  const calcAverage = (grades) =>{
    // const sum = grades.reduce((prev, next)=>{ return prev + next});
    // const average = Number(sum/grades.length).toFixed(2)
    // return average
    
    return (8+9+10+7) / 4 ;
  }

  return (
    <section className="w-full min-h-fit border-2 border-gray-200 rounded-2xl shadow-xl mt-4 p-4">
      <div className=" flex items-center justify-between">
        <p className="font-semibold">Mathematiscs</p>
        <p className="average font-semibold">{calcAverage([])}</p>
        {show == false ? (
          <svg
            width="32"
            onClick={showGrades}
            height="15"
            className="cursor-pointer"
            viewBox="0 0 32 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.66947 0.695621C1.5621 -0.231874 3.00933 -0.231874 3.90196 0.695621L16 13.2662L28.098 0.695621C28.9907 -0.231874 30.4379 -0.231874 31.3305 0.695621C32.2232 1.62312 32.2232 3.12688 31.3305 4.05438L17.6162 18.3044C16.7236 19.2319 15.2764 19.2319 14.3838 18.3044L0.66947 4.05438C-0.223157 3.12688 -0.223157 1.62312 0.66947 0.695621Z"
              fill="black"
              fill-opacity="0.7"
            />
          </svg>
        ) : (
          <svg
            width="32"
            height="15"
            className="cursor-pointer"
            onClick={showGrades}
            viewBox="0 0 32 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.3305 18.3044C30.4379 19.2319 28.9907 19.2319 28.098 18.3044L16 5.73376L3.90196 18.3044C3.00933 19.2319 1.5621 19.2319 0.66947 18.3044C-0.22316 17.3769 -0.22316 15.8731 0.669469 14.9456L14.3838 0.695623C15.2764 -0.231873 16.7236 -0.231873 17.6162 0.695623L31.3305 14.9456C32.2232 15.8731 32.2232 17.3769 31.3305 18.3044Z"
              fill="black"
              fill-opacity="0.7"
            />
          </svg>
        )}
      </div>
      {show ? (
        <div className="grades flex mt-6 pl-2 items-center">
          <p className="text-base font-semibold ">8</p>
          <p className="text-base font-semibold ml-4">9</p>
          <p className="text-base font-semibold ml-4">10</p>
          <p className="text-base font-semibold ml-4">7</p>
          <svg
            width="16"
            height="16"
            className="ml-4 cursor-pointer"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C8.55229 0 9 0.447715 9 1V15C9 15.5523 8.55229 16 8 16C7.44772 16 7 15.5523 7 15V1C7 0.447715 7.44772 0 8 0Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H1C0.447715 9 0 8.55229 0 8Z"
              fill="black"
            />
          </svg>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default GradeDropdown;
