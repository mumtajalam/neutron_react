import React from "react";
import { Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Manubar = () => {
    return(
        <>
        <div className='row bg-info bg-opacity'>
                  <div className='col-12 text-center'>
                    <Navbar>
                    <Link to='/test' className="nav-link btn btn-outline-success">Test</Link>
                    <Link to='/home' className="nav-link btn btn-outline-success">Home</Link>
                    <Link to='/cricket' className="nav-link btn btn-outline-success">Cricket</Link>
                    <Link to='/bollywood' className="nav-link btn btn-outline-success">Bollywood</Link>
                    <Link to='/liftstate' className="nav-link btn btn-outline-success">Lift State</Link>
                    <Link to='/emi' className="nav-link btn btn-outline-success">EMI</Link>
                    <Link to='/count' className="nav-link btn btn-outline-success">COUNT</Link>
                    <Link to='/countfn' className="nav-link btn btn-outline-success">Count_Fn</Link>
                    </Navbar>
                  </div>
                </div>
        </>
    )
}
export default Manubar;