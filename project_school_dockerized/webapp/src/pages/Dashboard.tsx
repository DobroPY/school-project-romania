import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "..";
import UserNum from "../components/UserNum";
import TeacherCell from "../components/users-cells/TeacherCell";
import StudentCell from "../components/users-cells/StudentCell";

const DashBoard = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  if (auth == false) {
    window.location.replace("/login");
  }

  const teachers = [{},{},{},{},{}]
  const students = [{},{},{},{},{}]

  return (
    <section className="w-4/5">
      {/*page title */}
      <p className="mt-6 ml-4 text-3xl mb-8 font-semibold">Dashboard</p>

      <div className="container flex">
        {/* Middle Stats */}
        <div className="middle w-[60%]">
          <div className="user-stats flex justify-between">
            <UserNum type={"Students"} number={3350} />
            <UserNum type={"Teachers"} number={150} />
            <UserNum type={"Parents"} number={1450} />
          </div>
          <div className="border-2 border-slate-400 rounded-md min-h-[280px] max-h-[280px] w-[98%]  mt-4  mx-[2%]">
                
          </div>
        </div>

        <div className="border-2 border-slate-400 rounded-md max-h-[440px]  w-[40%]   ml-4 mr-4">
            <div className="flex justify-between top-card p-2">
                <p className="font-semibold text-lg">Top rated teachers</p>
                <p className="text-gray-500 text-sm">See all</p>
            </div>
            {teachers.map((teacher,index)=>{
                return(
                    <TeacherCell />
                );
            })}
            
        </div>
      </div>
      {/* Footer Stats */}
      <div className="footer-stats w-full my-10 flex justify-between">
        <div className="border-2 border-slate-400 rounded-lg w-[48%] ml-[1%] h-fit min-h-[350px]">
            <p className="font-semibold text-lg p-2">Top 5 Students</p>
            {students.map((teacher,index)=>{
                return(
                    <StudentCell />
                );
            })}
        </div>
        <div className="border-2 border-slate-400 rounded-lg w-[48%] mr-[1%] min-h-[350px] h-fit">

        </div>

      </div>
    </section>
  );
};

export default DashBoard;
