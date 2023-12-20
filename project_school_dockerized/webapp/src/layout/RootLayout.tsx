import { useContext } from "react";
import { Outlet ,Navigate } from "react-router-dom";
import AuthContext from "../index";
const RootLayout = () => {
     const {auth} = useContext(AuthContext);
    if (!auth) return <Navigate to="/login" replace />
     return(

  <main className="root-main">
    <Outlet />
  </main>
)};
export default RootLayout;
