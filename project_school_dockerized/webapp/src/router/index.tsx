import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import {
  LoginPage,
  RegisterPage,
  LandingPage,
  OurStaff,
  Dashboard,
  Students
} from "../pages";
import AuthContext from "../index";

//const {auth} = useContext(AuthContext);
  //  console.log(auth)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
    </Route>
  )
);

export default router;
