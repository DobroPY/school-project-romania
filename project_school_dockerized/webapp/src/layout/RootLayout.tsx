import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
const RootLayout = () => (
  <main className="root-main">
    <Navbar />
    <Outlet />
    <Footer />
  </main>
);
export default RootLayout;
