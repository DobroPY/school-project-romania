import React from "react";
import SelectRewards from "../select/SelectRewards";

const RewardsStats = (props)=>{
    return(
        <div className="flex container w-full mt-4">
            <div className="w-[35%]">
                <SelectRewards name={"Preparation"} percentage={46} />
                <SelectRewards name={"Implication"} percentage={26} />
            </div>
            <div className="w-[65%] border border-slate-400 mt-4 rounded-lg min-h-[100px]">
                <p className="p-4 font-bold">Rewards</p>
            </div>
        </div>
    );
}

export default RewardsStats;