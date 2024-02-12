const db = require("../models");
const axios = require("axios");

process.setMaxListeners(5);
require('events').EventEmitter.defaultMaxListeners = Infinity; 

const {Client} = require('@elastic/elasticsearch');
const { response } = require("express");
const client = new Client({node: "http://elasticsearch:9200",headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
}});

const createIndexTeacher = async(req,res) => {
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                        "id": { "type": "integer" },  
                        "first_name": { "type": "text"  }, 
                        "middle_name": { "type": "text"  },
                        "middle_name": { "type": "text"  },
                        "email": { "type": "text"  },
                        "rank": { "type": "integer"  },
                        "status": { "type": "boolean"  }, 
                        "createdAt":   { "type": "date"  },  
                        "updatedAt":   { "type": "date"  }
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/teachers?pretty', mapping , headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataTeacher = async (req, res) => {
    
    const grades = await db.classrooms.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'teachers', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataTeacher = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/teachers').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};

const createIndexStudent = async(req,res) => {
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                        "id": { "type": "integer" },  
                        "first_name": { "type": "text"  }, 
                        "middle_name": { "type": "text"  },
                        "middle_name": { "type": "text"  },
                        "email": { "type": "text"  },
                        "class": { "type": "integer"  },
                        "rank": { "type": "integer"  },
                        "status": { "type": "boolean"  }, 
                        "createdAt":   { "type": "date"  },  
                        "updatedAt":   { "type": "date"  }
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/students?pretty', mapping , headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataStudent = async (req, res) => {
    
    const grades = await db.classrooms.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'students', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataStudent = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/students').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};

const createIndexReview = async(req,res) => {
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                        "id":    { "type": "integer" },  
                        "teacher":  { "type": "integer"  }, 
                        "student":   { "type": "integer"  },
                        "day":   { "type": "integer"  },
                        "month":   { "type": "integer"  },
                        "year":   { "type": "integer"  },
                        "classroom":   { "type": "integer"  }, 
                        "module":   { "type": "integer"  },
                        "review":   { "type": "integer"  }, 
                        "createdAt":   { "type": "date"  },  
                        "updatedAt":   { "type": "date"  }
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/reviews?pretty', mapping , headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataReview = async (req, res) => {
    
    const grades = await db.classrooms.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'reviews', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataReview = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/reviews').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};



const createIndexDirector = async(req,res) => {
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                        "id": { "type": "integer" },  
                        "first_name": { "type": "text"  }, 
                        "middle_name": { "type": "text"  },
                        "middle_name": { "type": "text"  },
                        "email": { "type": "text"  },
                        "rank": { "type": "text"  },
                        "status": { "type": "boolean"  }, 
                        "createdAt": { "type": "date"  },  
                        "updatedAt": { "type": "date"  }
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/directors?pretty', mapping , headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataDirector = async (req, res) => {
    
    const grades = await db.classrooms.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'directors', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataDirector = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/directors').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};

const createIndexClassroom = async(req,res) => {
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                        "id":    { "type": "integer" },  
                        "day":  { "type": "integer"  }, 
                        "month":   { "type": "integer"  },
                        "year":   { "type": "integer"  },
                        "classroom":   { "type": "integer"  }, 
                        "createdAt":   { "type": "date"  },  
                        "updatedAt":   { "type": "date"  }
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/classrooms?pretty', mapping , headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataClassroom = async (req, res) => {
    
    const grades = await db.classrooms.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'classrooms', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataClassroom = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/classrooms').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};

const createIndexCalendar = async(req,res) =>{
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                        "id":    { "type": "integer" },  
                        "day":  { "type": "integer"  }, 
                        "month":   { "type": "integer"  },
                        "year":   { "type": "integer"  },
                        "classroom":   { "type": "integer"  }, 
                        "createdAt":   { "type": "date"  },  
                        "updatedAt":   { "type": "date"  }
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/calendars?pretty',mapping,headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataCalendar = async (req, res) => {
    
    const grades = await db.calendars.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'calendars', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataCalendar = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/calendars').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};

const createIndexModules = async(req,res) =>{
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                        "id":    { "type": "integer" },  
                        "teacher":  { "type": "integer"  }, 
                        "name":   { "type": "text"  },
                        "classroom":   { "type": "integer"  }, 
                        "createdAt":   { "type": "date"  },  
                        "updatedAt":   { "type": "date"  }
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/modules?pretty',mapping,headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataModules = async (req, res) => {
    
    const grades = await db.modules.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'modules', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataModules = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/modules').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};

const createIndexAbsences = async(req,res) =>{
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                    "id":    { "type": "integer" },  
                    "student":  { "type": "integer"  }, 
                    "day":   { "type": "integer"  },
                    "month":   { "type": "integer"  },
                    "year":   { "type": "integer"  },  
                    "classroom":   { "type": "integer"  },   
                    "module":   { "type": "integer"  },   
                    "createdAt":   { "type": "date"  },  
                    "updatedAt":   { "type": "date"  },  
                        
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/absences?pretty',mapping,headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataAbsences = async (req, res) => {
    
    const grades = await db.absences.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'absences', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataAbsences = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/absences').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};


const createIndexGrades = async(req,res) =>{
    
    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (req, res)=>{
                
            mapping = {
                "mappings": {
                    "properties": {
                    "id":    { "type": "integer" },  
                    "student":  { "type": "integer"  }, 
                    "day":   { "type": "integer"  },
                    "month":   { "type": "integer"  },
                    "year":   { "type": "integer"  },  
                    "classroom":   { "type": "integer"  },   
                    "module":   { "type": "integer"  },   
                    "grade":   { "type": "integer"  },   
                    "reward":   { "type": "integer"  },  
                    "createdAt":   { "type": "date"  },  
                    "updatedAt":   { "type": "date"  },  
                        
                    }
                }
            };

            await axios.put('http://elasticsearch:9200/grades?pretty',mapping,headers={'Accept': "application/json", 'Content-Type': "application/json"}).then((req, res)=>{
                console.log('-------- Index Created ------------');    
            });
        
        });
        res.sendStatus(200);
}

const indexDataGrades = async (req, res) => {
    
    const grades = await db.grades.findAll();
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'grades', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.sendStatus(200);
}

const deleteDataGrades = async (req, res) => {
    
    await axios.delete('http://elasticsearch:9200/grades').then((req, res)=>{
        console.log('-------- Index Deleted ------------');    
    });
    res.sendStatus(200);
    console.log('------- Data Deleted -------');
};
module.exports = {createIndexTeacher, indexDataTeacher, deleteDataTeacher, createIndexStudent, indexDataStudent, deleteDataStudent, createIndexReview, indexDataReview, deleteDataReview, deleteDataDirector, indexDataDirector, createIndexDirector, deleteDataClassroom, indexDataClassroom, createIndexClassroom, createIndexCalendar, deleteDataCalendar, indexDataCalendar, createIndexModules, deleteDataModules, indexDataModules, createIndexAbsences, deleteDataAbsences, indexDataAbsences, createIndexGrades, indexDataGrades, deleteDataGrades};