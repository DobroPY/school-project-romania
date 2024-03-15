import React, { useState } from "react";
import ModalAbsences from "../modals/ModalAbsences";

interface Day{
    date: any,
    active: boolean
}

const AbsencesCalendar = (props) =>{

    let days: Day[] = [];
    const [absences, setAbsences] = useState([]);

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function compareNumbers(a, b) {
  return a.date - b.date;
}


const month = props.date;
const data = props.data;


const initialDate = new Date(month);

const currentYear = initialDate.getFullYear();
const currentMonth = initialDate.getMonth();


const firstDayDate = initialDate.getFullYear().toString() + "-" + (initialDate.getMonth() + 1).toString() + "-" +"01";

const newDate = new Date(firstDayDate);

const firstDayNum = newDate.getDay() + 1;

function completelastMonthDays(){
  let daysInLastMonth = getDaysInMonth(currentYear, currentMonth);
  
  for(let i = firstDayNum - 1; i > 0; i--){
      days.push({date:daysInLastMonth, active: false})
      daysInLastMonth--;
  }
  days.sort(compareNumbers)
}

function completeCurrentMonth(){
   let daysInCurrentMonth = getDaysInMonth(currentYear-1, currentMonth +1 );
  
  for(let i = 1; i <= daysInCurrentMonth; i++){
      days.push({date:i, active:true})
  }
}

completelastMonthDays();
completeCurrentMonth();

const initalLength = days.length;

function completeNextMonthDays(){
  for(let i = 1; i <= 42- initalLength; i++){
      days.push({date: i, active:false})
  }
}
completeNextMonthDays();


// const completeActiveDays = ()=>{
//     for(let i=0; i<absences.length; i++ ){
//         for(let j=0; j< days.length; j++){
//             days[j]["absences"] = [];
//             if(days[j].active == true && absences[i].day + 1 == days[j].date && absences[i].month == currentMonth && absences[i].year == currentYear){
//                 days[j]["absences"].push(absences[i]);
//             }
//         }
//     }
// }

//completeActiveDays();



    return(
        <div className="grid grid-cols-7">
            {days.map((day, index)=>{
                return(
                    <ModalAbsences day={day} index={index} />
                );  
            })}
        
        </div>
    );
}

export default AbsencesCalendar;