import React from "react";

const state_list = ['Bihar', 'Bhopal', 'Delhi', 'Goa', 'Panjab', 'UP']


const HOC_State = () => {
    return(
        <>
        {state_list && state_list.map((item, index) =>(
            <div key={item + index}>{item}</div>
            ))}
        </>
    )
}
export default HOC_State;