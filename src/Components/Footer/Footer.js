import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ListContainer from '../../H.O.C/ListContainer/ListContainer'
import classes from './Footer.module.css'
import facebookLogo from '../../assets/img/logo/Facebook Logo (2).png'
import youtubeLogo from '../../assets/img/logo/Youtube.png'



function Footer() {
    return (
        <div className={classes.container}>

            <div className={classes.col}>

                <ListContainer title='About Us'
                    items={['Honda Atlas Cars (Pakistan) Ltd'
                        , 'Financial Reports'
                        , 'Sitemap']}
                />

                <ListContainer title='Vehicles'
                    items={['City', 'Civic', 'CR-V']}
                />

                <ListContainer title='Dealership Network'
                    items={['3S (Sales, Service & Spare parts)'
                        , '2S (Service & Spare parts)'
                        , '1S (Spare parts)']}
                />


                <ListContainer title='Services'
                    items={['Online Booking', 'Spare Parts'
                        , 'Delivery Status', 'FREE Airbag Inflator'
                        , 'Financial Support']}
                />

                <ListContainer title='Discover'
                    items={['News & Events', 'Promotions'
                        , 'Quality Policy', 'Heritage'
                        , 'Sustainability', 'Innovation'
                        , 'Motor Sports', 'Honda Asia & Oceania'
                        , 'Honda Global']}
                />


                <ListContainer title='Help & Support'
                    items={['Contact Us', 'Location Map'
                        , 'Careers']}
                />

                <div className={classes.div}>
                    <h4>Follow Us</h4>
                   <a href='blank'><img className={classes.icon} src={facebookLogo} alt='facebook Logo' /></a> 
                   <a href='blank'><img className={classes.icon} src={youtubeLogo} alt='youtube Logo' /></a> 
                </div>

                <div className={classes.div}>
                    <p>Sign up for our newsletter!</p>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Button variant="secondary" type="submit" >
                            Subscribe
                        </Button>
                    </Form>
                </div>

            </div>

        </div>
    )
}

export default Footer


















