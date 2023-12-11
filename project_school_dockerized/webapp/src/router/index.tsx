import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import {
  LoginPage,
  LandingPage,
  OurProducts,
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="our-products" element={<Outlet />}>
        <Route index element={<OurProducts />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
);

export default router;
