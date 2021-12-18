import React from 'react';
import './homepage.css';
import Navbar from './Navbar';
import Main from './Main';
import Sub from './Sub';
import Main2 from './Main2';
import Sub2 from './Sub2';
import Nav2 from './Nav2';


const Home = () => {
    return (
        <div className='home_home'>
            <Navbar></Navbar>
            <Main></Main>
            <Sub></Sub>
            <Main2></Main2>
             <Sub2></Sub2>
        </div>
    )
}

export default Home
