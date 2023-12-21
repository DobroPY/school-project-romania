import React from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = ()=>{
    const navigate = useNavigate();
    return(
        <section>
            <div className="flex items-center justify-between p-4 w-full min-h-[50px] border-l border-r border-b border-gray-300  rounded-b-xl shadow-xl">
                <a className="border-r border-gray-400 px-8 font-semibold" href="/dashboard">Dashboard</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/teachers">Teachers</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/students">Students</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/classrooms">Class rooms</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/calendars">Calendars</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/grades">Grades</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/rewards">Rewards</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/teacher-review">Teacher review</a>
                <a className="border-r border-gray-400 px-8 font-semibold" href="/student-gaps">Student Gaps</a>
                <a className="px-8 font-semibold" href="/psycological-test">Psycolgical test</a>
            </div>
            <section className="flex justify-between">
            <div className="text-center w-1/6 border-2 mt-4 h-[calc(100vh_-_100px)]  border-gray-200 shadow-2xl rounded-xl  mb-10 ml-2">
                <h1 className="font-semibold mb-10 mt-10 text-lg">Main Dashboard</h1>
                    <p onClick={()=>navigate("/teachers")} className="mb-6 font-semibold bg-slate-100 cursor-pointer ">Teachers</p>
                    <p onClick={()=>navigate("/students")} className="mb-6 font-semibold bg-slate-100 cursor-pointer ">Students</p>
                    <p onClick={()=>navigate("/classrooms")} className="mb-6 font-semibold bg-slate-100 cursor-pointer ">Classrooms</p>
                    <p onClick={()=>navigate("/calendars")} className="mb-6 font-semibold bg-slate-100 cursor-pointer ">Calendars</p>
                    <p onClick={()=>navigate("/grades")} className="mb-6 font-semibold bg-slate-100 cursor-pointer ">Grades</p>
                    <p onClick={()=>navigate("/rewards")} className="mb-6 font-semibold bg-slate-100 cursor-pointer ">Rewards</p>
                    <p onClick={()=>navigate("/student-gaps")} className="mb-6 font-semibold bg-slate-100 cursor-pointer ">Student Gaps</p>
            </div>
            <div className="text-center w-4/5 border-2 mt-4 h-[calc(100vh_-_100px)]  border-gray-200 shadow-2xl rounded-xl mr-4">
                    <p className="mt-4">Main Dashboard</p>
            </div>
            </section>
        </section>
    );
}

export default DashBoard;