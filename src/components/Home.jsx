import React from 'react';
import { Outlet } from 'react-router-dom';
import About from './About';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        
        // <div className='home'>
        //     <div className="container"><Sidebar/>
        //     <About/></div>
        // </div>
        <>
        <div className="home">
            <Sidebar/>
            <About/>
        </div>
        </>
    );
};

export default Home;