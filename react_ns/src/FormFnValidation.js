import React, { useState } from "react";



const FormFnValidation = () => {
    const [formStatus, setFormStatus] = useState(false);
    const initialValues = {username: '', email: '', password: ''};
    const [formData, setFormData] = useState(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data submitted...', formData);
        setFormStatus(true);
        // Api call
        setFormData(initialValues);
    }
    
    const handleChange = (event) => {
        console.log('event', event.target.value, event.target.name);
        setFormData({...FormData, [event.target.name]: event.target.value});
    }
    
    return(
        <>
            <br></br>
                <form>
                    <div><h2>Registration Form</h2></div>
                    <br></br>
                    Name:
                    <input type="text" name="username" onChange={handleChange} value={formData.username}/>
                    <br></br>
                    Email:
                    <input type="email" name="email" onChange={handleChange} value={formData.email}/>
                    <br></br>
                    password:
                    <input type="password" name="password" onChange={handleChange} value={formData.password}/>
                    <br></br>
                    <button type="submit" onClick={handleSubmit}>Register</button>
                </form>
            <br></br> 
            {formStatus &&<div>Form successfully Submitted...</div>}
            <br></br>
        </>
    )
}
export default FormFnValidation;