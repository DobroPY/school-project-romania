import React, { useEffect, useState } from "react";
import Calendar from "../components/calendar/Calendar";
import DatePick from "../components/DatePick";
import AbsencesCalendar from "../components/calendar/AbsencesCalendar";
import ScheduleCalendar from "../components/calendar/ScheduleCalendar";
import axios from "axios";
import getCookie from "../apis/getCookies";



const Calendars = ()=>{

  const types = [
    {
      name:"Absences",
      type:"absences"
    },
    {
      name:"Schedule",
      type:"schedule",
    }
  ]
  
  const[currentType, setCurrentType] : any = useState("absences");
  const [date, setDate] : any = useState("");

  const changeCalendarType = (type) =>{
    setCurrentType(type);
  }
  const token = getCookie("jwt");
  const[classrooms, setClassrooms] : any = useState([]);
  const [classroom, setClassroom] : any = useState({});

  const getAllData = async ()=>{
    const resClassrooms = await axios.get("http://localhost:6868/api/classrooms",{
      headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }});
      const resAbsences = await axios.get("http://localhost:6868/api/absences",{
      headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }});



      const classroomsData = resClassrooms.data;
      const absencesData = resAbsences.data;

      for(let i=0; i< classroomsData.length; i++){
        classroomsData[i]["absences"] = [];
        for(let j=0; j< absencesData.length; j++){
          if(classroomsData[i].name == absencesData[j].classroom){
            classroomsData[i]["absences"].push(absencesData[j]);
          }
        }        
      }
      
      setClassrooms(classroomsData);
  }

 const selectClassroom = (event)=>{
    setClassroom(event.target.value);
 }

 const changeDate = (value)=>{
      setDate(value);
      console.log(value)
 }

  useEffect(()=>{
      getAllData();
  },[]);

    return(
        <section className="w-4/5">
            <div className="title pl-6">
                <p className="font-semibold text-2xl">Calendars</p>
                <p className="mt-2 text-gray-500">Explore Calendar and Check Absences and Schedule</p>
            </div>
            <div className="ml-6 mt-10  flex justify-between">
            <select
          className="border-2 border-gray-200 rounded-md p-2 w-[200px] outline-none "
          id="classrooms"
          onChange={selectClassroom}
        >
          <option value="">Select Classroom</option>
          {classrooms && classrooms.map((item)=>{
            return(
              <option value={item}>{item.name}</option>
            );
          })}
        
        </select>
      {currentType == "schedule" ?  <button  className="border border-slate-300 rounded-md bg-purple-500 text-white outline-none p-2 mr-6">
          + Add new schedule
        </button> : <></> }
       
      </div>

      <div className="w-[96%] mx-[2%] border border-slate-400 rounded-lg mt-4 mb-2">
          <div className="calendar-actions flex p-6 items-center justify-between">

            <p className="text-xl"><strong>January</strong> 2024</p>

            <div className="flex items-center border border-gray-300 rounded-lg">
                {types.map((item,index)=>{
                  return(
                    <p className={item.type == currentType ? "bg-blue-100 text-blue-500 rounded-lg p-2":"p-2 cursor-pointer"}  onClick={()=>{changeCalendarType(item.type)}}>{item.name}</p>
                  );
                })}
            </div>
              
              <DatePick changeDate={changeDate}/>
                
          </div>


          <div className="grid grid-cols-7 mt-1 text-center font-semibold">
                <p className="border-t border-l border-r border-slate-300 p-2">Sunday</p>
                <p className="border-t border-l border-r border-slate-300 p-2">Monday</p>
                <p className="border-t border-l border-r border-slate-300 p-2">Tuesday</p>
                <p className="border-t border-l border-r border-slate-300 p-2">Wednesday</p>
                <p className="border-t border-l border-r border-slate-300 p-2">Thursday</p>
                <p className="border-t border-l border-r border-slate-300 p-2">Friday</p>
                <p className="border-t border-l border-r border-slate-300 p-2">Saturday</p>
          </div>
          {currentType == "absences" ? <AbsencesCalendar date={date} data={classroom} /> : <ScheduleCalendar date={date} />}
      </div>




      </section>
    )
    ;
}
export default Calendars;