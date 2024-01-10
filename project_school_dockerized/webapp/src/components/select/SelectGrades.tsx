import React, { useState } from "react";

const SelectGrades = (props) => {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };
  return (
    <section>
      <div
        className={
          show
            ? "mt-4 border bg-purple-100 text-purple-600 border-gray-300 rounded-lg w-[96%]  p-3"
            : "mt-4 border border-gray-300 rounded-lg w-[96%]  p-3"
        }
      >
        <p className="flex justify-between">
          English{" "}
          <p className="flex items-center">
            8.5
            {show ? (
              <>
                <svg
                  onClick={changeShow}
                  className="ml-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.08626 11.8367L9.33626 5.5867C9.42336 5.4993 9.52685 5.42996 9.64081 5.38264C9.75476 5.33532 9.87694 5.31096 10.0003 5.31096C10.1237 5.31096 10.2459 5.33532 10.3598 5.38264C10.4738 5.42996 10.5773 5.4993 10.6644 5.5867L16.9144 11.8367C17.0905 12.0128 17.1895 12.2517 17.1895 12.5008C17.1895 12.7498 17.0905 12.9887 16.9144 13.1648C16.7383 13.3409 16.4994 13.4399 16.2503 13.4399C16.0013 13.4399 15.7624 13.3409 15.5863 13.1648L9.99955 7.57811L4.41283 13.1656C4.23671 13.3417 3.99784 13.4407 3.74877 13.4407C3.49969 13.4407 3.26082 13.3417 3.0847 13.1656C2.90858 12.9895 2.80964 12.7506 2.80964 12.5015C2.80964 12.2525 2.90858 12.0136 3.0847 11.8375L3.08626 11.8367Z"
                    fill="#667085"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  onClick={changeShow}
                  className="ml-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9137 8.1633L10.6637 14.4133C10.5766 14.5007 10.4731 14.57 10.3592 14.6174C10.2452 14.6647 10.1231 14.689 9.99967 14.689C9.87628 14.689 9.75411 14.6647 9.64016 14.6174C9.5262 14.57 9.42271 14.5007 9.33561 14.4133L3.08561 8.1633C2.90949 7.98718 2.81055 7.74831 2.81055 7.49923C2.81055 7.25016 2.90949 7.01129 3.08561 6.83517C3.26173 6.65905 3.5006 6.56011 3.74967 6.56011C3.99874 6.56011 4.23762 6.65905 4.41374 6.83517L10.0005 12.4219L15.5872 6.83439C15.7633 6.65827 16.0022 6.55933 16.2512 6.55933C16.5003 6.55933 16.7392 6.65827 16.9153 6.83439C17.0914 7.01051 17.1904 7.24938 17.1904 7.49845C17.1904 7.74752 17.0914 7.9864 16.9153 8.16252L16.9137 8.1633Z"
                    fill="#667085"
                  />
                </svg>
              </>
            )}
          </p>
        </p>
      </div>

      {show ? (
        <div className=" border-l border-r border-b bg-white border-purple-600  rounded-b-lg w-[96%]  p-3">
          <div className="flex justify-between mx-2 border-b border-gray-400 p-2">
            <p>Exam 1</p>
            <p>8.5</p>
          </div>
          <div className="flex justify-between mx-2 border-b border-gray-400 p-2">
            <p>Exam 2</p>
            <p>8.5</p>
          </div>
          <div className="flex justify-between mx-2 border-b border-gray-400 p-2">
            <p>Exam 3</p>
            <p>8.5</p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default SelectGrades;
