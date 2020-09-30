import React from 'react'
import HOC from '../../H.O.C/HOC'
import OurVehicles from './OurVehicles/OurVehicles'
import Services from '../Sections/Services/Services'
import DiscoverHonda from './DiscoverHonda/DiscoverHonda'
function Sections() {
    return (
        <HOC>
            <OurVehicles />
            <Services />
            <DiscoverHonda />
        </HOC>
    )
}

export default Sections
