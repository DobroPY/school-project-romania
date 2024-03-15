import React, { useEffect, useState } from "react";
import { useNavigate, redirect, useParams } from "react-router-dom";
import ProgressBarRounded from "../components/progressbar/ProgressBarRounded";
import GradesStats from "../components/stats-pages/GradesStats";
import RewardsStats from "../components/stats-pages/RewardsStats";
import AttendaceStats from "../components/stats-pages/AttendanceStats";
import EditStudentModal from "../components/modals/EditStudentModal";
import DeleteStudent from "../components/modals/Delete";
import Delete from "../components/modals/Delete";
import { getStudent } from "../apis/get";
import axios, { all } from "axios";
import getCookie from "../apis/getCookies";

const Student = () => {
  const [currentPage, setCurrentPage] = useState("Grades");
  const [student, setStudent]: any = useState([]);
  const [studentTeachers, setStudentTeachers]: any = useState([]);

  const statsPages = [
    {
      name: "Grades",
    },
    {
      name: "Rewards",
    },
    {
      name: "Attendance",
    },
  ];

  const params = useParams();

  const id = params.id;
  const token = getCookie("jwt");

  const transformIdToName = (id, teachers) => {};

  const getAllData = async () => {
    const resClassrooms = await axios.get(
      `http://localhost:6868/api/classrooms`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    const resTeachers = await axios.get(`http://localhost:6868/api/teachers`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });

    const studentData = await getStudent();
    const allTeachers = resTeachers.data;
    const classrooms = resClassrooms.data.filter(
      (item) => item.name == studentData.class
    );
    const teachers: any = [];

    for (let i = 0; i < allTeachers.length; i++) {
      for (let j = 0; j < classrooms.length; j++) {
        if (allTeachers[i].id == classrooms[j].teacher) {
          teachers.push(allTeachers[i]);
        }
      }
    }

    //console.log(classrooms);
    setStudentTeachers(teachers);
    setStudent(studentData);
  };

  const getStudent = async () => {
    const resStudent = await axios.get(
      `http://localhost:6868/api/students/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );

    const resGrades = await axios.get(`http://localhost:6868/api/grades`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });

    const studentData = resStudent.data;

    const grades = resGrades.data;

    for (let i = 0; i < grades.length; i++) {
      let gradesSum = 0;
      let rewardsSum = 0;
      let count = 0;
      if (studentData.id == grades[i].student) {
        gradesSum += grades[i].grade;
        rewardsSum += grades[i].reward;
        count += 1;
      }
      if (count > 0) {
        studentData.gradesAverage = gradesSum / count;
        studentData.rewardsAverage = rewardsSum / count;
      } else {
        studentData.gradesAverage = 0;
        studentData.rewardsAverage = 0;
      }
    }
    return studentData;
  };

  useEffect(() => {
    getAllData();
  }, []);

  const changePage = (name) => {
    setCurrentPage(name);
    console.log(name);
  };
  const navigate = useNavigate();
  return (
    <section className="w-4/5">
      <p className="title p-[2%] font-semibold text-xl flex items-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          onClick={() => {
            window.location.replace("/students");
          }}
          className="mr-1 cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2496 11C19.2496 11.1824 19.1771 11.3572 19.0482 11.4862C18.9193 11.6151 18.7444 11.6875 18.5621 11.6875H5.09652L10.111 16.7011C10.1748 16.765 10.2255 16.8408 10.2601 16.9243C10.2947 17.0077 10.3124 17.0972 10.3124 17.1875C10.3124 17.2779 10.2947 17.3673 10.2601 17.4508C10.2255 17.5342 10.1748 17.61 10.111 17.6739C10.0471 17.7378 9.97126 17.7885 9.88781 17.823C9.80435 17.8576 9.7149 17.8754 9.62456 17.8754C9.53423 17.8754 9.44478 17.8576 9.36132 17.823C9.27787 17.7885 9.20203 17.7378 9.13816 17.6739L2.95066 11.4864C2.88674 11.4226 2.83603 11.3467 2.80143 11.2633C2.76683 11.1798 2.74902 11.0904 2.74902 11C2.74902 10.9097 2.76683 10.8202 2.80143 10.7367C2.83603 10.6533 2.88674 10.5775 2.95066 10.5136L9.13816 4.32611C9.26716 4.19711 9.44213 4.12463 9.62456 4.12463C9.807 4.12463 9.98197 4.19711 10.111 4.32611C10.24 4.45511 10.3124 4.63008 10.3124 4.81252C10.3124 4.99495 10.24 5.16992 10.111 5.29892L5.09652 10.3125H18.5621C18.7444 10.3125 18.9193 10.3849 19.0482 10.5139C19.1771 10.6428 19.2496 10.8177 19.2496 11Z"
            fill="#344054"
          />
        </svg>
        Student Details
      </p>

      <div className="flex w-[96%] mx-[2%] border-2 border-slate-300 rounded-md min-h-[200px]">
        <div className="text-center w-[30%] rounded-lg bg-blue-100 ml-4 mt-6 mb-6">
          <div className="flex justify-center">
            <svg
              width="70"
              height="70"
              className="mt-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <p className="mt-6 font-semibold mb-1">
            {student.first_name} {student.last_name}
          </p>
          <p className="font-normal text-sm text-slate-500">ID:{id}</p>

          <div className="flex justify-center mt-6 pb-4">
            <p className="bg-blue-200 px-3 py-1 border border-gray-200 rounded-xl text-blue-600">
              Class V
            </p>
          </div>

          <div className="bg-white w-[96%] mx-[2%] min-h-[50px] rounded-md flex justify-center pb-10 pt-4">
            <div className="p-2">
              <div className="flex justify-center mb-2">
                <ProgressBarRounded
                  percentage={student.gradesAverage * 10}
                  background="#0D659E"
                />
              </div>
              <p className="pt-4"> Grades Average</p>
            </div>
            <div className="p-2">
              <div className="flex justify-center mb-2">
                <ProgressBarRounded
                  percentage={student.rewardsAverage * 10}
                  background="#FFC42A"
                />
              </div>
              <p className="pt-4"> Rewards Average</p>
            </div>
          </div>
          <br />
        </div>
        <section className="w-[66%]">
          <div className="border border-slate-300 w-full  mt-6 rounded-md mx-[1%] pb-10 ">
            <div className="user-personal-details p-4 flex">
              <div className="bg-blue-100 p-2 rounded-md w-[48%]">
                <p className="font-normal text-sm text-slate-500">First Name</p>
                <p>{student.first_name}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-md w-[48%] ml-[2%]">
                <p className="font-normal text-sm text-slate-500">Last Name</p>
                <p>{student.last_name}</p>
              </div>
            </div>
            <div className="user-personal-details p-4 flex">
              <div className="bg-blue-100 p-2 rounded-md w-[48%]">
                <p className="font-normal text-sm text-slate-500">
                  Parent Name 1
                </p>
                <p>Guy Hawkings</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-md w-[48%] ml-[2%]">
                <p className="font-normal text-sm text-slate-500">
                  Parent Name 2
                </p>
                <p>Eleanor Pena</p>
              </div>
            </div>
            <div className="actions flex float-right pr-[4%] ">
              <EditStudentModal text={"Edit details"} />
              <Delete user={"student"} id={id} />
            </div>
          </div>

          <div className="mx-[1%] mt-6">
            <p className="text-gray-500">Teachers:</p>
          </div>
          <div className="grid grid-cols-4 mx-[1%] mt-2">
            {studentTeachers.map((item, index) => {
              return (
                <div className="flex p-2 text-sm bg-blue-100 rounded-lg mr-2 mb-2">
                  <p className="text-[#3538CD]">Class Teacher: </p>
                  <p className="ml-[3px]">
                    {item.first_name} {item.last_name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className=" flex w-[96%] mx-[2%] border-b border-slate-500 mt-10">
        {statsPages.map((page, index) => {
          return (
            <p
              className={
                currentPage == page.name
                  ? "text-purple-600 border-b-2 border-purple-500 bg-purple-100 px-3 py-2"
                  : "px-3 py-2 cursor-pointer"
              }
              onClick={() => {
                changePage(page.name);
              }}
              key={index}
            >
              {page.name}
            </p>
          );
        })}
      </div>
      <div className="w-[96%] mx-[2%] pb-20">
        {currentPage == "Grades" ? (
          <GradesStats />
        ) : currentPage == "Rewards" ? (
          <RewardsStats />
        ) : currentPage == "Attendance" ? (
          <AttendaceStats />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Student;
