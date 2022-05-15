import React, { useState } from "react";


const EMI_Time = (props) => {
    
    return(
        <>
            <div className="row">
                <div className="col-12 bg-danger bg-opacity">
                    <h4>Enter Time</h4>
                    <input type="number" onChange={props.fn_Time}/>
                </div>
            </div>
            
        </>
    )
}
export default EMI_Time;