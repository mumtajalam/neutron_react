import React, { useState } from "react";


const EMI_Rate = (props) => {
    
    return(
        <>
            <div className="row">
                <div className="col-12 bg-danger bg-opacity">
                <h4>Enter Rate</h4>
                    <input type="number" onChange={props.fn_Rate}/> 
                </div>
            </div>
            
        </>
    )
}
export default EMI_Rate;