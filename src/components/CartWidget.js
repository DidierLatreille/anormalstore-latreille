import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../assets/cart.png'
import '../App.css';

const CartWidget = () => {
    return (
        <>
        <button type="button" class="btn bg-warning position-relative">
            <img width="25" height="auto" alt="carrito"className='Cart' src={cart} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
            </span>
        </button>
        </>
    );
}

export default CartWidget;