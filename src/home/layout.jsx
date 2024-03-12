import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Events from './Events';
import Service from './Service';
import Contact from './Contact';
function Layout(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Events/>
            <Service/>
            <Contact/>
        </div>
    )
}
export default Layout;