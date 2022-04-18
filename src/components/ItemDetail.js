import "./details.css";
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Container } from 'reactstrap'
import GoToCart from "./GoToCart";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }

    console.log()

    return (
        <>{
            item && item.img
            ?
                <Container>
                    <div className='WrapperDetail'>
                        <div className="ImageContainer">
                            <img alt="" className='ImageDetail' src={item.img} />
                        </div>
                        <div className='InfoContainer'>
                            <div className="detailTitle">{item.title}</div>
                            <div className="detailDescrip">{item.description}</div>
                            <div className="detailPrice">Precio: $ {item.price}</div>
                            <div className="detailStock">{item.stock} unidades en stock</div>
                            {
                                itemCount === 0
                                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                : <GoToCart/>
                            }
                        </div>
                    </div>
                </Container>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail; 