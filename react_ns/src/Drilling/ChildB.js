import React from "react";
import ChildC from "./ChildC";


const ChildB  = (props)=>  {
        return(
            <>
              ChildA component
              <div>---------------</div>
              <ChildC name = {props.name}/>
            </>
        )
}
export default ChildB;