import React from 'react'
import { Carousel } from 'react-bootstrap';
import Carosuelimg1 from "../../assets/img/Carosuel/Dealership-Honda-Banner(Carousel 1).jpg"
import Carosuelimg2 from "../../assets/img/Carosuel/Dealership-Honda-Banner(Carosuel 2).jpg"
import Carosuelimg3 from "../../assets/img/Carosuel/1920x710(Carosuel 3).jpg"



function Carosuel() {
    return (
        <Carousel style={{marginBottom:'100px'}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carosuelimg1}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carosuelimg2}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carosuelimg3}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}
export default Carosuel