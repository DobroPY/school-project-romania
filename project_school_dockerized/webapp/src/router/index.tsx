import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import RootLayout from "../layout/RootLayout";
import { useContext } from "react";
import {
  LoginPage,
  RegisterPage,
  LandingPage,
  OurStaff,
  Dashboard,
  Students,
  Teachers,
  ClassRooms,
  Calendars
} from "../pages";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="students/:id" element={<></>} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="classrooms" element={<ClassRooms/>} /> 
      <Route path="calendars" element={<Calendars/>} /> 
      <Route path="grades" element={<ClassRooms/>} /> 
      <Route path="rewards" element={<ClassRooms/>} /> 
      <Route path="teacher-review" element={<ClassRooms/>} /> 
      <Route path="students-gaps" element={<ClassRooms/>} /> 
      <Route path="psycological-test" element={<ClassRooms/>} /> 

    </Route>
  )
);

export default router;