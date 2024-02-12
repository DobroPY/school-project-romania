import React, { useState } from "react";
import CompletedTest from "../components/tests/CompletedTest";
import NewTest from "../components/tests/NewTest";
import OnGoingTest from "../components/tests/OnGoingTest";

const PsychologicalTest = ()=>{

    const pages = [
        {
            name:"New Test",
            page:"new-test"
        },
        {
            name:"On-going Test",
            page:"on-going-test"
        },
        {
            name:"Completed Test",
            page:"completed-test"
        },
    ]

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const changePage = (page)=>{
        setCurrentPage(page);
    }
    return(
        <section className="w-4/5">
            <div className="titles p-6">
                <p className="font-semibold text-2xl">Psychological test</p>
                <p className="text-gray-400">Assign Psychological test and Check Individual results with a Click</p>
            </div>

            <div className="pages flex items-center mx-6 mt-6 w-fit border border-gray-400 rounded-lg p-1">
                {pages.map((page,index)=>{
                    return(
                        <p className={currentPage.page == page.page ? "bg-blue-100 text-blue-500 rounded-lg py-1 px-3":"py-1 px-3 rounded-lg cursor-pointer"} onClick={()=>{changePage(page)}}>{page.name}</p>
                    );
                })}
            </div>

            <div className="w-[96%] mx-[2%] border border-gray-300 rounded-lg mt-4 h-full">
                
                {currentPage.name == "New Test" ?
                <NewTest />: currentPage.name == "On-going Test" ? 
                <OnGoingTest /> : <CompletedTest/>    
            }
            
            </div>
        </section>
    );
}

export default PsychologicalTest;