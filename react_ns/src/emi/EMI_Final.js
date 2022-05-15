import React, { useState } from "react";


const EMI_Final = (props) => {
    
    return(
        <>
            <div className="row">
                <div className="col-12 bg-danger bg-opacity">
                    <h4>Amout - {props.amount}</h4>
                    <h4>Interest - {props.interest}</h4>
                </div>
            </div>
            
        </>
    )
}
export default EMI_Final;