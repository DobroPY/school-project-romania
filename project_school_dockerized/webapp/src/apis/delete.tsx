import axios from "axios";
import getCookie from "./getCookies";


const token = getCookie("jwt");
  
//teachers

export async function deleteTeacher(id){
    
    await axios.delete(`http://localhost:6868/api/teachers/${id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete teacher error!")
        })
}

// students

export async function deleteStudent(id){
    
    await axios.delete(`http://localhost:6868/api/students/${id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete student error!")
        })
}

// classrooms

export async function deleteClassroom(id){
    
    await axios.delete(`http://localhost:6868/api/classrooms/${id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete classroom error!")
        })
}

// calendars

export async function deleteCalendar(calendar){
    
    await axios.delete(`http://localhost:6868/api/calendars/${calendar.id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete calendar error!")
        })
}

// modules

export async function deleteModule(module){
    
    await axios.delete(`http://localhost:6868/api/modules/${module.id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete module error!")
        })
}

// absences

export async function deleteAbsence(absence){
    
    await axios.delete(`http://localhost:6868/api/absences/${absence.id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete absence error!")
        })
}

// grades

export async function deleteGrade(id){
    
    await axios.delete(`http://localhost:6868/api/grades/${id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete grade error!")
        })
}

// reviews

export async function deleteReview(review){
    
    await axios.delete(`http://localhost:6868/api/reviews/${review.id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
         }
        }).then((res)=>{
             
            const data =  res.data;
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Delete review error!")
        })
}