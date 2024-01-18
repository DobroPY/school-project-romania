import React from "react";

const ProgressBar = (props) =>{
    const {text, background, percentage} = props;
    return (
        <div className="border rounded-xl bg-slate-300 mt-4 w-full h-[40px] max-h-[60px]">
            <div className={`border flex items-center rounded-xl w-[${percentage.toString() + "%"}] ${background} h-full`}>
                
            </div>
        </div>
    );
}

export default ProgressBar;