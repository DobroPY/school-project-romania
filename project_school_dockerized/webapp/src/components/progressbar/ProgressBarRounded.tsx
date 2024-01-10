import React from "react";
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBarRounded = (props) =>{
    const {percentage ,background} = props;
    

    return(
        <div className="w-[70px] h-[70px]">
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
            pathColor: props.background
        })}/>
        </div>
    );
}

export default ProgressBarRounded;