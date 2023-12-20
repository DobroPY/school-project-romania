import { useContext } from "react";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
    // const auth = useContext(authContext);
  return(

  <main className="root-main">
    <Outlet />
  </main>
)};
export default RootLayout;
