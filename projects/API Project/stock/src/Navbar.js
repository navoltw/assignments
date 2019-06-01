import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
    return(
        <div className='header'>
            <h1><span class='highlight'>Tings</span>To Do</h1>
            <nav>
                <ul>
                <Link to='/Home'>Home</Link>
                <Link to='/Tings'>Tings</Link>
                <Link to='/About'>About</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar