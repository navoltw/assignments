import React, { Component } from 'react';
import axios from 'axios'

class Tings extends React.Component {
    constructor() {
        super();
        this.state = { 
            activities:[]
         }
    }

    componentDidMount(){
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
            <div>
                { this.state.activities.map(activities =>
                    <div>
                        <h1>{activities.name}</h1>
                    </div>
                )}
            </div>
         );
    }
}
 
export default Tings;