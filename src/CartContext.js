import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [aux, setAux] = useState(0);

    const addItem = (item, quantity) => {
        let aux1 = { id: item.id, name: item.title, price: item.price, quantity: quantity, image: item.pictureUrl, stock: item.stock };
        if (!isInCart(item.id)) {
            cart.push(aux1)
        }
    }

    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
            let newCarrito = cart.filter(function (value, index, arr) {
                return value.id !== itemId;
            })
            setCart(newCarrito);
        }
    }

    const replaceItem = (itemData) => {
        cart.forEach(element => {
            if (element.id === itemData.id) {
                cart[element] = itemData;
            }
        });
    }

    const updateNumber = () => {
        let aux1 = 0;
        cart.forEach(element => {
            aux1 = aux1 + element.quantity;
        });
        setAux(aux1);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        let bool = false;
        cart.forEach(element => {
            if (element.id === itemId) {
                bool = true;
            } 
        });
        return bool;
    }


    return (
        <CartContext.Provider value={[cart, setCart, aux, setAux, addItem, removeItem, clear, isInCart, updateNumber, replaceItem]}>
            {props.children}
        </CartContext.Provider>
    )
};

