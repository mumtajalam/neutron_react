import React, { useState } from "react";



const FormFn = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassward] = useState('');
    const [formStatus, setFormStatus] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submit clicked...');
        console.log('Form Data', username, email, password);
        setFormStatus(true);
        // Api call
        

    }
    
    return(
        <>
           <br></br>
            <div><h2>Registration Form</h2></div>
            <br></br>
            Name:
            <input type="text" placeholder=""/>
            <br></br>
            Email:
            <input type="email" placeholder=""/>
            <br></br>
            password
            <input type="password" placeholder=""/>
            <br></br>
            <button>Register</button>
            <br></br> 
        </>
    )
}
export default FormFn;