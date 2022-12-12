import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import About from './Navbar/About/About';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;