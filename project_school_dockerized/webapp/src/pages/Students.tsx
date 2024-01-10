import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from "..";
import CreateStudentModal from "../components/modals/CreateStudent";
import SuccesStudent from "../components/modals/SuccesStudent";
import EditStudentModal from "../components/modals/EditStudentModal";

const Students = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  if (auth == false) {
    window.location.replace("/login");
  }
  return (
    <section className="w-4/5">
      <Outlet />
      <p className="px-6 pt-6 font-semibold text-2xl">Students</p>
      <p className="px-6 font-normal text-slate-500">
        Explore Your Students Easily and Check Individual Profiles with a Click
      </p>
      <div className="ml-6 mt-10  flex justify-between">
        <select
          className="border-2 border-gray-200 rounded-md p-2 w-[200px] outline-none "
          id="classrooms"
        >
          <option value="Classroom 1">Classroom 1</option>
          <option value="Classroom 2">Classroom 2</option>
          <option value="Classroom 3">Classroom 3</option>
          <option value="Classroom 4">Classroom 4</option>
        </select>

        <CreateStudentModal />
      </div>
      <div className="ml-6 mr-6 mt-10 border border-gray-400 rounded-md">
        <table className="w-full">
          <tr className=" bg-gray-200 rounded-md text-left">
            <th className="py-2 pl-4 pr-2   font-normal text-gray-600">
              Student Name
            </th>
            <th className="p-2 font-normal text-gray-600">Grade Average</th>
            <th className="p-2 font-normal text-gray-600">Rewards Average</th>
            <th className="p-2 font-normal text-gray-600">Absences</th>
            <th className="p-2 font-normal text-gray-600 text-center">
              Actions
            </th>
          </tr>
          <tr className="text-left">
            <td className="p-2 flex">
              <svg
                width="25"
                height="25"
                className="aspect-square object-contain object-center w-10 self-center overflow-hidden shrink-0 max-w-full rounded-[50%]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div className="username ml-2 text-left">
                <p className="font-semibold text-sm">Phonenix Baker</p>
                <p className="text-sm font-light">ID: 123456</p>
              </div>
            </td>
            <td className="p-2 font-semibold text-sm">9.2</td>
            <td className="p-2 font-semibold text-sm">75%</td>
            <td className="p-2 font-semibold text-sm">12</td>
            <td className="p-2 flex justify-center">
              <button className=" rounded-lg px-4 py-1 h-[100%] bg-blue-200 text-blue-600 flex items-center outline-none">
                <EditStudentModal text={"Edit"} />
              </button>
              <button className=" rounded-lg px-4 py-1 h-[100%] ml-4 bg-green-200 text-green-700 flex items-center outline-none" onClick={()=>{ navigate("/students/13")}}>
                <svg
                  width="20"
                  height="15"
                  className="mr-2"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.389 5.77219C17.3644 5.71664 16.7688 4.39547 15.4448 3.07148C13.6807 1.30734 11.4525 0.375 8.99999 0.375C6.54749 0.375 4.31929 1.30734 2.55515 3.07148C1.23117 4.39547 0.632806 5.71875 0.611009 5.77219C0.579026 5.84413 0.5625 5.92198 0.5625 6.0007C0.5625 6.07943 0.579026 6.15728 0.611009 6.22922C0.635618 6.28477 1.23117 7.60523 2.55515 8.92922C4.31929 10.6927 6.54749 11.625 8.99999 11.625C11.4525 11.625 13.6807 10.6927 15.4448 8.92922C16.7688 7.60523 17.3644 6.28477 17.389 6.22922C17.421 6.15728 17.4375 6.07943 17.4375 6.0007C17.4375 5.92198 17.421 5.84413 17.389 5.77219ZM8.99999 10.5C6.83577 10.5 4.94507 9.7132 3.37991 8.16211C2.73771 7.52346 2.19134 6.7952 1.75781 6C2.19123 5.20472 2.73761 4.47645 3.37991 3.83789C4.94507 2.2868 6.83577 1.5 8.99999 1.5C11.1642 1.5 13.0549 2.2868 14.6201 3.83789C15.2635 4.4763 15.8111 5.20457 16.2457 6C15.7387 6.94641 13.5302 10.5 8.99999 10.5ZM8.99999 2.625C8.33248 2.625 7.67996 2.82294 7.12494 3.19379C6.56993 3.56464 6.13735 4.09174 5.8819 4.70844C5.62645 5.32514 5.55962 6.00374 5.68984 6.65843C5.82007 7.31312 6.1415 7.91448 6.61351 8.38649C7.08551 8.85849 7.68688 9.17993 8.34156 9.31015C8.99625 9.44038 9.67485 9.37354 10.2915 9.11809C10.9082 8.86265 11.4354 8.43007 11.8062 7.87505C12.1771 7.32003 12.375 6.66751 12.375 6C12.3741 5.10518 12.0182 4.24728 11.3855 3.61454C10.7527 2.98181 9.89481 2.62593 8.99999 2.625ZM8.99999 8.25C8.55498 8.25 8.11997 8.11804 7.74996 7.87081C7.37995 7.62357 7.09156 7.27217 6.92126 6.86104C6.75097 6.4499 6.70641 5.9975 6.79323 5.56105C6.88004 5.12459 7.09433 4.72368 7.409 4.40901C7.72367 4.09434 8.12458 3.88005 8.56104 3.79323C8.9975 3.70642 9.4499 3.75097 9.86103 3.92127C10.2722 4.09157 10.6236 4.37996 10.8708 4.74997C11.118 5.11998 11.25 5.55499 11.25 6C11.25 6.59674 11.0129 7.16903 10.591 7.59099C10.169 8.01295 9.59673 8.25 8.99999 8.25Z"
                    fill="#34CB4C"
                  />
                </svg>
                View
              </button>
            </td>
          </tr>
        </table>
      </div>
      {/* Footer */}
      <div className="footer mt-10 flex justify-center items-center">
      <svg width="16" height="16" className="mr-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.46926 13.5306L4.46926 8.5306C4.39934 8.46092 4.34387 8.37813 4.30601 8.28696C4.26816 8.1958 4.24867 8.09806 4.24867 7.99935C4.24867 7.90064 4.26816 7.8029 4.30601 7.71173C4.34387 7.62057 4.39934 7.53778 4.46926 7.4681L9.46927 2.4681C9.61016 2.3272 9.80126 2.24805 10.0005 2.24805C10.1998 2.24805 10.3909 2.3272 10.5318 2.4681C10.6727 2.60899 10.7518 2.80009 10.7518 2.99935C10.7518 3.19861 10.6727 3.3897 10.5318 3.5306L6.06239 7.99997L10.5324 12.4693C10.6733 12.6102 10.7524 12.8013 10.7524 13.0006C10.7524 13.1999 10.6733 13.391 10.5324 13.5318C10.3915 13.6727 10.2004 13.7519 10.0011 13.7519C9.80188 13.7519 9.61079 13.6727 9.46989 13.5318L9.46926 13.5306Z" fill="#667085"/>
</svg>
<div className="page-number flex justify-between self-center">
    <p className="px-2 py-1 bg-purple-100 cursor-pointer">1</p>
    <p className="px-2 py-1 cursor-pointer">2</p>
    <p className="px-2 py-1 cursor-pointer">3</p>
</div>
<svg width="16" height="16" className="ml-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.53074 13.5306L11.5307 8.5306C11.6007 8.46092 11.6561 8.37813 11.694 8.28696C11.7318 8.1958 11.7513 8.09806 11.7513 7.99935C11.7513 7.90064 11.7318 7.8029 11.694 7.71173C11.6561 7.62057 11.6007 7.53778 11.5307 7.4681L6.53073 2.4681C6.38984 2.3272 6.19874 2.24805 5.99948 2.24805C5.80023 2.24805 5.60913 2.3272 5.46823 2.4681C5.32734 2.60899 5.24818 2.80009 5.24818 2.99935C5.24818 3.19861 5.32734 3.3897 5.46823 3.5306L9.93761 7.99997L5.46761 12.4693C5.32671 12.6102 5.24756 12.8013 5.24756 13.0006C5.24756 13.1999 5.32671 13.391 5.46761 13.5318C5.60851 13.6727 5.7996 13.7519 5.99886 13.7519C6.19812 13.7519 6.38921 13.6727 6.53011 13.5318L6.53074 13.5306Z" fill="#667085"/>
</svg>

      </div>
    </section>
  );
};

export default Students;
