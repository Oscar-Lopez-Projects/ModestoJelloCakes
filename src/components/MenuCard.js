import React from 'react';
import {Card,Button,Col, Row} from 'react-bootstrap';


const MenuCard = (props)=>{
    return(
       <Row xs={1} md={4} lg={4} className="g-4">
            <Col>
                <Card style={{ width: '18rem', }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body style={{ background:"purple", flexDirection:"column"}}>
                        <Card.Title>{props.drink}</Card.Title>
                        <Card.Text>
                            {props.instructions}
                        </Card.Text>
            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default MenuCard;