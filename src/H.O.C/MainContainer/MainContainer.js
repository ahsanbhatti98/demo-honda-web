import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import classes from "./MainContainer.module.css"



function MainContainer(props) {
    return (
        <Container fluid className={props.class}>
            <div style={{ textAlign: 'center' }}>

                <h2 className={classes.heading} style={{color:props.headingColor}}>{props.textOne} <span style={{ color: 'red' }}>{props.textTwo}</span></h2>
                <p className={classes.paragraph}>{props.paragraph}</p>

            </div>
            <Row>
                <Col className={classes.col}  >
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}


export default MainContainer
