import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../assets/cart.png'
import '../App.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const test = useContext(CartContext);

    return (
        <>
        <Link to='/cart' style={{textDecoration: "none"}}>
            <button type="button" className="btn bg-warning position-relative">
                <img width="25" height="auto" alt="carrito"className='Cart' src={cart} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                </span>
            </button>
        </Link>
        </>
    );
}

export default CartWidget;