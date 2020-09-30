import React from 'react'
import Cards from '../../../H.O.C/Cards/Cards'
import MainContainer from '../../../H.O.C/MainContainer/MainContainer'
import Heritage from '../../../assets/img/Why us/heritages_top_2(1).jpg'
import Innovation from '../../../assets/img/Why us/innovation_future_robotics(2).png'
import F1 from '../../../assets/img/Why us/f1-rd10(3).jpg'
import classes from '../../../H.O.C/MainContainer/MainContainer.module.css'

function DiscoverHonda() {
    return (
        <MainContainer textOne='Discover' textTwo='Honda' paragraph="The team at Honda works around the clock to make leaps in technology,
         innovation and environment in order to create seamless experiences for the global 
         community" class={classes.container}>
            <Cards name='Heritage' photo={Heritage} />
            <Cards name='Innovation' photo={Innovation} />
            <Cards name='Motor Sport' photo={F1} />
        </MainContainer>
    )
}
export default DiscoverHonda
