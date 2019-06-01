import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ServiceProvider from './ServiceProvider'

ReactDOM.render(
    <ServiceProvider>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </ServiceProvider> 
    , document.getElementById('root'))
