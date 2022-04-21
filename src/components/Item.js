import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../App.css";

export default function Item({ id, title, price, img, stock}) {

    return (
        <>
            <Card className="Cards" key={id} style={{ width: '18rem' }}>
                <Card.Img className='cardImagePreview' variant="top" src={img} />
                <Card.Body className="cardInfo">
                    <Card.Title className="cardTitle">{title}</Card.Title>
                <Card.Text className="cardPrice">{price}</Card.Text>
                <div className="cardVerMas">
                <Link class="Link" to={`/item/${id}`}><Button className="VerMas"><p className="VerMasText">Ver +</p></Button></Link>
                </div>
                </Card.Body>
            </Card>
        </>
    )
}