import React from 'react';
import LocationSearch from '../../components/LocationSearch/LocationSearch';
import FuelReleases from '../FuelReleases/FuelReleases';

function Home(props) {
    
    return (
        <div>
            <LocationSearch/>
            <FuelReleases/>
        </div>
    )
}

export default Home;
