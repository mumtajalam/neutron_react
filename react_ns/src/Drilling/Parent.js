import React, {useState}  from "react";
import ChildA from "./ChildA";



const Parent  = () => {

    const [name, setName] = useState('Mr. ABC');
    return(
        <>
            parent component
            <div>---------------</div>
            <ChildA name = {name}/>
        </>
    )
}
export default Parent;
