import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";


const LiftStateChild = (props) => {
    return(
        <>
           <div className="row bg-dander bg-opacity-50">
               <div className="col-12">
                   <h2>Country Name : {props.country}</h2>
                   <br></br><br></br>
                   <button onClick={() => props.liftFn('India')}>India</button>
                   <button onClick={() =>props.liftFn('Russia')}>Russia</button>
                   <button onClick={() =>props.liftFn('USA')}>USA</button>
                   <button onClick={() =>props.liftFn('UK')}>UK</button>
                   <button onClick={() =>props.liftFn('AF')}>AF</button>

                   <br></br><br></br>
                   <input type="text" onChange={props.handleChange}/>
                   <br></br><br></br>
               </div>
           </div>
        </>
    )
}
export default LiftStateChild;