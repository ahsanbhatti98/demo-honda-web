import React from 'react'
import { Card } from 'react-bootstrap';


function Cards(props) {
    return (
        <Card style={{ width: '18rem',marginBottom:'30px' }}>
            <a href='blank'><Card.Img variant="top" src={props.photo} /></a>
            <Card.Body style={{backgroundColor:props.bgColor,color:props.textColor}}>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}
export default Cards