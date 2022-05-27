import React, {createContext, useState} from "react";
import ChildA from "./ChildA";

const NameContext = createContext(); 

const ParentContext  = () => {
  const [name, setName] = useState('Mumtaj...');
  const [count, setCount] = useState(0);

    return(
        <>
          Parent Component
          <div>---------------------</div>
          <br></br>
          <div>---------------------</div>

          <NameContext.Provider value = {{name, setName, count, setCount}}>
            <ChildA/>
          </NameContext.Provider> 
        </>
    )
}
export default ParentContext;
export {NameContext};