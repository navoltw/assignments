import React, {Component} from 'react'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            isGoing: false
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        //Before destructuring name and value
        //        console.log(event.target.value)
        //this.setState({[event.target.name]: event.target.value})
        // Destructuring
        // console.log(event.target)
        // const {name, value, checked, type} = event.target

        // this.setState({[name]: type === 'checkbox' ? checked : value})

        const {name, checked, type} = event.target

        let value;
        if(type === 'checkbox'){
            value = checked
        } else {
            value = event.target.value
        }
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.fName)
        alert(this.state.fName)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name='fName' value={this.state.fName}/>
                <input onChange={this.handleChange} type="text" name='lName' value={this.state.lName}/>
                <input onChange={this.handleChange} type="checkbox" name='isGoing' value={this.state.isGoing}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default App