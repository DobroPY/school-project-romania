import axios from "axios";
import getCookie from "./getCookies";


const token = getCookie("jwt");
  
//teachers

export async function updateTeacher(newTeacher, id){
    
    await axios.put(`http://localhost:6868/api/teachers/${id}/status=0`,JSON.stringify(newTeacher),
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
          alert("Update teacher error!")
        })
}

// students


export async function updateStudent(newStudent, id){
    
    await axios.put(`http://localhost:6868/api/students/${id}/status=0`,JSON.stringify(newStudent),
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
          alert("Update student error!")
        })
}

// classrooms


export async function updateClassroom(newClassroom, id){
    
    await axios.put(`http://localhost:6868/api/classrooms/${id}/status=0`,JSON.stringify(newClassroom),
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
          alert("Update classroom error!")
        })
}

// calendars


export async function updateCalendar(calendar){
    
    await axios.put(`http://localhost:6868/api/calendars/${calendar.id}/year=2024`,JSON.stringify(calendar),
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
          alert("Update calendar error!")
        })
}

// modules

export async function updateModule(module){
    
    await axios.put(`http://localhost:6868/api/modules/${module.id}/year=2024`,JSON.stringify(module),
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
          alert("Update module error!")
        })
}

// absences

export async function updateAbsence(absence){
    
    await axios.put(`http://localhost:6868/api/absences/${absence.id}/year=2024`,JSON.stringify(absence),
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
          alert("Update absence error!")
        })
}

// grades

export async function updateGrades(newGrade, id, email){
    
    await axios.put(`http://localhost:6868/api/grades/${id}/email=${email}`,JSON.stringify(newGrade),
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
          alert("Update grade error!")
        })
}

// reviews

export async function updateReview(review){
    
    await axios.put(`http://localhost:6868/api/reviews/${review.id}/year=2024`,JSON.stringify(review),
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
          alert("Update review error!")
        })
}