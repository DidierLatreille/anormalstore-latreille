import '../App.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);

    function subtotal(item){
        return item.price * item.qtyItem;
    }

    return (
        <div className='WrapperCart'>
            <div className='TitleCart'>YOUR CART</div>
            <button onClick={test.clear}>ELIMINAR TODOS</button>
            {
             test.cartList.length > 0 && (
            <>
                <div className='ContentCart'>
                    {
                        test.cartList.map( item => 
                            <div className='Product'>
                                <div className='ProductDetail'>
                                    <img  className='ImageCart' src={item.img} alt="hola"/>
                                    <div className='Details'>
                                        <span>
                                            <b className='TitleProduct'>Product: {item.title}</b>
                                        </span>
                                        <button type="filled" onClick={() => test.deleteItem(item.id)}>DELETE</button>
                                    </div>
                                </div>
                                <div className='PriceDetail'>
                                    <div className='ProductAmountContainer'>
                                    <p className='ProductAmount'>Cantidad: {item.qtyItem}</p>
                                    </div>
                                    <p className='ProductPrice'>Precio por unidad: {item.price}</p>
                                    <p className='ProductPrice'>Subtotal: {subtotal(item)}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            <div className='resumenCompra'>
                <h2 className='tituloResumenCompra'>Resumen de compra</h2>
                <h3>Total Carrito: {test.totalCarro()}</h3>
                <button>Terminar mi compra</button>
            </div>
            </>
             )
            }
        </div>
    );
}

export default Cart;