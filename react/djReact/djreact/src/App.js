import React from 'react';
import './styles.css'
import Box from './Box.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            squares: ['white', 'white', 'white', 'white']
         }
    }


    blackOrWhite = () => {
        this.setState(
            prevState => {
             if (prevState.squares[0] === 'black'){
                 return {
                    squares: ['white', 'white', 'white', 'white']
                 }
             }else {
                 return{
                    squares: ['black', 'black', 'black', 'black']
                 }
             }
                
            }
        )
    }
    

    randomColor = () => {
        const colors = ['palegreen', 'crimson', 'skyblue', 'magenta']
        const boxOne = colors[Math.floor(Math.random()*colors.length)]
        const boxTwo = colors[Math.floor(Math.random()*colors.length)]
        const boxThree = colors[Math.floor(Math.random()*colors.length)]
        const boxFour = colors[Math.floor(Math.random()*colors.length)]
        this.setState({
            squares : [boxOne, boxTwo, boxThree, boxFour]
        })
    }


    render() { 
        return ( 
        <>
        <div className='square-container'>
            <box color={this.state.squares[0]} />
            <box color={this.state.squares[1]} />
            <box color={this.state.squares[2]} />
            <box color={this.state.squares[3]} />
        </div>
            <button onClick={this.blackOrWhite}>Black or White</button>
            <button onClick={this.randomColor}>Random</button>
            <button></button>
            <button></button>
        
        </>
         );
    }
}
 
export default App;
