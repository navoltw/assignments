import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
    return(
        <>
        <header className='header'>
            <h1><span class='highlight' style={{color: 'black'}}>Tings</span></h1>
            <nav>
                <ul>
                <Link to='/Home'>Home</Link>
                <Link to='/Tings' class='current'>Tings</Link>
                <Link to='/About'>About</Link>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar