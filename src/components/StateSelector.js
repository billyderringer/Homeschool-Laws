import React, {Component} from 'react';

class StateSelector extends Component {

    handleChange({target}){
        this.props.handleChangeLocation(target.value)
    }


    render() {


        return (
            <div>

            <select id="location" value={this.props.location} onChange={this.handleChange.bind(this)}>
                <option label="Choose State" value="Choose State">Choose State</option>
                <option label="Alabama" value="Alabama">Alabama</option>
                <option label="Alaska" value="Alaska">Alaska</option>
                <option label="Arizona" value="Arizona">Arizona</option>
                <option label="Arkansas" value="Arkansas">Arkansas</option>
                <option label="California" value="California">California</option>
                <option label="Colorado" value="Colorado">Colorado</option>
                <option label="Connecticut" value="Connecticut">Connecticut</option>
                <option label="Delaware" value="Delaware">Delaware</option>
                <option label="Florida" value="Florida">Florida</option>
                <option label="Georgia" value="Georgia">Georgia</option>
                <option label="Hawaii" value="Hawaii">Hawaii</option>
                <option label="Idaho" value="Idaho">Idaho</option>
                <option label="Illinois" value="Illinois">Illinois</option>
                <option label="Indiana" value="Indiana">Indiana</option>
                <option label="Iowa" value="Iowa">Iowa</option>
                <option label="Kansas" value="Kansas">Kansas</option>
                <option label="Kentucky" value="Kentucky">Kentucky</option>
                <option label="Louisiana" value="Louisiana">Louisiana</option>
                <option label="Maine" value="Maine">Maine</option>
                <option label="Maryland" value="Maryland">Maryland</option>
                <option label="Massachusetts" value="Massachusetts">Massachusetts</option>
                <option label="Michigan" value="Michigan">Michigan</option>
                <option label="Minnesota" value="Minnesota">Minnesota</option>
                <option label="Mississippi" value="Mississippi">Mississippi</option>
                <option label="Missouri" value="Missouri">Missouri</option>
                <option label="Montana" value="Montana">Montana</option>
                <option label="Nebraska" value="Nebraska">Nebraska</option>
                <option label="Nevada" value="Nevada">Nevada</option>
                <option label="New Hampshire" value="New Hampshire">New Hampshire</option>
                <option label="New Jersey" value="New Jersey">New Jersey</option>
                <option label="New Mexico" value="New Mexico">New Mexico</option>
                <option label="New York" value="New York">New York</option>
                <option label="North Carolina" value="North Carolina">North Carolina</option>
                <option label="North Dakota" value="North Dakota">North Dakota</option>
                <option label="Ohio" value="Ohio">Ohio</option>
                <option label="Oklahoma" value="Oklahoma">Oklahoma</option>
                <option label="Oregon" value="Oregon">Oregon</option>
                <option label="Pennsylvania" value="Pennsylvania">Pennsylvania</option>
                <option label="Rhode Island" value="Rhode Island">Rhode Island</option>
                <option label="South Carolina" value="South Carolina">South Carolina</option>
                <option label="South Dakota" value="South Dakota">South Dakota</option>
                <option label="Tennessee" value="Tennessee">Tennessee</option>
                <option label="Texas" value="Texas">Texas</option>
                <option label="Utah" value="Utah">Utah</option>
                <option label="Vermont" value="Vermont">Vermont</option>
                <option label="Virginia" value="Virginia">Virginia</option>
                <option label="Washington" value="Washington">Washington</option>
                <option label="West Virginia" value="West Virginia">West Virginia</option>
                <option label="Wisconsin" value="Wisconsin">Wisconsin</option>
                <option label="Wyoming" value="Wyoming">Wyoming</option>
            </select>
            </div>
        );
    }
}

export default StateSelector;