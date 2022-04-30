import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router';
import { firestoreFetch } from './utils/firestoreFetch';

const ItemListContainer = () => {

    const [fotos, setFotos] = useState([])
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setFotos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

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