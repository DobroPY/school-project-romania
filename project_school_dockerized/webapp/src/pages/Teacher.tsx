import React, { useEffect, useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import ProgressBarRounded from "../components/progressbar/ProgressBarRounded";
import GradesStats from "../components/stats-pages/GradesStats";
import RewardsStats from "../components/stats-pages/RewardsStats";
import AttendaceStats from "../components/stats-pages/AttendanceStats";
import EditStudentModal from "../components/modals/EditStudentModal";
import DeleteStudent from "../components/modals/Delete";
import Delete from "../components/modals/Delete";
import EditTeacherModals from "../components/modals/EditTeacherModal";
import EditTeacherModal from "../components/modals/EditTeacherModal";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { getTeacher } from "../apis/get";
import getCookie from "../apis/getCookies";
import axios from "axios";

const Teacher = () => {
  const [currentPage, setCurrentPage] = useState("ClassAttribute");
  const [teacher, setTeacher]: any = useState([]);
  const [classrooms, setClassrooms]: any = useState([]);
  const [reviews, setReviews]: any = useState([]);

  const params = useParams();
  const id = params.id;

  const token = getCookie("jwt");

  const getAllData = async () => {
    const resReviews = await axios.get("http://localhost:6868/api/reviews", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });

    const resClassrooms = await axios.get(
      "http://localhost:6868/api/classrooms",
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

    const teacherData = await getTeacher();
    const reviewsData = resReviews.data;
    const classRoomsData = resClassrooms.data;

    const filteredClassrooms = classRoomsData.filter(
      (item) => item.teacher == teacherData.id
    );
    const filteredReviews = reviewsData.filter(
      (item) => item.teacher == teacherData.id
    );

    setTeacher(teacherData);
    setClassrooms(filteredClassrooms);
    setReviews(filteredReviews);
  };

  const getTeacher = async () => {
    const resTeacher = await axios.get(
      `http://localhost:6868/api/teachers/${id}`,
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

    const resReviews = await axios.get("http://localhost:6868/api/reviews", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });

    const teacherData = resTeacher.data;
    const reviewsData = resReviews.data;

    for (let i = 0; i < reviewsData.length; i++) {
      let sum = 0;
      let count = 0;
      if (reviewsData[i].teacher == teacherData.id) {
        sum += 5; // change that
        count++;
      }
      if (count > 0) {
        teacherData.reviewsAverage = sum / count;
        reviewsData[i].score = 5; // change that
      } else {
        teacherData.reviewsAverage = 0;
      }
    }

    return teacherData;
  };

  useEffect(() => {
    getAllData();
  }, []);

  const pages = [
    {
      name: "ClassAttribute",
    },
    {
      name: "Reviews",
    },
  ];

  // get teacher
  // delete teacher func
  // edit teacher func

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
            window.location.replace("/teachers");
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
        Teacher Details
      </p>

      <div className="flex w-[96%] mx-[2%] border-2 border-slate-300 rounded-md ">
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
            {teacher.first_name} {teacher.last_name}
          </p>
          <p className="font-normal text-sm text-slate-500">ID:{teacher.id}</p>

          <div className="flex justify-center mt-6 mb-6">
            <p className="flex items-center bg-white rounded-lg px-2">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6565 7.14875L11.8377 9.60875L12.6821 13.2712C12.7268 13.4627 12.714 13.6631 12.6454 13.8474C12.5768 14.0316 12.4555 14.1916 12.2965 14.3072C12.1375 14.4229 11.9479 14.4891 11.7515 14.4976C11.555 14.5061 11.3605 14.4565 11.1921 14.355L7.99771 12.4175L4.81021 14.355C4.64182 14.4565 4.44724 14.5061 4.25082 14.4976C4.05439 14.4891 3.86483 14.4229 3.70583 14.3072C3.54683 14.1916 3.42545 14.0316 3.35686 13.8474C3.28828 13.6631 3.27553 13.4627 3.32021 13.2712L4.16333 9.6125L1.34396 7.14875C1.19484 7.02014 1.08701 6.85036 1.03399 6.66071C0.980978 6.47107 0.985134 6.26999 1.04594 6.08269C1.10675 5.89539 1.2215 5.73022 1.37581 5.60788C1.53011 5.48554 1.71711 5.41149 1.91333 5.395L5.62958 5.07312L7.08021 1.61312C7.15596 1.43157 7.28374 1.27649 7.44745 1.16741C7.61116 1.05833 7.80349 1.00012 8.00021 1.00012C8.19693 1.00012 8.38926 1.05833 8.55297 1.16741C8.71668 1.27649 8.84446 1.43157 8.92021 1.61312L10.3752 5.07312L14.0902 5.395C14.2864 5.41149 14.4734 5.48554 14.6277 5.60788C14.782 5.73022 14.8968 5.89539 14.9576 6.08269C15.0184 6.26999 15.0226 6.47107 14.9695 6.66071C14.9165 6.85036 14.8087 7.02014 14.6596 7.14875H14.6565Z"
                  fill="#FFBB0B"
                />
              </svg>
              {teacher.reviewsAverage}/5
            </p>
          </div>
        </div>
        <section className="w-[66%]">
          <div className="border border-slate-300 w-full  mt-6 rounded-md mx-[1%] pb-10">
            <div className="user-personal-details p-4 flex">
              <div className="bg-blue-100 p-2 rounded-md w-[48%]">
                <p className="font-normal text-sm text-slate-500">First Name</p>
                <p>{teacher.first_name}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-md w-[48%] ml-[2%]">
                <p className="font-normal text-sm text-slate-500">Last Name</p>
                <p>{teacher.last_name}</p>
              </div>
            </div>
            <div className="user-personal-details p-4 flex">
              <div className="bg-blue-100 p-2 rounded-md w-[48%]">
                <p className="font-normal text-sm text-slate-500">Subject</p>
                <p>{teacher.subject}</p>
              </div>
            </div>
            <div className="actions flex float-right pr-[4%] ">
              <EditTeacherModal text={"Edit details"} />
              <Delete user={"teacher"} id={id} />
            </div>
          </div>
        </section>
      </div>

      <div className=" flex w-[96%] mx-[2%] border-b border-slate-500 mt-10">
        {pages.map((page, index) => {
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
        {currentPage == "ClassAttribute" ? (
          <div className="grid grid-cols-5 mt-6 ">
            {classrooms.map((item) => {
              return (
                <div className="flex max-w-[180px] flex-col items-center mt-4 max-h-[200px] bg-indigo-50 rounded-3xl pb-2">
                  <div className="text-white text-center text-base mt-[-12px] font-semibold whitespace-nowrap overflow-hidden justify-center items-stretch shadow-sm bg-blue-600 px-5 py-1.5 rounded-3xl">
                    {item.name}
                  </div>
                  <p className="text-[#446ECB] text-xl mt-2 font-semibold">
                    {item.seats}
                  </p>
                  <p>Students</p>
                </div>
              );
            })}
          </div>
        ) : currentPage == "Reviews" ? (
          <div className="grid grid-cols-3 mt-6">
            {reviews.map((item) => {
              return (
                <div className="p-4 mx-2 h-[250px] border border-slate-300 rounded-md">
                  <ReactStars count={5} size={30} value={item.score} />
                  <p className="font-semibold mt-2 text-lg">{item.student}</p>
                  <p className="mt-2">{item.review}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Teacher;
