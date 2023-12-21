import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const RootLayout = () => {
     return(

  <main className="root-main">
    <Outlet />
  </main>
)};
export default RootLayout;