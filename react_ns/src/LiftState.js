import React, { useState } from "react";
import LiftStateChild from "./LiftStateChild";


const LiftState = () => {
    const [country, setCountry] = useState('India');
    const updateCountry = (data) => {
        console.log('parent component methods clicks...', data);
        setCountry(data);
    }
    return(
        <>
            <div className="row bg-danger bg-opacity">
                <div className="col-12 bg-danger bg-opacity">
                    Lift State
                </div> 
            </div>
            <div className="row bg-warning bg-opacity">
                <div className="col-12 bg-danger bg-opacity">
                <LiftStateChild country={country} liftFn= {updateCountry}/>
                </div>
            </div>
        </>
    )
}
export default LiftState;