import React from "react";

const CompletedTest = () => {
  return (
    <table className="w-full">
      <thead className="bg-gray-200 w-full rounded-lg">
        <tr>
          <td className="w-[40%] p-2 text-gray-500">Test Name</td>
          <td className="w-[15%] p-2 text-gray-500">Date</td>
          <td className="w-[35%] p-2 text-gray-500">Assign to</td>
          <td className="w-[10%] p-2 text-gray-500">Action</td>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((test, index) => {
          return (
            <tr className="border-b border-gray-300">
              <td>
                <div className="flex items-center p-2">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="25" fill="#DCF2DF" />
                    <path
                      d="M34 13H32V12C32 11.7348 31.8946 11.4804 31.7071 11.2929C31.5196 11.1054 31.2652 11 31 11C30.7348 11 30.4804 11.1054 30.2929 11.2929C30.1054 11.4804 30 11.7348 30 12V13H26V12C26 11.7348 25.8946 11.4804 25.7071 11.2929C25.5196 11.1054 25.2652 11 25 11C24.7348 11 24.4804 11.1054 24.2929 11.2929C24.1054 11.4804 24 11.7348 24 12V13H20V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12V13H16C15.4696 13 14.9609 13.2107 14.5858 13.5858C14.2107 13.9609 14 14.4696 14 15V34C14 35.0609 14.4214 36.0783 15.1716 36.8284C15.9217 37.5786 16.9391 38 18 38H32C33.0609 38 34.0783 37.5786 34.8284 36.8284C35.5786 36.0783 36 35.0609 36 34V15C36 14.4696 35.7893 13.9609 35.4142 13.5858C35.0391 13.2107 34.5304 13 34 13ZM29 30H21C20.7348 30 20.4804 29.8946 20.2929 29.7071C20.1054 29.5196 20 29.2652 20 29C20 28.7348 20.1054 28.4804 20.2929 28.2929C20.4804 28.1054 20.7348 28 21 28H29C29.2652 28 29.5196 28.1054 29.7071 28.2929C29.8946 28.4804 30 28.7348 30 29C30 29.2652 29.8946 29.5196 29.7071 29.7071C29.5196 29.8946 29.2652 30 29 30ZM29 26H21C20.7348 26 20.4804 25.8946 20.2929 25.7071C20.1054 25.5196 20 25.2652 20 25C20 24.7348 20.1054 24.4804 20.2929 24.2929C20.4804 24.1054 20.7348 24 21 24H29C29.2652 24 29.5196 24.1054 29.7071 24.2929C29.8946 24.4804 30 24.7348 30 25C30 25.2652 29.8946 25.5196 29.7071 25.7071C29.5196 25.8946 29.2652 26 29 26Z"
                      fill="#34CB4C"
                    />
                  </svg>
                  <div className="ml-4">
                    <p className="font-semibold">
                      Logical Mathematical Intelligence
                    </p>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="font-semibold">18/12/2024</p>
              </td>
              <td>
                <div className="grid grid-cols-3">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <p className="text-sm bg-blue-100 w-fit rounded-lg p-1 my-1">
                        Classroom 1
                      </p>
                    );
                  })}
                </div>
              </td>
              <td>
                <p className="flex items-center rounded-lg text-sm px-4 py-1 bg-green-200 text-green-600 w-fit h-fit">
                  <svg
                    width="18"
                    className="mr-2"
                    height="12"
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
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CompletedTest;
