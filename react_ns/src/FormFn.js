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
        setUsername('');
        setEmail('');
        setPassward('');
    }
    const input_username = (event) => {
        console.log('input username', event.target.value);
        setUsername(event.target.value);
    }
    const input_email = (event) => {
        console.log('input email', event.target.value);
        setEmail(event.target.value);
    }
    const input_password = (event) => {
        console.log('input password', event.target.value);
        setPassward(event.target.value);
    }
    
    return(
        <>
            <br></br>
                <form>
                    <div><h2>Registration Form</h2></div>
                    <br></br>
                    Name:
                    <input type="text" name="username" onChange={input_username} value={username}/>
                    <br></br>
                    Email:
                    <input type="email" name="email" onChange={input_email} value={email}/>
                    <br></br>
                    password:
                    <input type="password" name="password" onChange={input_password} value={password}/>
                    <br></br>
                    <button type="submit" onClick={handleSubmit}>Register</button>
                </form>
            <br></br> 
            {formStatus &&<div>Form successfully Submitted...</div>}
            <br></br>
        </>
    )
}
export default FormFn;