import React, { useState } from "react";


const Count_Fn = () => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);

    const increase = () => {
        setCount(count + 1);
    }

    const showfn = () =>{
        setStatus(true);
    }
    const hidefn = () =>{
        setStatus(false);
    }

    const showhide = () =>{
        setStatus(!status);
    }
    return(
        <>

        <div>count - {count}</div>
        <button onClick={increase}>increase</button>
        <br></br>
        <div>------------------</div>
        <button onClick={showfn}>Show</button>
        <button onClick={hidefn}>Hide</button>
        <br></br>
        <br></br>
        <button onClick={showhide}>Show/Hide</button>
        {
            status === true &&  <div>Div to be Show</div>
        }
        <br></br>
       
        </>
    )
}
export default Count_Fn;