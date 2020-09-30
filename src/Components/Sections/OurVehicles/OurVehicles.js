import React from 'react'
import Cards from '../../../H.O.C/Cards/Cards';
import cityImg from '../../../assets/img/Cards/city-1.3-400x300(Card 1).jpg'
import crvImg from '../../../assets/img/Cards/crv-400x300(Card 3).jpg'
import civicImg from '../../../assets/img/Cards/Civic-img-43-400x300(Card 2).png'
import MainContainer from '../../../H.O.C/MainContainer/MainContainer';
import classes from '../../../H.O.C/MainContainer/MainContainer.module.css'

function OurVehicles() {
    return (
        <MainContainer textOne='Our' textTwo='Vehicles' paragraph="LET'S FIND YOUR NEXT CAR" class={classes.container}>
            <Cards name='City' photo={cityImg} />
            <Cards name='Civic' photo={civicImg} />
            <Cards name='CR-V' photo={crvImg} />
        </MainContainer>
    )
}
export default OurVehicles