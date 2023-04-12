import React from 'react';

const SpaceXFlight = ({flight}) => {
    return (
        <div>
            <h2>Mission: {flight.mission_name}, {flight.launch_year} year</h2>
            <img src={flight.links.mission_patch_small} alt={flight.mission_name}/>
        </div>
    );
};

export default SpaceXFlight;