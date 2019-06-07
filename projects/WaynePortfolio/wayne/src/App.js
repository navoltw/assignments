import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom'


const App = () => {
    return(
        <>
            <Navbar />
                <Switch>
                    <Route path='/Home' component={Home} />
                    <Route path='/Projects' component={Projects} />
                    <Route path='/Resume' component={Resume} />
                    <Route path='/Contact' component={Contact} />
                </Switch>
            <Footer />
        </>
    )
}

export default App