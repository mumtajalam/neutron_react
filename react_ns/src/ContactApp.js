import React, {useState, useEffect} from "react";
import axios from "axios";
import { nanoid } from "nanoid";


const ContactApp = () => {

    const [contactList, setContactList] = useState([]);
    const [formStatus, setFormStatus] = useState(false);
    const initialValues = {id: '', name: '', email: ''};
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (event) => {
        console.log('event', event.target.value, event.target.name);
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FormData Submitted...', formData);
        callApiPost(formData);
        //api call - formData
        setFormData(initialValues);
    }

    const callApi = () => {
        fetch(`http://localhost:3006/contacts`)
       .then(data => {
           return data.json();
       })
       .then(response => {
           console.log(response);
           //renderTable
           setContactList(response);
       })
    }
    const callApiPost = (formData) => {
        //call using axios
        formData.id = nanoid();
        
        axios.post('http://localhost:3006/contacts', formData)
        .then(response => {
            console.log(response);
            callApi();
            //setContactList(response);
            setFormData(initialValues);
        })
    }

    useEffect(() => {
        callApi();
        // setTimeout(callApi, 5000);
    }, [])
    //componentDidMount

    const deleteContact = (id) => {
        axios.delete(`http://localhost:3006/contacts/${id}`)
        .then(response => {
            console.log(response);
            callApi();
        })
    }
    return(
        <>
                <br></br>
                <div>----------------------------------------</div>
                <br></br>
                <h2>Add New Contact List</h2>
                <form>
                    ID: 
                    <input type="text" name="id" required onChange={handleChange} value={formData.id} />

                    <br></br>
                    Name: 
                    <input type="text" name="name" onChange={handleChange} value={formData.name} />

                    <br></br>
                    Email: 
                    <input type="email" name="email" onChange={handleChange} value={formData.email} />

                    <br></br>
                    <button type="submit" onClick={handleSubmit}>Register</button>
                </form>

                <h2>Contact App</h2>
               <table className='table table-striped table-responsive'>
                    <thead>
                        <tr>
                            <th>Sr No: </th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    contactList && contactList.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name }</td>
                            <td>{ item.email }</td>
                            <td><button>Edit</button></td>
                            <td><button onClick={()=> deleteContact(item.id)}>Delete</button></td>

                        </tr>
                    ))
                    }
                    </tbody>
                </table>
        </>
    )
}
export default ContactApp;