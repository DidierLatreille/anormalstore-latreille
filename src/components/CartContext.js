import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    img: item.img,
                    title: item.title,
                    price: item.price,
                    qtyItem: quantity
                }
            ]); 
        } else {
            found.qtyItem += quantity;
            setCartList([
                ...cartList
            ]);
        }
    }

    const itemsEnCarro = () => {
        return cartList.reduce((a,v) => a = a + v.qtyItem , 0);
    }

    const clear = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.id !== id);
        setCartList(result);
    }

    const totalCarro = () => {
        return cartList.reduce((a,v) => a = a + v.price * v.qtyItem , 0);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, deleteItem, totalCarro, itemsEnCarro}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;