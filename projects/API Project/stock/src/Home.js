import React from 'react';
import Footer from './Footer'
import Navbar from './Navbar'
import './styles.css'


const Home = () => {
    return(
        <>
            <Navbar />
            <div className='content'>Tings To Do</div>
            <h1>When you are bored try something new.</h1>
            <Footer />
        </>
    )
}
export default Home