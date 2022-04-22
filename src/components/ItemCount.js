import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import "../App.css";

const ItemCount = ({ stock, initial,  onAdd }) => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        setCount(initial);
    },[]);

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className='ProductAmountContainer'>
            <Button className= "botonCant" onClick={restar}>-</Button>
            <div className='ProductAmount'>{count}</div>
            <Button className= "botonCant" onClick={aumentar}>+</Button>
            {
                stock && count
                ? <Button className= "addToCart" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button disabled>Sin stock</Button>
            }    
        </div>
    );
}

export default ItemCount;