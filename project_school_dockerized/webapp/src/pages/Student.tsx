import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import ProgressBarRounded from "../components/progressbar/ProgressBarRounded";
import GradesStats from "../components/stats-pages/GradesStats";
import RewardsStats from "../components/stats-pages/RewardsStats";
import AttendaceStats from "../components/stats-pages/AttendanceStats";
import EditStudentModal from "../components/modals/EditStudentModal";

const Student = () => {

  const [currentPage, setCurrentPage] = useState("Grades");

  const statsPages =[
    {
      name:"Grades",
    },
    {
      name:"Rewards",
    },
    {
      name:"Attendance",
    },
  ];

  const changePage = (name) =>{
    setCurrentPage(name);
    console.log(name);
    
  }
  const navigate = useNavigate();
  return (
    <section className="w-4/5">
      <p className="title p-[2%] font-semibold text-xl flex items-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          onClick={() => {
            window.location.replace("/students");
          }}
          className="mr-1 cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2496 11C19.2496 11.1824 19.1771 11.3572 19.0482 11.4862C18.9193 11.6151 18.7444 11.6875 18.5621 11.6875H5.09652L10.111 16.7011C10.1748 16.765 10.2255 16.8408 10.2601 16.9243C10.2947 17.0077 10.3124 17.0972 10.3124 17.1875C10.3124 17.2779 10.2947 17.3673 10.2601 17.4508C10.2255 17.5342 10.1748 17.61 10.111 17.6739C10.0471 17.7378 9.97126 17.7885 9.88781 17.823C9.80435 17.8576 9.7149 17.8754 9.62456 17.8754C9.53423 17.8754 9.44478 17.8576 9.36132 17.823C9.27787 17.7885 9.20203 17.7378 9.13816 17.6739L2.95066 11.4864C2.88674 11.4226 2.83603 11.3467 2.80143 11.2633C2.76683 11.1798 2.74902 11.0904 2.74902 11C2.74902 10.9097 2.76683 10.8202 2.80143 10.7367C2.83603 10.6533 2.88674 10.5775 2.95066 10.5136L9.13816 4.32611C9.26716 4.19711 9.44213 4.12463 9.62456 4.12463C9.807 4.12463 9.98197 4.19711 10.111 4.32611C10.24 4.45511 10.3124 4.63008 10.3124 4.81252C10.3124 4.99495 10.24 5.16992 10.111 5.29892L5.09652 10.3125H18.5621C18.7444 10.3125 18.9193 10.3849 19.0482 10.5139C19.1771 10.6428 19.2496 10.8177 19.2496 11Z"
            fill="#344054"
          />
        </svg>
        Student Details
      </p>

      <div className="flex w-[96%] mx-[2%] border-2 border-slate-300 rounded-md min-h-[200px]">
        <div className="text-center w-[30%] rounded-lg bg-blue-100 ml-4 mt-6 mb-6">
          <div className="flex justify-center">
            <svg
              width="70"
              height="70"
              className="mt-4"
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

          <p className="mt-6 font-semibold mb-1">Natali Craig</p>
          <p className="font-normal text-sm text-slate-500">ID:123456</p>

          <div className="flex justify-center mt-6 pb-4">
            <p className="bg-blue-200 px-3 py-1 border border-gray-200 rounded-xl text-blue-600">
              Class V
            </p>
          </div>

          <div className="bg-white w-[96%] mx-[2%] min-h-[50px] rounded-md flex justify-center pb-10 pt-4">
            <div className="p-2">
              <div className="flex justify-center mb-2">
                <ProgressBarRounded percentage={80} background="#0D659E" />
              </div>
              <p className="pt-4"> Grades Average</p>
            </div>
            <div className="p-2">
              <div className="flex justify-center mb-2">
                <ProgressBarRounded percentage={80} background="#FFC42A" />
              </div>
              <p className="pt-4"> Rewards Average</p>
            </div>
          </div>
          <br />
        </div>
        <section className="w-[66%]">
        <div className="border border-slate-300 w-full  mt-6 rounded-md mx-[1%] pb-10 ">
          <div className="user-personal-details p-4 flex">
            <div className="bg-blue-100 p-2 rounded-md w-[48%]">
              <p className="font-normal text-sm text-slate-500">First Name</p>
              <p>Natali</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-md w-[48%] ml-[2%]">
              <p className="font-normal text-sm text-slate-500">Last Name</p>
              <p>Craig</p>
            </div>
          </div>
          <div className="user-personal-details p-4 flex">
            <div className="bg-blue-100 p-2 rounded-md w-[48%]">
              <p className="font-normal text-sm text-slate-500">
                Parent Name 1
              </p>
              <p>Guy Hawkings</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-md w-[48%] ml-[2%]">
              <p className="font-normal text-sm text-slate-500">
                Parent Name 2
              </p>
              <p>Eleanor Pena</p>
            </div>
          </div>
          <div className="actions flex float-right pr-[4%] ">
            <EditStudentModal />
            <p className="flex items-center ml-2 text-[#FF3E13] cursor-pointer">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1875 3.375H12.375V2.8125C12.375 2.36495 12.1972 1.93572 11.8807 1.61926C11.5643 1.30279 11.1351 1.125 10.6875 1.125H7.3125C6.86495 1.125 6.43572 1.30279 6.11926 1.61926C5.80279 1.93572 5.625 2.36495 5.625 2.8125V3.375H2.8125C2.66332 3.375 2.52024 3.43426 2.41475 3.53975C2.30926 3.64524 2.25 3.78832 2.25 3.9375C2.25 4.08668 2.30926 4.22976 2.41475 4.33525C2.52024 4.44074 2.66332 4.5 2.8125 4.5H3.375V14.625C3.375 14.9234 3.49353 15.2095 3.7045 15.4205C3.91548 15.6315 4.20163 15.75 4.5 15.75H13.5C13.7984 15.75 14.0845 15.6315 14.2955 15.4205C14.5065 15.2095 14.625 14.9234 14.625 14.625V4.5H15.1875C15.3367 4.5 15.4798 4.44074 15.5852 4.33525C15.6907 4.22976 15.75 4.08668 15.75 3.9375C15.75 3.78832 15.6907 3.64524 15.5852 3.53975C15.4798 3.43426 15.3367 3.375 15.1875 3.375ZM6.75 2.8125C6.75 2.66332 6.80926 2.52024 6.91475 2.41475C7.02024 2.30926 7.16332 2.25 7.3125 2.25H10.6875C10.8367 2.25 10.9798 2.30926 11.0852 2.41475C11.1907 2.52024 11.25 2.66332 11.25 2.8125V3.375H6.75V2.8125ZM13.5 14.625H4.5V4.5H13.5V14.625ZM7.875 7.3125V11.8125C7.875 11.9617 7.81574 12.1048 7.71025 12.2102C7.60476 12.3157 7.46168 12.375 7.3125 12.375C7.16332 12.375 7.02024 12.3157 6.91475 12.2102C6.80926 12.1048 6.75 11.9617 6.75 11.8125V7.3125C6.75 7.16332 6.80926 7.02024 6.91475 6.91475C7.02024 6.80926 7.16332 6.75 7.3125 6.75C7.46168 6.75 7.60476 6.80926 7.71025 6.91475C7.81574 7.02024 7.875 7.16332 7.875 7.3125ZM11.25 7.3125V11.8125C11.25 11.9617 11.1907 12.1048 11.0852 12.2102C10.9798 12.3157 10.8367 12.375 10.6875 12.375C10.5383 12.375 10.3952 12.3157 10.2898 12.2102C10.1843 12.1048 10.125 11.9617 10.125 11.8125V7.3125C10.125 7.16332 10.1843 7.02024 10.2898 6.91475C10.3952 6.80926 10.5383 6.75 10.6875 6.75C10.8367 6.75 10.9798 6.80926 11.0852 6.91475C11.1907 7.02024 11.25 7.16332 11.25 7.3125Z"
                  fill="#FF3E13"
                />
              </svg>
              Delete Profile
            </p>
          </div>
        </div>

        <div className="mx-[1%] mt-6">
          <p className="text-gray-500">Teachers:</p>
        </div>
        <div className="grid grid-cols-5 mx-[1%] mt-2">
          {[1,2,3,4,5,6,7,8].map((subject)=>{
            return(
            <div className="flex p-2 text-sm bg-blue-100 rounded-lg mr-2 mb-2">
              <p className="text-[#3538CD]">English: </p>
              <p className="ml-[3px]">Jacob Jones</p>
            </div>
            );
          })}

          </div>
        </section>
      </div>

      <div className=" flex w-[96%] mx-[2%] border-b border-slate-500 mt-10">
        {statsPages.map((page,index)=>{
          return(
            <p className={currentPage == page.name ? "text-purple-600 border-b-2 border-purple-500 bg-purple-100 px-3 py-2":"px-3 py-2 cursor-pointer"} onClick={()=>{changePage(page.name)}} key={index}>{page.name}</p>
          );
        })}
      </div>
      <div className="w-[96%] mx-[2%] pb-20">
        {currentPage == "Grades"?
        <GradesStats/>:
        currentPage == "Rewards" ? 
        <RewardsStats/>:
        currentPage == "Attendance" ?
        <AttendaceStats/>: <></>
      }
      </div>
    </section>
  );
};

export default Student;
