import React, {Component} from 'react';

class StateLabel extends Component {

    render(){
        return(
            <div>
                <h4>Homeschooling In:</h4>
                <h1>{this.props.location}</h1>
            </div>
        );
    }

}

export default StateLabel;