import axios from "axios";
const instance = axios.create(
    {
            baseURL: "http://localhost:6868",
            withCredentials: true,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }
      })

      export default instance;

      // vezi ca nu am folosit fisierul asta
      