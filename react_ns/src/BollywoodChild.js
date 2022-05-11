// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Marketplace
// Explore
 
// @mumtajalam 
// deepak104080
// /
// neutron_react
// Public
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// Security
// Insights
// neutron_react/src/BollywoodChild.js /
// @deepak104080
// deepak104080 5th May 2022 - Session
// Latest commit 66c19b5 5 days ago
//  History
//  1 contributor
// 33 lines (26 sloc)  879 Bytes
   
import React, { useState } from 'react';

const BollywoodChild = (props) => {
    const [count, setCount] = useState(0);
    // const [status, setStatus] = useState(true);
    // const [temp, setTemp] = useState('abc');
    // const [arr, setArr] = useState([1,2,3,4,5]);
    // const [obj, setObj] = useState({name:'abcdef'});
    //first in state variable, second is method to update state variable
    //type definition and value initialization
    //method will run in async mode

    const increase = () => {
        //update count var
        console.log(count);
        setCount(count + 1);
        console.log(count);//old value
    }

    return(
        <>
            <div>Movie Name</div>
            <div>{props.temp}</div>


            <div>{count}</div>
            <button onClick={increase}>Increase</button>
        </>
    )
}


export default BollywoodChild;
// © 2022 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// Loading complete