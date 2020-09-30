import React from 'react'
import MainContainer from '../../../H.O.C/MainContainer/MainContainer'
import Cards from '../../../H.O.C/Cards/Cards'
import DealerImg from '../../../assets/img/Services/honda-dealerships-2.jpg'
import DeliveryImg from '../../../assets/img/Services/delivery-status.jpg'
import FinancialImg from '../../../assets/img/Services/financial-support.jpg'
import classes from '../../../H.O.C/MainContainer/MainContainer.module.css'


function Services() {
    return (
        <MainContainer   textOne='Services' textTwo='We Offer' class={classes.bg} headingColor='white'>
            <Cards name='DealerNet Work' photo={DealerImg} bgColor='red' textColor='white' />
            <Cards name='Delivery Status' photo={DeliveryImg} bgColor='red' textColor='white' />
            <Cards name='Financial Support' photo={FinancialImg} bgColor='red' textColor='white' />

        </ MainContainer>
    )
}
export default Services
 