import React, {Component} from 'react';
import StateSelector from "./StateSelector";

class RegulationLevel extends Component {

    getLevel(){
        this.setState({value: StateSelector.value});
    }

    render(){

        return(
            <section className="reg-level-container">
                <div className="row reg-row">
                    <div className="col-xs-4 col-md-2 reg-level text-right">
                        <h3 className={this.getLevel()}>{this.getLevel.level}</h3>
                    </div>
                </div>
            </section>
        );
    }
}

export default RegulationLevel;