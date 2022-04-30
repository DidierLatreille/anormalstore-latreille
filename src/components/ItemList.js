import React from 'react'
import Item from './Item'
import { Container, Row } from 'reactstrap'
import "../App.css";

export default function ItemList({productos}) {

    return (
        <>
            <Container className='contenedorProductos'>
                <Row className='cajaProductos'>
                    {   
                        productos.length > 0
                        ? productos.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} img={item.img} stock={item.stock}/>)
                        : <p>Cargando...</p>
                    }
                </Row>
            </Container>
        </>
    )
}