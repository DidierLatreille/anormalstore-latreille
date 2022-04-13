import React from "react";
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import "../App.css";

export default function Item({ id, title, price, img}) {

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " items.");
    }

    return (
        <>
            <Card className="Cards" key={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                </Card.Body>
                <Button className="VerMas">Ver +</Button>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </Card>
        </>
    )
}