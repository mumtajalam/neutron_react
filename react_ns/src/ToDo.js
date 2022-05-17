import React, { useEffect, useState } from "react";


const ToDo = () => {
    const [tempInput, setTempInput] = useState('');
    const [todoList, setToDoList] = useState([]);

    const handleChange = (event) => {
        console.log('user has Typed', event.target.value);
        setTempInput(event.target.value);
    }

    const handleSubmit = () => {
        setToDoList([...todoList, tempInput]);
        setTempInput('');
    }

    useEffect(() =>{
        console.log(todoList);
    })

    return(
        <>
          <input type="text" value={tempInput} onChange={handleChange}/>
          <button onClick={handleSubmit}>Add</button>
          {todoList && todoList.map((item, index) =>(
            <div Key={item + index}>{item}</div>
          ))}
        </>
    )
}
export default ToDo; 