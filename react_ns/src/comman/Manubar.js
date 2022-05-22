import React from "react";
import { Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Manubar = () => {
    return(
        <>
        <div className='row bg-info bg-opacity'>
                  <div className='col-12 text-center'>
                    <Navbar>
                    <Link to='/githubfn' className="nav-link btn btn-outline-success">GithubFn</Link>
                    <Link to='/github' className="nav-link btn btn-outline-success">Github</Link>
                    <Link to='/hoccountry' className="nav-link btn btn-outline-success">HOC_Country</Link>
                    <Link to='/hocstate' className="nav-link btn btn-outline-success">HOC_State</Link>
                    <Link to='/todo' className="nav-link btn btn-outline-success">ToDo</Link>
                    <Link to='/test' className="nav-link btn btn-outline-success">Test</Link>
                    <Link to='/home' className="nav-link btn btn-outline-success">Home</Link>
                    <Link to='/cricket' className="nav-link btn btn-outline-success">Cricket</Link>
                    <Link to='/bollywood' className="nav-link btn btn-outline-success">Bollywood</Link>
                    <Link to='/liftstate' className="nav-link btn btn-outline-success">Lift State</Link>
                    <Link to='/emi' className="nav-link btn btn-outline-success">EMI</Link>
                    <Link to='/count' className="nav-link btn btn-outline-success">COUNT</Link>
                    <Link to='/countfn' className="nav-link btn btn-outline-success">Count_Fn</Link>
                    <Link to='/refclass' className="nav-link btn btn-outline-success">RefClass</Link>
                    <Link to='/reffn' className="nav-link btn btn-outline-success">Ref Fn</Link>
                    <Link to='/formfn' className="nav-link btn btn-outline-success">Form Fn</Link>
                    <Link to='/formfn2' className="nav-link btn btn-outline-success">Form Fn2</Link>
                    </Navbar>
                  </div>
                </div>
        </>
    )
}
export default Manubar;