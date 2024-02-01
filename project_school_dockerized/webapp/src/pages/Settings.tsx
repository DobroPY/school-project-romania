import React, { useState } from "react";
import MyDetails from "../components/settings/MyDetails";
import Password from "../components/settings/Password";

const Settings = ()=>{

    const pages = [
        {
            name:"My Details",
            page:"my-details"
        },
        {
            name:"Password",
            page:"password"
        },
    ]

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const changePage = (page)=>{
        setCurrentPage(page);
    }

    return(
        <section className="w-4/5">
             <div className="titles p-6">
                <p className="font-semibold text-2xl">Settings</p>
                <p className="text-gray-400">Easily manage your profile: update photo, basic details, and password</p>
            </div>

            <div className="pages flex items-center mx-6 mt-6 w-fit border border-gray-400 rounded-lg p-1">
                {pages.map((page,index)=>{
                    return(
                        <p className={currentPage.page == page.page ? "bg-blue-100 text-blue-500 rounded-lg py-1 px-3":"py-1 px-3 rounded-lg cursor-pointer"} onClick={()=>{changePage(page)}}>{page.name}</p>
                    );
                })}
            </div>

            <div className="w-[96%] mx-[2%] border border-gray-300 rounded-lg mt-4 h-full">
                
                {currentPage.name == "My Details" ?
                <MyDetails />: <Password/>    
            }
            
            </div>
        </section>
    );
}

export default Settings;