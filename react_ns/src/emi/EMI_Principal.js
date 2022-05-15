import React, { useState } from "react";


const EMI_Principal = (props) => {
    
    return(
        <>
            <div className="row">
                <div className="col-12 bg-danger bg-opacity">
                    <h4>Enter Principal</h4>
                    <input type="number" onChange={props.fn_principal}/>
                    
                </div>
            </div>
            
        </>
    )
}
export default EMI_Principal;