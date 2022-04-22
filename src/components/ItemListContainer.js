import React from 'react';
import { useEffect, useState } from 'react';
import customFetch from "./utils/customFetch";
import ItemList from './ItemList'
import { useParams } from 'react-router';
const {data} = require('./data');

const ItemListContainer = () => {

    const [fotos, setFotos] = useState([])
    const { idCategory } = useParams();

    useEffect(() => {
        customFetch(100, data.filter(item => {
            if(idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
        .then(result => setFotos(result))
        .catch(err => console.log(err))
    }, [fotos]);

    return (
        <>
            <ItemList productos={fotos} />
        </>
    );
}

export default ItemListContainer;