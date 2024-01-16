import React from "react";
import CreateClassroomModal from "../components/modals/CreateClassroom";

const ClassRooms = () => {
  return (
    <section className="w-4/5">
      <p className="px-6 pt-6 font-semibold text-2xl">Classrooms</p>
      <p className="px-6 font-normal text-slate-500">
        Explore Your Classrooms Easily and Check Individual Profiles with a
        Click
      </p>
      <div className="ml-6 mt-10  flex justify-between">
        <select
          className="border-2 border-gray-200 rounded-md p-2 w-[200px] outline-none "
          id="classrooms"
        >
          <option value="Classroom 1">Classroom 1</option>
          <option value="Classroom 2">Classroom 2</option>
          <option value="Classroom 3">Classroom 3</option>
          <option value="Classroom 4">Classroom 4</option>
        </select>

        <CreateClassroomModal />
      </div>

      <div className="w-[96%] mx-[2%] border border-slate-300 mt-4 rounded-lg mb-10">
        <div className="flex justify-between px-6 py-4 class-description w-[96%] mx-[2%] min-h-[50px] border mt-10 rounded-lg bg-[#F2F4F7]">
          <div className="text-center">
            <p className="text-[#7D7D7D]">Name of classroom</p>
            <p className="font-semibold">Best classroom</p>
          </div>
          <div className="text-center">
            <p className="text-[#7D7D7D]">Class number</p>
            <p className="font-semibold">82</p>
          </div>
          <div className="text-center">
            <p className="text-[#7D7D7D]">Class performance</p>
            <p className="font-semibold text-[#34CB4C]">66%</p>
          </div>
          <div className="text-center">
            <p className="text-[#7D7D7D]">Students</p>
            <p className="font-semibold">32 students</p>
          </div>
          <div className="text-center">
            <p className="text-[#7D7D7D]">Teachers</p>
            <p className="font-semibold">3 teachers</p>
          </div>
          <div className="text-center">
            <p className="text-[#7D7D7D]">Absence</p>
            <p className="font-semibold text-[#FF3E13]">4 today</p>
          </div>
        </div>

        <div className="teachers flex justify-center mt-10">
          <div className="content flex justify-between p-1 text-center w-[300px] h-[50px]  bg-gradient-to-b from-[#446ECB] to-white">
            <div>
              <div className="flex justify-center">
                <svg
                  width="20"
                  height="20"
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

              <p className="mt-2">Teacher 1</p>
            </div>
            <div>
              <div className="flex justify-center">
                <svg
                  width="20"
                  height="20"
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

              <p className="mt-2">Teacher 1</p>
            </div>
            <div>
              <div className="flex justify-center">
                <svg
                  width="20"
                  height="20"
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

              <p className="mt-2">Teacher 1</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 width-[96%] mx-[2%] mt-20">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item) => {
              return (
                <div className="min-w-[100px] min-h-[100px] p-4 border border-slate-400 rounded-lg text-center m-2 ">
                  <div className="flex items-center border-b border-slate-300 pb-2">
                    <div className="w-[10px] h-[10px] rounded-[50%] mr-3 bg-green-500"></div>
                    <p>Ahmed Mohamed</p>
                  </div>
                  <div className="flex items-center pt-2">
                    <div className="w-[10px] h-[10px] rounded-[50%] mr-3 bg-red-500"></div>
                    <p>John Patrick</p>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* footer */}
        <div className="footer mt-10 flex justify-center items-center pb-4">
          <svg
            width="16"
            height="16"
            className="mr-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.46926 13.5306L4.46926 8.5306C4.39934 8.46092 4.34387 8.37813 4.30601 8.28696C4.26816 8.1958 4.24867 8.09806 4.24867 7.99935C4.24867 7.90064 4.26816 7.8029 4.30601 7.71173C4.34387 7.62057 4.39934 7.53778 4.46926 7.4681L9.46927 2.4681C9.61016 2.3272 9.80126 2.24805 10.0005 2.24805C10.1998 2.24805 10.3909 2.3272 10.5318 2.4681C10.6727 2.60899 10.7518 2.80009 10.7518 2.99935C10.7518 3.19861 10.6727 3.3897 10.5318 3.5306L6.06239 7.99997L10.5324 12.4693C10.6733 12.6102 10.7524 12.8013 10.7524 13.0006C10.7524 13.1999 10.6733 13.391 10.5324 13.5318C10.3915 13.6727 10.2004 13.7519 10.0011 13.7519C9.80188 13.7519 9.61079 13.6727 9.46989 13.5318L9.46926 13.5306Z"
              fill="#667085"
            />
          </svg>
          <div className="page-number flex justify-between self-center">
            <p className="px-2 py-1 bg-purple-100 cursor-pointer">1</p>
            <p className="px-2 py-1 cursor-pointer">2</p>
            <p className="px-2 py-1 cursor-pointer">3</p>
          </div>
          <svg
            width="16"
            height="16"
            className="ml-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53074 13.5306L11.5307 8.5306C11.6007 8.46092 11.6561 8.37813 11.694 8.28696C11.7318 8.1958 11.7513 8.09806 11.7513 7.99935C11.7513 7.90064 11.7318 7.8029 11.694 7.71173C11.6561 7.62057 11.6007 7.53778 11.5307 7.4681L6.53073 2.4681C6.38984 2.3272 6.19874 2.24805 5.99948 2.24805C5.80023 2.24805 5.60913 2.3272 5.46823 2.4681C5.32734 2.60899 5.24818 2.80009 5.24818 2.99935C5.24818 3.19861 5.32734 3.3897 5.46823 3.5306L9.93761 7.99997L5.46761 12.4693C5.32671 12.6102 5.24756 12.8013 5.24756 13.0006C5.24756 13.1999 5.32671 13.391 5.46761 13.5318C5.60851 13.6727 5.7996 13.7519 5.99886 13.7519C6.19812 13.7519 6.38921 13.6727 6.53011 13.5318L6.53074 13.5306Z"
              fill="#667085"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
export default ClassRooms;
