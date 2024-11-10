import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './navigation/nav';
import Program from './program/program';
import About from'./about/about'
import Campus from './campus/campus';
import Testmonial from './testmonial/testmonial';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Hero from './hero/hero';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
    <Nav/>
    <Hero/>
    <Program/>
    <About/>
    <Campus/>
    <Testmonial/>
    <Contact/>
    <Footer/>
    </div>
);

