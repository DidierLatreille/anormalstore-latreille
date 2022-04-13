import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    console.log()

    return (
        <>{
            item && item.img
            ?
            <div className='DetailContainer'>
                <div className='WrapperDetail'>
                    <div className='ImgContainer'>
                        <img alt="" className='ImageDetail' src={item.img} />
                    </div>
                    <div className='InfoContainer'>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                        <div>$ {item.price}</div>
                        <div>{item.stock} unidades en stock</div>
                    </div>
                    <ItemCount className="ContadorDetalle" stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail; 