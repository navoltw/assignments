import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import Footer from './Footer'

class Tings extends React.Component {
    constructor() {
        super();
        this.state = { 
            activities:[]
         }
    }

    componentDidMount(){
       this.getActivities()
    }

    getActivities = () => {
        axios.get('https://vschool-cors.herokuapp.com?url=https://www.boredapi.com/api/activity')
        .then(response => {
            this.setState({
                activities: response.data.results
            })
        })
        .catch(err => console.log(err))
    }

    render() { 
        
        return ( 
            <>
                <Navbar />
                <div>
                    { this.state.activities.map(activities =>
                        <div>
                            <h1>{activities.name}</h1>
                        </div>
                    )}
                </div>
                <Footer />
            </>
         );
    }
}
 
export default Tings;