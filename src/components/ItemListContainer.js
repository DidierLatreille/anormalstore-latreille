import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " items.");
    }

    return (
        <>
                <h2>{greeting}</h2>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;