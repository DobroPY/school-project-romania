import React, { useState } from "react";
import ChatList from "./ChatList";

const UserChats = (props) => {
  const user = props.user;

  const users = [
    {
        name:"Friend 1",
        id:"123456"
      },{
        name:"Friend 2",
        id:"234567"
      },
      {
        name:"Friend 3",
        id:"345678"
      }, 
];

const [currentUser, setCurrentUser] = useState(users[0]);

const changeUser = (user)=>{
    setCurrentUser(user)
}

  return (
    <section className="flex">
      <div className="w-[30%] border-r border-slate-400 h-screen">
        <div className="text-center bg-blue-100 mb-2 rounded-t-lg">
          <div className="flex justify-center">
            <svg
              width="70"
              height="70"
              className="mt-2"
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

          <p className="mt-4 font-semibold mb-1">{user.name}</p>
          <p className="font-normal text-sm text-slate-500">ID:123456</p>

          <div className="flex justify-center mt-2 pb-4">
            <p className="bg-blue-200 px-3 py-1 border border-gray-200 rounded-xl text-blue-600">
              Class V
            </p>
          </div>
        </div>

        <div className="user-list">
        <label
              htmlFor="search"
              className="relative text-gray-400 focus-within:text-gray-600 block mx-2 my-4"
            >
              <svg
                width="15"
                height="15"
                className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 ml-2"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                name="search"
                placeholder="Student ID or name"
                className="form-input w-full outline-none pr-2 pl-8 py-2 border border-slate-400 rounded-lg"
              />
            </label>

          <p className="px-4 mt-4 mb-4 italic font-sm text-slate-400">
            {user.name}'s chat list
          </p>

        {users.map((item, index) => {
                  return (
                    <div className={ item.name == currentUser.name ? "flex justify-between items-center py-1 bg-purple-100 text-purple-600 rounded-lg p-2 cursor-pointer" :"flex justify-between items-center py-1 p-2 cursor-pointer"} onClick={()=>{changeUser(item)}}>
                      <div className="flex">
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
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-sm font-light">ID: 123456</p>
                        </div>
                      </div>
                      <p>8.2</p>
                    </div>
                  );
                })}

        </div>

      </div>

      <div className="w-[70%]">
            <ChatList currentUser={currentUser} />
      </div>
    </section>
  );
};

export default UserChats;
