import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import PersonPage from './components/AboutPage/PersonPage';
import Home from './components/Home';
import SelectPage from './components/pages/SelectPage';
import Sertificate from './components/Sertificate/Sertificate';

const App = () => {
    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<SelectPage/>} />
                <Route path='/home' element={<Home/>}/>
                <Route path='/home' element={<Home/>}>
                    <Route path='/home/add' element={<PersonPage/>}/>
                    <Route path='/home/sertificate' element={<Sertificate/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;