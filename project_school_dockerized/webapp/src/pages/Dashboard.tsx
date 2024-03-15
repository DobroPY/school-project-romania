import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "..";
import UserNum from "../components/UserNum";
import TeacherCell from "../components/users-cells/TeacherCell";
import StudentCell from "../components/users-cells/StudentCell";
import StudentTopTable from "../components/users-cells/StudentTopTable";
import {getTeachers} from "../apis/get";
import getCookie from "../apis/getCookies";

const DashBoard = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [students, setStudents] : any = useState([]);
  const [teachers, setTeachers] : any = useState([]);

  if (auth == false) {
    window.location.replace("/login");
  }

  const token = getCookie("jwt");

  const getAllData = async ()=>{
    const resTeachers = await axios.get("http://localhost:6868/api/teachers",{
      headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }});
      const resStudents = await axios.get("http://localhost:6868/api/students", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });

      const studentData = resStudents.data;
      const teachersData = resTeachers.data;

      console.log(studentData);
      

      setStudents(studentData);
      setTeachers(teachersData);
  }

  useEffect(()=>{
      getAllData();
  },[])

  const teachersTop = [{},{},{},{},{}]
  const studentsTop = [{},{},{},{},{}]

  return (
    <section className="w-4/5">
      {/*page title */}
      <p className="mt-6 ml-4 text-3xl mb-8 font-semibold">Dashboard</p>

      <div className="container flex">
        {/* Middle Stats */}
        <div className="middle w-[60%]">
          <div className="user-stats flex justify-between">
            <UserNum type={"Students"} number={students.length} />
            <UserNum type={"Teachers"} number={teachers.length} />
            <UserNum type={"Parents"} number={students.length * 2} />
          </div>
          <div className="border-2 border-slate-400 rounded-md min-h-[280px] max-h-[280px] w-[98%]  mt-4  mx-[2%]">
                
          </div>
        </div>

        <div className="border-2 border-slate-400 rounded-md max-h-[440px]  w-[40%]   ml-4 mr-4">
            <div className="flex justify-between top-card p-2">
                <p className="font-semibold text-lg">Top rated teachers</p>
                <p className="text-gray-500 text-sm">See all</p>
            </div>
            {teachersTop.map((teacher,index)=>{
                return(
                    <TeacherCell />
                );
            })}
            
        </div>
      </div>
      {/* Footer Stats */}
      <div className="footer-stats w-full my-10 flex justify-between">
        <div className="border-2 border-slate-400 rounded-lg w-[48%] ml-[1%] h-fit min-h-[350px]">
            <p className="font-semibold text-lg pl-6 pt-6">Top 5 Students</p>
            <div className="content m-6 border-2 border-gray-300 rounded-md">
            <StudentTopTable/>
            {studentsTop.map((teacher,index)=>{
                return(
                    <StudentCell />
                );
            })}
            </div>
        </div>

        <div className="border-2 border-slate-400 rounded-lg w-[48%] mr-[1%] min-h-[350px] h-fit">

        </div>

      </div>
    </section>
  );
};

export default DashBoard;
