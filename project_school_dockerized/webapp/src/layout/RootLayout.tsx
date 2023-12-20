import { useContext } from "react";
import { Outlet ,Navigate } from "react-router-dom";
import AuthContext from "../index";
const RootLayout = () => {
     const {auth} = useContext(AuthContext);
     console.log(auth)
    if (auth) {return <Navigate to="/dashboard" replace />}
 
     return(

  <main className="root-main">
    <Outlet />
  </main>
)};
export default RootLayout;
