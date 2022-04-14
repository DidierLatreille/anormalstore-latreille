import React from "react";
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import "../App.css";

export default function Item({ id, title, price, img, stock}) {

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " items.");
    }

    return (
        <>
            <Card className="Cards" key={id} style={{ width: '18rem' }}>
                <Card.Img className='cardImagePreview' variant="top" src={img} />
                <Card.Body className="cardInfo">
                    <Card.Title className="cardTitle">{title}</Card.Title>
                <Card.Text className="cardPrice">{price}</Card.Text>
                <div className="cardVerMas">
                    <Button className="VerMas"><Link className="VerMasText" to={`/item/${id}`}>Ver +</Link></Button>
                </div>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                </Card.Body>
            </Card>
        </>
    )
}