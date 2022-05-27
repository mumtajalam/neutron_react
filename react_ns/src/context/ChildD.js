import React, { useContext } from "react";
import { NameContext } from "./ParentContext";

const ChildD  = (props) => {

    const temp = useContext(NameContext);
    return(
        <>
          ChildD component
          <br></br>
          Name in D - {temp.name}
          <br></br>
          Count in D- {temp.count}
          <br></br>
          <button onClick={()=> temp.setName('New Name..')}>Update Name</button>
          <button onClick={()=> temp.setCount(temp.count + 1)}>Update Count</button>
          <br></br>
        </>
    )
}
export default ChildD;