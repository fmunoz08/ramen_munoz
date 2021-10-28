import React, {createContext, useState} from "react";


export const CartContext = createContext();


// TODO: agregar item count para CartWidget

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [aux, setAux] = useState(0);

    const addItem = (item, quantity) => {
        let aux1 = {id: item.id, name: item.title, price: item.price, quantity: quantity,image: item.pictureUrl,stock: item.stock};
        if ( !isInCart(item.id)) {
            cart.push(aux1)
        }
    }

    const removeItem = (itemId) =>{
        if (isInCart(itemId)){
            let newCarrito = cart.filter(function(value,index,arr){             
                return value.id !== itemId;
            })
            setCart(newCarrito);
        }
    }

    const replaceItem = (itemData) => {
        let indexnumero = 0;
        cart.map((item,index) => {
            if(item.id === itemData.id){
                indexnumero = index;
                console.log(cart);
                cart[index] = itemData;
                console.log(cart);
            }
        })

    }

    const updateNumber = () => {
        let aux1 = 0;
        cart.map((item) => {
            aux1 = aux1 + item.quantity;
        })
        setAux(aux1);
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
        <CartContext.Provider value={[cart,setCart,aux,setAux, addItem,removeItem,clear,isInCart,updateNumber,replaceItem]}>
            {props.children}
        </CartContext.Provider>
    )
};

