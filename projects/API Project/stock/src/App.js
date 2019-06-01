import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Tings from './Tings';
import About from './About'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <>
            <Navbar />
            <Switch>
                <Route  path='/' component={Home}/>
                <Route exact path='/Tings' component={Tings}/>
                <Route path='/About' component={About} />
            </Switch>
            <Footer />
        </>
    )
}

export default App
