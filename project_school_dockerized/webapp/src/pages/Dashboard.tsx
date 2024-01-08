import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "..";
import UserNum from "../components/UserNum";

const DashBoard = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  if (auth == false) {
    window.location.replace("/login");
  }

  return (
    <section className="w-4/5">
      {/*page title */}
      <p className="mt-6 ml-4 text-3xl font-semibold">Dashboard</p>

      <div className="container flex">
        {/* Middle Stats */}
        <div className="middle w-[60%]">
          <div className="user-stats flex justify-between">
            <UserNum type={"Students"} number={3350} />
            <UserNum type={"Teachers"} number={150} />
            <UserNum type={"Parents"} number={1450} />
          </div>
          <div className="border-2 border-slate-400 rounded-md min-h-[200px] w-[98%]  mt-4  mx-[2%]"></div>
        </div>

        <div className="border-2 border-slate-400 rounded-md min-h-[200px] w-[40%]  ml-4 mr-4"></div>
      </div>
      {/* Footer Stats */}
    </section>
  );
};

export default DashBoard;
