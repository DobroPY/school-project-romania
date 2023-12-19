import axios from "axios";
const instance = axios.create(
    {
            baseURL: "http://localhost:6868",
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }
      })

      export default instance;