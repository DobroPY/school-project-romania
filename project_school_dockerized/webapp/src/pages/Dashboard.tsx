import axios from "axios";
import React from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = ()=>{
    const navigate = useNavigate();

     const logout = async (event)=>{
        event.preventDefault();
        await axios.get("http://localhost:6868/logout").then((res)=>{
            console.log(res);
        })
    }
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
                    <button className="border border-black rounded-md text-white w-4/5 bg-black h-8 mt-10" onClick={logout}>Logout</button>
            </div>
            <div className="text-center w-4/5 border-2 mt-4 h-[calc(100vh_-_100px)]  border-gray-200 shadow-2xl rounded-xl mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6 m-4 cursor-pointer float-right">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className="mt-4">Main Dashboard</p>

                    <iframe className="w-full h-full " src="http://localhost:5601/app/kibana#/dashboard?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2023-12-01T15:40:47.831Z',to:'2023-12-28T15:55:58.999Z'))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:c82e23fc-5128-48d8-afb6-6aaf0ff1b4a5,w:24,x:0,y:0),id:'807ef970-a010-11ee-acef-2f08fdadff7a',panelIndex:c82e23fc-5128-48d8-afb6-6aaf0ff1b4a5,type:visualization,version:'7.4.0'),(embeddableConfig:(),gridData:(h:15,i:d56b1e0f-c890-4953-8eb6-ec467e087c96,w:24,x:24,y:0),id:'9673cc00-a016-11ee-acef-2f08fdadff7a',panelIndex:d56b1e0f-c890-4953-8eb6-ec467e087c96,type:visualization,version:'7.4.0'),(embeddableConfig:(),gridData:(h:15,i:'35f3a1e1-9e0d-4594-bee8-80c77dc11528',w:24,x:0,y:15),id:'7b3464e0-a016-11ee-acef-2f08fdadff7a',panelIndex:'35f3a1e1-9e0d-4594-bee8-80c77dc11528',type:visualization,version:'7.4.0'),(embeddableConfig:(),gridData:(h:15,i:'1fbe4351-db58-4a64-90d2-4e3007e2e76c',w:24,x:24,y:15),id:dc87b530-a016-11ee-acef-2f08fdadff7a,panelIndex:'1fbe4351-db58-4a64-90d2-4e3007e2e76c',type:visualization,version:'7.4.0')),query:(language:kuery,query:''),timeRestore:!f,title:'New+Dashboard',viewMode:edit)" height="600" width="800"></iframe>
            </div>
            </section>
        </section>
    );
}

export default DashBoard;