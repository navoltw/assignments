import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
    return(
        <div className='header'>
            <h1><span class='highlight'>Tings</span>To Do</h1>
            <nav>
                <ul>
                <link rel="stylesheet">Home</link>
                <link rel="stylesheet">Tings</link>
                <link rel="stylesheet">About</link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar