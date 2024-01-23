import React from "react";

const ChatList = (props)=>{
    const user = props.currentUser;
    return(
        <section>
        <div className="flex bg-gray-100 justify-between p-2 items-center rounded-r-lg border-b border-slate-400">
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
                          <p className="font-semibold text-sm">{user.name}</p>
                          <p className="text-sm font-light">ID: 123456</p>
                        </div>
            </div>

            <p className="p-1 bg-gray-200 mr-2 rounded-lg">Class VI</p>
        </div>

      
        <div className="chat-messages p-2">
          <div className="flex justify-end mb-4">
          <div
              className="flex justify-between items-end  ml-1 py-2 pl-4 bg-[#DDE8FF] max-w-[50%] rounded-br-md rounded-tr-md rounded-bl-md text-sm"
            >
              <div  className="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam atque deleniti id quo impedit omnis assumenda veritatis vel dignissimos sint nesciunt at, facere cupiditate ipsa dolore, nemo, labore voluptatem.</div>
              <div className="pl-4 pr-1 pt-1 text-xs">19:12</div>    
            </div>
          </div>
          <div className="flex justify-start mb-4">
          <div
              className="flex justify-between items-end  ml-1 py-2 pl-4 bg-gray-200 max-w-[50%] rounded-br-md rounded-tr-md rounded-bl-md text-sm"
            >
              <div >Salut ? ce faci?</div>
              <div className="pl-4 pr-1 pt-1 text-xs">19:12</div>    
            </div>
          </div>
        </div>
        </section>
    );
}

export default ChatList;