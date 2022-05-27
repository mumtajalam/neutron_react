import React from "react";
import ChildB from "./ChildB";

const ChildA  = (props) => {
    return(
        <>
          ChildA component
          <div>---------------</div>
          <ChildB/>
        </>
    )
}
export default ChildA;