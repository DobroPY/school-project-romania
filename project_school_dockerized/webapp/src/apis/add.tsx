import axios from "axios";
import getCookie from "./getCookies";


const token = getCookie("jwt");
  
// teachers

export async function addTeacher(teacher){
    
    await axios.post('http://localhost:6868/api/teachers',JSON.stringify(teacher),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create teacher error!")
        })
}

// students

export async function addStudent(student){
    
    await axios.post('http://localhost:6868/api/students',JSON.stringify(student),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create student error!")
        })
}

// classrooms

export async function addClassroom(classroom){
    
    await axios.post('http://localhost:6868/api/classrooms',JSON.stringify(classroom),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create classroom error!")
        })
}

// calendars

export async function addCalendar(calendar){
    
    await axios.post('http://localhost:6868/api/calendars',JSON.stringify(calendar),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create calendar error!")
        })
}

// modules
export async function addModule(module){
    
    await axios.post('http://localhost:6868/api/modules',JSON.stringify(module),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create module error!")
        })
}

// absences

export async function addAbsences(absence){
    
    await axios.post('http://localhost:6868/api/absences',JSON.stringify(absence),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create absence error!")
        })
}

// grades

export async function addGrade(grade){
    
    await axios.post('http://localhost:6868/api/grades',JSON.stringify(grade),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create grade error!")
        })
}

// reviews

export async function addReview(review){
    
    await axios.post('http://localhost:6868/api/reviews',JSON.stringify(review),
        {
            headers:{
                Authorization: `Bearer ${token}`,
                withCredential: true,
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
          alert("Create review error!")
        })
}