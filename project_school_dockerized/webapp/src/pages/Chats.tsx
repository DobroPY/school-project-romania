import React, { useState } from "react";
import UserChats from "../components/UserChats";

const Chats = ()=>{

    const students = [
        {
            name:"Student 1",
            id:"123456"
          },{
            name:"Student 2",
            id:"234567"
          },
          {
            name:"Student 3",
            id:"345678"
          }, 
    ];

    const teachers = [
        {
            name:"Teacher 1",
            id:"123456"
          },{
            name:"Teacher 2",
            id:"234567"
          },
          {
            name:"Teacher 3",
            id:"345678"
          }, 
    ];

    const parents = [
        {
            name:"Parent 1",
            id:"123456"
          },{
            name:"Parent 2",
            id:"234567"
          },
          {
            name:"Parent 3",
            id:"345678"
          }, 
    ];

    const pages = [
        {
            name:"Students"
        },
        {
            name:"Teachers"
        },
        {
            name:"Parents"
        },
    ];

    

    const [users,setUsers] = useState (students);
    
      const[currentUser, setCurrentUser] = useState(users[0]);

      const [currentPage, setCurrentPage] = useState(pages[0].name);

      const[showChats, setShowChats] = useState(false);
    
      const changePage = (name)=>{
        //change index with user
       setCurrentPage(name)
       if(name == "Students"){
        setUsers(students);
        setCurrentUser(students[0])
       }
       else if(name == "Teachers"){
        setUsers(teachers);
        setCurrentUser(teachers[0])
       }
       else if(name == "Parents"){
        setUsers(parents);
        setCurrentUser(parents[0])
       }
      }

      const changeUser = (user)=>{
        setCurrentUser(user);
        setShowChats(true)
      }
    
    
      return (
        <section className="w-4/5">
          <p className="px-4 pt-4 font-semibold text-2xl">Chats</p>
          <p className="px-4 font-normal text-slate-500">
            Monitor and Manage Internal Chats among Teachers, Students and Parents.
          </p>

          <div className=" flex w-[20%] justify-between mt-6 ml-4 border border-slate-400 rounded-lg">
            {pages.map((page,index)=>{
                return(
                    <p className={currentPage == page.name ? "bg-purple-100 text-purple-600 rounded-lg p-2" : "p-2 cursor-pointer"} onClick={()=>{ changePage(page.name)}}>{page.name}</p>
                );
            })}
          </div>
          

    
          <div className="flex w-[98%] mx-[1%] border border-slate-400 rounded-lg mt-6 mb-2 min-h-[calc(100vh_-_100px)]">
            <div className="student-list-details w-[30%]">
              <div className="title flex items-center">
                <p className="font-semibold text-xl pl-4 pr-1 py-4">{currentPage}</p>
                <p className="font-ligth text-lg text-slate-400">(32)</p>
              </div>
    
              <div className="flex items-center justify-between input px-4 mt-2 ">
                <label
                  htmlFor="search"
                  className="relative text-gray-400 focus-within:text-gray-600 block w-[85%]"
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
                    placeholder={`${currentPage} ID or name`}
                    className="form-input w-full outline-none pr-2 pl-8 py-2 border border-slate-400 rounded-lg"
                  />
                </label>

                <svg width="40" height="40" className="border border-slate-300 rounded-md" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
    
              <p className="px-4 mt-4 italic font-sm text-slate-400">
                Recent chats
              </p>
    
              <div className="student-list px-4 mt-2 max-h-[calc(100vh_-_100px)] overflow-auto scrollbar-thumb-slate-300 scrollbar-thin scrollbar-h-[15px]">
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
    
    
            <div className="w-[68%] h-screen mx-[1%] mt-4 mb-2 border border-slate-400 rounded-lg">
                { 
                  showChats == true ?
                  <UserChats user={currentUser} />
                  :
                  <></>
                }
            </div>
          </div>
        </section>
      );
}

export default Chats;