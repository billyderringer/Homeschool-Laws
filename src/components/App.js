import React, {Component} from 'react';
import '../css/App.css';
import '../css/reset.min.css';
import Nav from './Nav';
// eslint-disable-next-line
import RegulationLevel from './RegulationLevel';
import StateSelector from './StateSelector';
import StateLabel from './StateLabel';
// eslint-disable-next-line
import InfoContainer from './InfoContainer';
import HelpfulLinks from './HelpfulLinks';
import FAQ from "./FAQ";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : 'Select State',
        };
    }

    changeLocation(location){
        this.setState({location: location});
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav/>
                <div className="row location-row">
                    <div className="col-xs-12 col-md-4 text-center state-selector">
                        <StateSelector handleChangeLocation={this.changeLocation.bind(this)} location={this.state.location}/>
                    </div>
                    <div className="col-xs-12 col-md-4 text-center">
                        <StateLabel location={this.state.location} />
                    </div>
                </div>
                <div className="row info-container">
                    <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-0">
                        <FAQ location={this.state.location} handleChangeLocation={this.changeLocation.bind(this)}/>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
                        <HelpfulLinks location={this.state.location} handleChangeLocation={this.changeLocation.bind(this)}/>
                    </div>
                </div>
                <footer className="text-center">
                    <h6>© 2017 Billy Derringer</h6>
                </footer>
            </div>
        );
    }
}

export default App;
