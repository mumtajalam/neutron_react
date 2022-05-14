import React, {useRef, forwardRef} from "react";


const RefFnChild = (props, ref) => {
     
    
        return(
            <>
            <br></br>
            <div><h2>Login Form - Function</h2></div>
            <br></br>
            <div ref={ref}></div>

            </>
        )
}
export default forwardRef(RefFnChild);