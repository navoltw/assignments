import React, { Component } from 'react';
import axios from './axios'
const ActivityContext = React.createContext()


class ServiceProvider extends Component {
    constructor(){
        super()
        this.state ={
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
            <ActivityContext.ServiceProvider
            value={{
                ...this.state,
                getActivities: this.getActivities
            }}>
                {this.props.children}
            </ActivityContext.ServiceProvider>
        )
    }
}

export default ServiceProvider;

export const withActvities = C => props => (
    <ActivityContext.Consumer>
        { value => <C {...value} {...props} /> }
    </ActivityContext.Consumer>
)
