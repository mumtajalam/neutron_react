import React from "react";
import LiftStateChild from "./LiftStateChild";


const LiftState = () => {
    return(
        <>
            <div className="row bg-danger bg-opacity">
                Lift State
                <div className="col-12 bg-danger bg-opacity">
                <LiftStateChild/>
                </div>
            </div>
        </>
    )
}
export default LiftState;