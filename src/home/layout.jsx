import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
function Layout(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
        </div>
    )
}
export default Layout;