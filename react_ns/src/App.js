import logo from './logo.svg';
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

import Header from './comman/Header';
import Footer from './comman/Footer';
import Manubar from './comman/Manubar';
import Left from './comman/Left';
import Right from './comman/Right';

import EMI from './emi/EMI';
import EMI_Principal from './emi/EMI_Principal';
import EMI_Final from './emi/EMI_Final';
import EMI_Rate from './emi/EMI_Rate';
import EMI_Time from './emi/EMI_Time';
import EMI_Graph from './emi/EMI_Graph';


function App() {
  return (
    
    <div className='container'>
      <BrowserRouter>
        <Header/>
            <Manubar/> 
                <div className='row'>
                      <Left/>
                        <div className='col-8 bg-light bg-opacity-75'>
                          <Routes>
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
                          </Routes>
                        </div>
                      <Right/> 
                </div>       
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
