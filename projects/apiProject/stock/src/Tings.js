// import React, { Component } from 'react';
// import axios from 'axios'
import React from 'react';

import {withActivities} from './ServiceProvider'

// class Tings extends Component {
//     constructor() {
//         super();
//         this.state = { 
//             activities:[]
//          }
//     }

    // componentDidMount(){
    //    this.getActivities()
    // }

    // getActivities = () => {
    //     axios.get('https://vschool-cors.herokuapp.com?url=https://www.boredapi.com/api/activity')
    //     .then(response => {
    //         this.setState({
    //             activities: response.data.results
    //         })
    //     })
    //     .catch(err => console.log(err))
    // }

//     render() { 
        
//         return ( 
//             <>
//                 <Navbar />
//                 <div>
//                     { this.state.activities.map(activities =>
//                         <div>
//                             <h1>{activities.name}</h1>
//                         </div>
//                     )}
//                 </div>
//                 <Footer />
//             </>
//          );
//     }
// }
 const Tings = () => {
     return(
        <>
            <div className='container'>
                { this.state.activities.map(activities =>
                    <div>
                        <h1>{activities.name}</h1>
                    </div>
                )}
            </div>  
        </>
     )
 }
export default withActivities(Tings);