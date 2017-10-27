import React, {Component} from 'react';

class HelpfulLinks extends Component {

    render() {

        let location = this.props.location;
        // eslint-disable-next-line
        let linkClass = "";

        const links = [{
            currentLocation: "Alabama",
            linkHeader: "Alabama Homeschool Laws",
            link: "http://www.homeschoolfacts.com/state-laws/alabama-homeschool-state-laws.html"
        },
            {
                currentLocation: "Alaska",
                linkHeader: "Alaska Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/alaska-homeschool-state-laws.html"
            },
            {
                currentLocation: "Arizona",
                linkHeader: "Arizona Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/arizona-homeschool-state-laws.html"
            },
            {
                currentLocation: "Arkansas",
                linkHeader: "Arkansas Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/arkansas-homeschool-state-laws.html"
            },
            {
                currentLocation: "California",
                linkHeader: "California Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/california-homeschool-state-laws.html"
            },
            {
                currentLocation: "Colorado",
                linkHeader: "Colorado Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/colorado-homeschool-state-laws.html"
            },
            {
                currentLocation: "Connecticut",
                linkHeader: "Connecticut Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/connecticut-homeschool-state-laws.html"
            },
            {
                currentLocation: "Delaware",
                linkHeader: "Delaware Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/delaware-homeschool-state-laws.html"
            },
            {
                currentLocation: "Florida",
                linkHeader: "Florida Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/florida-homeschool-state-laws.html"
            },
            {
                currentLocation: "Georgia",
                linkHeader: "Georgia Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/georgia-homeschool-state-laws.html"
            },
            {
                currentLocation: "Hawaii",
                linkHeader: "Hawaii Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/hawaii-homeschool-state-laws.html"
            },
            {
                currentLocation: "Idaho",
                linkHeader: "Idaho Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/idaho-homeschool-state-laws.html"
            },
            {
                currentLocation: "Illinois",
                linkHeader: "Illinois Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/illinois-homeschool-state-laws.html"
            },
            {
                currentLocation: "Indiana",
                linkHeader: "Indiana Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/indiana-homeschool-state-laws.html"
            },
            {
                currentLocation: "Iowa",
                linkHeader: "Iowa Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/iowa-homeschool-state-laws.html"
            },
            {
                currentLocation: "Kansas",
                linkHeader: "Kansas Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/kansas-homeschool-state-laws.html"
            },
            {
                currentLocation: "Kentucky",
                linkHeader: "Kentucky Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/kentucky-homeschool-state-laws.html"
            },
            {
                currentLocation: "Louisiana",
                linkHeader: "Louisiana Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/louisiana-homeschool-state-laws.html"
            },
            {
                currentLocation: "Maine",
                linkHeader: "Maine Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/maine-homeschool-state-laws.html"
            },
            {
                currentLocation: "Maryland",
                linkHeader: "Maryland Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/maryland-homeschool-state-laws.html"
            },
            {
                currentLocation: "Massachusetts",
                linkHeader: "Massachusetts Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/massachusetts-homeschool-state-laws.html"
            },
            {
                currentLocation: "Michigan",
                linkHeader: "Michigan Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/michigan-homeschool-state-laws.html"
            },
            {
                currentLocation: "Minnesota",
                linkHeader: "Minnesota Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/minnesota-homeschool-state-laws.html"
            },
            {
                currentLocation: "Mississippi",
                linkHeader: "Mississippi Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/mississippi-homeschool-state-laws.html"
            },
            {
                currentLocation: "Missouri",
                linkHeader: "Missouri Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/missouri-homeschool-state-laws.html"
            },
            {
                currentLocation: "Montana",
                linkHeader: "Montana Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/montana-homeschool-state-laws.html"
            },
            {
                currentLocation: "Nebraska",
                linkHeader: "Nebraska Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/nebraska-homeschool-state-laws.html"
            },
            {
                currentLocation: "Nevada",
                linkHeader: "Nevada Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/nevada-homeschool-state-laws.html"
            },
            {
                currentLocation: "New Hampshire",
                linkHeader: "New Hampshire Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/new-hampshire-homeschool-state-laws.html"
            },
            {
                currentLocation: "New Jersey",
                linkHeader: "New Jersey Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/new-jersey-homeschool-state-laws.html"
            },
            {
                currentLocation: "New Mexico",
                linkHeader: "New Mexico Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/new-mexico-homeschool-state-laws.html"
            },
            {
                currentLocation: "New York",
                linkHeader: "New York Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/new-york-homeschool-state-laws.html"
            },
            {
                currentLocation: "North Carolina",
                linkHeader: "North Carolina Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/north-carolina-homeschool-state-laws.html"
            },
            {
                currentLocation: "North Dakota",
                linkHeader: "North Dakota Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/north-dakota-homeschool-state-laws.html"
            },
            {
                currentLocation: "Ohio",
                linkHeader: "Ohio Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/ohio-homeschool-state-laws.html"
            },
            {
                currentLocation: "Oklahoma",
                linkHeader: "Oklahoma Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/oklahoma-homeschool-state-laws.html"
            },
            {
                currentLocation: "Oregon",
                linkHeader: "Oregon Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/oregon-homeschool-state-laws.html"
            },
            {
                currentLocation: "Pennsylvania",
                linkHeader: "Pennsylvania Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/pennsylvania-homeschool-state-laws.html"
            },
            {
                currentLocation: "Rhode Island",
                linkHeader: "Rhode Island Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/rhode-island-homeschool-state-laws.html"
            },
            {
                currentLocation: "South Carolina",
                linkHeader: "South Carolina Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/south-carolina-homeschool-state-laws.html"
            },
            {
                currentLocation: "South Dakota",
                linkHeader: "South Dakota Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/south-dakota-homeschool-state-laws.html"
            },
            {
                currentLocation: "Tennessee",
                linkHeader: "Tennessee Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/tennessee-homeschool-state-laws.html"
            },
            {
                currentLocation: "Texas",
                linkHeader: "Texas Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/texas-homeschool-state-laws.html"
            },
            {
                currentLocation: "Utah",
                linkHeader: "Utah Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/utah-homeschool-state-laws.html"
            },
            {
                currentLocation: "Vermont",
                linkHeader: "Vermont Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/vermont-homeschool-state-laws.html"
            },
            {
                currentLocation: "Virginia",
                linkHeader: "Virginia Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/virginia-homeschool-state-laws.html"
            },
            {
                currentLocation: "Washington",
                linkHeader: "Washington Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/washington-homeschool-state-laws.html"
            },
            {
                currentLocation: "West Virginia",
                linkHeader: "West Virginia Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/west-virginia-homeschool-state-laws.html"
            },
            {
                currentLocation: "Wisconsin",
                linkHeader: "Wisconsin Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/wisconsin-homeschool-state-laws.html"
            },
            {
                currentLocation: "Wyoming",
                linkHeader: "Wyoming Homeschool Laws",
                link: "http://www.homeschoolfacts.com/state-laws/wyoming-homeschool-state-laws.html"
            }
        ];

        let newLinks = [{
            currentLocation: "Select State",
            linkHeader: "Homeschool Laws",
            link: "http://www.homeschoolfacts.com/state-laws.html"
        }];

        let mainLink = "https://www.state.gov/m/dghr/flo/c21941.htm";

        function handleChange() {
            for (let i = 0; i < links.length; i++) {
                if (links[i].currentLocation === location) {
                    newLinks.currentLocation = links[i].currentLocation;
                    newLinks.linkHeader = links[i].linkHeader;
                    newLinks.link = links[i].link;
                }
                if (newLinks.currentLocation === "Choose State") {
                    linkClass = "blank"
                }
                else {
                    linkClass = "link"
                }
            }
        }

        return (
            <div>
                <div className="col-xs-12 col-md-6 helpful-links">
                    <h4 className="helpful-links-header">Helpful Links:</h4>
                    <ul onChange={handleChange()}>
                        <li className="link-header"><a href={mainLink} target="_blank">State.gov Site</a></li>
                        <li className="link-header"><a href={newLinks.link} target="_blank">{newLinks.linkHeader}</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HelpfulLinks;