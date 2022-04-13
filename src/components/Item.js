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
                <Card.Img className='ImagePreview' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                </Card.Body>
                <Button className="VerMas">
                    <Link to={`/item/${id}`}>Ver +</Link>
                </Button>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </Card>
        </>
    )
}