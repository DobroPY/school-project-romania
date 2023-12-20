import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../index";
const RootLayout = () => {
     const {auth} = useContext(AuthContext);
    console.log(auth)

     return(

  <main className="root-main">
    <Outlet />
  </main>
)};
export default RootLayout;