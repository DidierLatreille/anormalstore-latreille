import React from 'react';
import { useEffect, useState } from 'react';
import customFetch from "./utils/customFetch";
import ItemList from './ItemList'
import { useParams } from 'react-router';
import { collection, doc, getDocs } from "firebase/firestore";
import db from './utils/firebaseConfig';

const ItemListContainer = () => {

    const [fotos, setFotos] = useState([])
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchFromFirestore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFirestore;
        }
        fetchFromFirestore()
        .then(result => setFotos(result))
        .catch(err => console.log(err));
    }, [fotos]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setFotos([]);
        })
    }, []);

    return (
        <>
            <ItemList productos={fotos} />
        </>
    );
}

export default ItemListContainer;