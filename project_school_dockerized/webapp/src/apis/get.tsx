import axios from "axios";
import getCookie from "./getCookies";



const token = getCookie("jwt");
  

// teachers

export async function getTeachers(setTeachers){
    
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
            setTeachers(data);
            //console.log("teachers: " ,data);
            
            
              
        }).catch((error)=>{
          console.log(error);
          alert("Get teachers error!")
        })
}


export async function getTeacher(id, setTeacher){
    
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
            setTeacher(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Get teacher error!")
        })
}

// students

export async function getStudents(setStudents){
    
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
            setStudents(data);
            

              
        }).catch((error)=>{
          console.log(error);
          alert("Get students error!")
        })
}

export async function getStudent(id, setStudent){
    
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
            setStudent(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Get student error!")
        })
}

// classrooms

export async function getClassrooms(setClassrooms){
    
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
            setClassrooms(data);
           // console.log("Classrooms: ", data);
            

              
        }).catch((error)=>{
          console.log(error);
          alert("Get students error!")
        })
}

export async function getClassroom(setClassroom,id){
    
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
            setClassroom(data);
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

export async function getGrades(setGrades){
    
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
            setGrades(data);
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Get students error!")
        })
}

export async function getGrade(setGrade, id){
    
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
            setGrade(data);
            console.log(data);

              
        }).catch((error)=>{
          console.log(error);
          alert("Get student error!")
        })
}

// reviews

export async function getReviews(setReviews){
    
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
            setReviews(data);
            //console.log("REVIEWS:",data);

              
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
