import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                        placeholder="First Name"
                        name="fName"
                        value="this.state.fName"

                />
            </form>
            </>
         )
    }
}
 
export default Form;