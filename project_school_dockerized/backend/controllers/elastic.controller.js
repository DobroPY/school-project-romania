const db = require("../models");
const axios = require("axios");

process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = Infinity; 

const {Client} = require('@elastic/elasticsearch');
const { response } = require("express");
const client = new Client({node: "http://elasticsearch:9200",headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
}});

const getIndex = async(req,res) =>{
    const {body} = await client.get({
        index: 'grades',
        id:31
    });
    console.log(body);
    res.send(200);
    return body
}

const createIndex = async(req,res) =>{
    const grades = await db.grades.findAll();

    await axios.get('http://elasticsearch:9200/_cat/indices?v')
        .then(async (res)=>{
            if (res.data.includes('grades')){
                console.log(200);
            }else{
                grades.forEach( async (element) => {
                    const { response }  = await client.create({
                        index: 'grades',
                        id:31,
                        conflicts:'proceed',
                        body:{
                            id:element.id,
                            student:element.student,
                            day:element.day,
                            month:element.month,
                            year:element.year,
                            classrooms: element.classrooms,
                            modules: element.modules,
                            grades: element.grades,
                            reward: element.reward,
                            createdAt: element.createdAt,
                            updatedAt: element.updatedAt,
                        }
                    });
                    res.send(200);
                    return 1;
                });
               
            }
        }).catch((error)=>{
            console.log('\\\\\\\\\\\\\\\\');
            console.log(error);
            console.log('\\\\\\\\\\\\\\\\');
        })
}

const indexData = async (req, res) => {
    
    const grades = await db.grades.findAll();

    const {body} = await client.get({
        index: 'grades',
        id:31
    });
    
    if(!body) return 400;
    
    const data = grades.flatMap((doc,index) => 
    [{index: {_index: 'grades', _id:index+1}}, doc]);
    
    async function populateGrades(){
        const {response} = await client.bulk({body:data, refresh:true});
    }
    if(response){
        console.log(response.errors);
    }
    populateGrades().catch(console.log);
    res.send(200);
}

const deleteData = async (req, res) => {
    client.deleteByQuery({
        index: 'grades',            
        body: {
            query: {
                match_all: {}
            }
        }
    }, function (error, response) {
        console.log(response);
    });
    res.send(200);
};
module.exports = { createIndex, indexData, deleteData ,getIndex};