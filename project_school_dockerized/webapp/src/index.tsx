import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useEffect, useState } from "react";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const AuthContext = React.createContext(false);

const AuthProvider = ()=>{

  function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
      const token = getCookie('jwt');
      const authValue = token ? true: false;
      const [auth, setAuth] = useState(authValue);
      

  return(
    <AuthContext.Provider value={auth}>
        <App/>
    </AuthContext.Provider>
  );
}

export  const useAuth = () => {
  return useContext(AuthContext);
};

root.render(
  <React.StrictMode>
        <AuthProvider/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default AuthContext;
