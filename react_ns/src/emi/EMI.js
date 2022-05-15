import React, { useEffect, useState } from "react";
import EMI_Principal from "./EMI_Principal";
import EMI_Rate from "./EMI_Rate"
import EMI_Time from "./EMI_Time";
import EMI_Graph from "./EMI_Graph";
import EMI_Final from "./EMI_Final";


const EMI = () => {

    const [Principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(8);
    const [time, setTime] = useState(1);
    const [amount, setAmout] = useState(0);

    const fn_principal = (event) => {
        console.log(fn_principal, event.target.value);
        setPrincipal(event.target.value);
    }
    const fn_rate = (event) => {
        console.log(fn_rate, event.target.value);
        setRate(event.target.value);
    }
    const fn_time = (event) => {
        console.log(fn_time, event.target.value);
        setTime(event.target.value);
    }
    useEffect(() =>{
        console.log('principal', Principal);
        console.log('rate', rate);
        console.log('time', time);
    })
    
    return(
        <>
            <div className="row">
                <div className="col-12 bg-info bg-opacity-25">
                <EMI_Principal fn_principal={fn_principal}/>
                </div>

                <div className="col-12 bg-warning bg-opacity-25">
                <EMI_Rate fn_rate={fn_rate}/>
                </div>

                <div className="col-12 bg-info bg-opacity-25">
                <EMI_Time fn_time={fn_time}/>
                </div>

                <div className="col-6 bg-success bg-opacity-25">
                <EMI_Final/>
                </div>

                <div className="col-6 bg-warning bg-opacity-25">
                <EMI_Graph/>
                </div>

            </div>
            
        </>
    )
}
export default EMI;