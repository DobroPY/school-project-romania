import React, { useState } from "react";
import Calendar from "../components/calendar/Calendar";
import DatePick from "../components/DatePick";
import AbsencesCalendar from "../components/calendar/AbsencesCalendar";
import ScheduleCalendar from "../components/calendar/ScheduleCalendar";



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
  
  const[currentType, setCurrentType] = useState("absences");

  const changeCalendarType = (type) =>{
    setCurrentType(type);
  }

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
        >
          <option value="Classroom 1">Classroom 1</option>
          <option value="Classroom 2">Classroom 2</option>
          <option value="Classroom 3">Classroom 3</option>
          <option value="Classroom 4">Classroom 4</option>
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
              
              <DatePick/>
                
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
          {currentType == "absences" ? <AbsencesCalendar/> : <ScheduleCalendar/>}
      </div>




      </section>
    )
    ;
}
export default Calendars;