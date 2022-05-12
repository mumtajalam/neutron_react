import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";


const LiftStateChild = (props) => {
    return(
        <>
           <div className="row bg-dander bg-opacity-50">
               <div className="col-12">
                   country Name :- {props.country}
                   <br></br><br></br>
                   <button onClick={() => props.liftFn('India')}>India</button>
                   <button onClick={() =>props.liftFn('Russia')}>Russia</button>
                   <button onClick={() =>props.liftFn('USA')}>USA</button>
                   <button onClick={() =>props.liftFn('UK')}>UK</button>
                   <button onClick={() =>props.liftFn('AF')}>AF</button>
               </div>
           </div>
        </>
    )
}
export default LiftStateChild;