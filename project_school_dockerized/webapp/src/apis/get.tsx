import axios from "axios";
import getCookie from "./getCookies";



const token = getCookie("jwt");
  

// teachers

export async function getTeachers(){
    
    await axios.get('http://localhost:6868/api/teachers',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get teachers error!")
        })
}


export async function getTeacher(id){
    
    await axios.get(`http://localhost:6868/api/teachers/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get teacher error!")
        })
}

// students

export async function getStudents(){
    
    await axios.get('http://localhost:6868/api/students',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get students error!")
        })
}

export async function getStudent(id){
    
    await axios.get(`http://localhost:6868/api/students/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get student error!")
        })
}

// classrooms

export async function getClassrooms(){
    
    await axios.get('http://localhost:6868/api/classrooms',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get students error!")
        })
}

export async function getClassroom(id){
    
    await axios.get(`http://localhost:6868/api/classrooms/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get student error!")
        })
}

// calendars

export async function getCalendars(){
    
    await axios.get('http://localhost:6868/api/calendars',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get students error!")
        })
}

export async function getCalendar(id){
    
    await axios.get(`http://localhost:6868/api/calendars/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get student error!")
        })
}

// modules
export async function getModules(){
    
    await axios.get('http://localhost:6868/api/modules',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get students error!")
        })
}

export async function getModule(id){
    
    await axios.get(`http://localhost:6868/api/modules/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get student error!")
        })
}

// absences

export async function getAbsencess(){
    
    await axios.get('http://localhost:6868/api/absences',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get students error!")
        })
}

export async function getAbsences(id){
    
    await axios.get(`http://localhost:6868/api/absences/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get student error!")
        })
}

// grades

export async function getGrades(){
    
    await axios.get('http://localhost:6868/api/grades',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get students error!")
        })
}

export async function getGrade(id){
    
    await axios.get(`http://localhost:6868/api/grades/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get student error!")
        })
}

// reviews

export async function getReviews(){
    
    await axios.get('http://localhost:6868/api/reviews',
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get students error!")
        })
}

export async function getReview(id){
    
    await axios.get(`http://localhost:6868/api/reviews/${id}`,
        {
            headers:{
                'Authorization': `Bearer ${token}`,
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
          alert("Get student error!")
        })
}
