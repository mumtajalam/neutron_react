import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Test from './Test';
import Home from './Home';
import Cricket from './Cricket';
import Bollywood from './Bollywood';
import LiftState from './LiftState';
import COUNT from './COUNT';
import CountFn from './CountFn';
import RefClass from './RefClass';
import RefFn from './RefFn';
import FormFn from './FormFn';
import FormFnValidation from './FormFnValidation';
import ToDo from './ToDo';
import Github from "./Github";
import GithubFn from './GithubFn';
import ContactApp from './ContactApp';
import HookReducer from './HookReducer';
import Parent from './Drilling/Parent';
import ParentContext from './context/ParentContext';

import Header from './comman/Header';
import Footer from './comman/Footer';
import Manubar from './comman/Manubar';
import Left from './comman/Left';
import Right from './comman/Right';
import HOC_Country from './hoc/HOC_Country';
import HOC_State from './hoc/HOC_State';
import EMI from './emi/EMI';
import DataApp from './comman/DataApp';
  
function App() {
  return (
    
    <div className='container'>
      <BrowserRouter>
        <DataApp>
            <Header/>
                <Manubar/> 
                    <div className='row'>
                          <Left/>
                            <div className='col-8 bg-light bg-opacity-75'>
                              <Routes>
                                <Route path = '/parentcontext' element={<ParentContext/>}/>
                                <Route path = '/parent' element={<Parent/>}/>
                                <Route path = '/hookreducer' element={<HookReducer/>}/>
                                <Route path = '/contactapp' element={<ContactApp/>}/>
                                <Route path = '/todo' element={<ToDo/>}/>
                                <Route path = '/test' element={<Test/>}/>
                                <Route path = '/home' element={<Home/>}/>
                                <Route path = '/cricket' element={<Cricket/>}/>
                                <Route path = '/bollywood' element={<Bollywood/>}/>
                                <Route path = '/liftstate' element={<LiftState/>}/>
                                <Route path = '/emi' element={<EMI/>}/>
                                <Route path = '/count' element={<COUNT/>}/>
                                <Route path = '/countfn' element={<CountFn/>}/>
                                <Route path = '/refclass' element={<RefClass/>}/>
                                <Route path = '/reffn' element={<RefFn/>}/>
                                <Route path = '/formfn' element={<FormFn/>}/>
                                <Route path = '/formfn2' element={<FormFnValidation/>}/>
                                <Route path = '/hoccountry' element={<HOC_Country/>}/>
                                <Route path = '/hocstate' element={<HOC_State/>}/>
                                <Route path = '/github' element={<Github/>}/>
                                <Route path = '/githubfn' element={<GithubFn/>}/>
                              </Routes>
                            </div>
                          <Right/> 
                    </div>       
            <Footer/>
        </DataApp>
      </BrowserRouter>
    </div>
  );
}

export default App;
