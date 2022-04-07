import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../App.css';
import { getData } from './data';
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

    const [fotos, setFotos] = useState([])

    useEffect(() => {
        async function pedirDatos() {
            let datosRecibidos = await getData();
            setFotos(datosRecibidos);
        }
        pedirDatos();
    }, [])

    return (
        <>
                <h2>{greeting}</h2>

                <ItemList productos={fotos}/>
        </>
    );
}

export default ItemListContainer;