import '../App.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from './utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const checkout = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          qty: item.qtyItem
        }));
    
        test.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Peron",
            email: "peronperon@gmail.com",
            phone: "1137081848"
          },
          total: test.totalCarro(),
          items: itemsForDB,
          date: serverTimestamp()
        };
    
        console.log(order);
    
        const createOrderInFirestore = async () => {
          // Add a new document with a generated id
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
    
        createOrderInFirestore()
          .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
    
        test.clear();
    
      }

    function subtotal(item){
        return item.price * item.qtyItem;
    }

    return (
        <div className='WrapperCart'>
            <div className='TitleCart'>YOUR CART</div>
            {
                    (test.cartList.length > 0)
                    ? <button onClick={test.clear}>ELIMINAR TODOS</button>
                    : <div>
                        <p>Your cart is empty</p>
                        <Link to='/' >
                            <button>Ir a la Tienda</button>
                        </Link>
                    </div>
            }
            {
             test.cartList.length > 0 && (
            <>
                <div className='ContentCart'>
                    {
                        test.cartList.map( item => 
                            <div key={item.id} className='Product'>
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
                <button onClick={checkout}>Terminar mi compra</button>
            </div>
            </>
             )
            }
        </div>
    );
}

export default Cart;