import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
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
  Calendars,
  Grades,
  Rewards,
  TeacherReview,
  Chats
} from "../pages";
import Student from "../pages/Student";
import Teacher from "../pages/Teacher";
import PsychologicalTest from "../pages/PsychologicalTest";
import Settings from "../pages/Settings";
import CurriculumSetup from "../pages/CurriculumSetup";
import SchoolGrades from "../pages/SchoolGrades";
import GradeSubjects from "../pages/GradeSubjects";
import SubjectModules from "../pages/SubjectModules";
import LessonConnections from "../pages/LessonConnections";


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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={authValue ? (<RootLayout />) : (<><Outlet/></>)}>
      <Route index element={<Navigate to="login"/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="students/:id" element={<Student/>} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="teachers/:id" element={<Teacher/>}/>
      <Route path="classrooms" element={<ClassRooms/>} /> 
      <Route path="calendars" element={<Calendars/>} /> 
      <Route path="grades" element={<Grades/>} /> 
      <Route path="rewards" element={<Rewards/>} /> 
      <Route path="teacher-review" element={<TeacherReview/>} /> 
      <Route path="curriculum-setup" element={<CurriculumSetup/>} />
      <Route path="curriculum-setup/:school/grades" element={<SchoolGrades/>} />
      <Route path="curriculum-setup/:school/grades/:grade/subjects" element={<GradeSubjects/>} />
      <Route path="curriculum-setup/:school/grades/:grade/subjects/:subject/modules" element={<SubjectModules/>} />
      <Route path="curriculum-setup/:school/grades/:grade/subjects/:subject/modules/:module/lessons-connections" element={<LessonConnections/>} />
      <Route path="psycological-test" element={<PsychologicalTest/>} /> 
      <Route path="chats" element={<Chats/>} /> 
      <Route path="settings" element={<Settings/>} /> 

    </Route>
  )
);

export default router;