import React, {createContext, useState} from "react";


export const CartContext = createContext();


// TODO: agregar item count para CartWidget

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        let aux = {id: item.id, name: item.title, price: item.price, quantity: quantity};
        if ( isInCart(item.id)) {
            console.log("Item Ya existe");
        } else {
            cart.push(aux)
        }
    }

    const removeItem = (itemId) =>{

        if (isInCart(itemId)){
            let newCarrito = cart.filter(function(value,index,arr){
                return value !== itemId;
            })

            setCart(newCarrito);
        }


    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        let bool = false;
        cart.map((item) => {
            if(item.id === itemId){
                bool = true;
            }
        })
        return bool;
    }


    return (
        <CartContext.Provider value={[cart,setCart,addItem,removeItem,clear,isInCart]}>
            {props.children}
        </CartContext.Provider>
    )
};

