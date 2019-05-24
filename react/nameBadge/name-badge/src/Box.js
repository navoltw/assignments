import React from 'react';


class box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <form >
                    <input type="text"
                            placeholder='First Name'    
                            name='fName'
                            value={this.state.name}
                    />
                    <input type="text"
                            placeholder='Last Name'
                            name='lName'
                            value={this.state.name}
                    />
                    <input type="text"
                            placeholder='Email'
                            name='email'
                            value={this.state.name}
                    />
                
                </form>
            </>
         );
    }
}
 
export default box;