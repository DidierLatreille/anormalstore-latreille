import "./details.css";
import ItemCount from './ItemCount';
import { Container } from 'reactstrap'

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        </div>
                    </div>
                </Container>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail; 