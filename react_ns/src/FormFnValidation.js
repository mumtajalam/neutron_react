import React, { useEffect, useState } from "react";



const FormFnValidation = () => {
    const [formStatus, setFormStatus] = useState(false);
    const initialValues = {username: '', email: '', password: ''};
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        console.log('event', event.target.value, event.target.name);
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FormData Submitted...', formData);
        const errorRet = validateForm(formData);
        setFormErrors(errorRet);
        if(Object.keys(errorRet).length === 0) {
            setFormStatus(true);
            console.log('--------------hahah------------------')
            //api call - formData
            setFormData(initialValues);
        }
    }
    const validateForm = (form_Data) => {
        let error = {};
        if(!form_Data.username) {   //username is blank
            error.username = 'Please, enter username...'
        }
        if(!form_Data.email) {   //email is blank
            error.email = 'Please, enter email...'
        }
        if(!form_Data.password) {   //password is blank
            error.password = 'Please, enter password...'
        }
        return error;
    };
    useEffect(() =>{
        console.log(formData);
        console.log(formErrors);
    })
    
    return(
        <>
            <br></br>
                <form>
                    <div><h2>Registration Form</h2></div>
                    <br></br>
                    Name:
                    <input type="text" name="username" onChange={handleChange} value={formData.username}/>
                    <div className="text-danger">{formErrors.username}</div>
                    <br></br>
                    Email:
                    <input type="email" name="email" onChange={handleChange} value={formData.email}/>
                    <div className="text-danger">{formErrors.email}</div>
                    <br></br>
                    password:
                    <input type="password" name="password" onChange={handleChange} value={formData.password}/>
                    <div className="text-danger">{formErrors.password}</div>
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