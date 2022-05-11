import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Test from './Test';
import Home from './Home';
import Cricket from './Cricket';
import Bollywood from './Bollywood';

import Header from './comman/Header';
import Footer from './comman/Footer';
import Manubar from './comman/Manubar';
import Left from './comman/Left';
import Right from './comman/Right';

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
