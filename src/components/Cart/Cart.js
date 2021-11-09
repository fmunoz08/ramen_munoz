import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../CartContext";
import CartItem from "./CartItem";


const Box2 = styled.div`
  width: 50%;
  min-height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DetailBox = styled.div`
  width: 20%;
  align-self: center;
`;



const Background2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  justify-content: center;
`;


function Cart() {
    const [cart, setCart, aux, setAux, addItem, removeItem, clear, isInCart, updateNumber, replaceItem] =
        useContext(CartContext);


    let totalAmount = 0;
    cart.forEach(element => {
        totalAmount = element.price * element.quantity + totalAmount;
    });

    return (
        <>
            {
                cart.length > 0 &&
                <React.Fragment>
                    {cart.map((item, index) => {
                        return (
                            <CartItem item={item} index={index} actNumber={updateNumber} rep={replaceItem} remItem={(id) => removeItem(id)} />)
                    })}
                </React.Fragment>
            }
            {
                cart.length === 0 &&
                <React.Fragment>
                    <h2>Tu carrito esta Vacio :( </h2>
                    <Link to="/">
                        <button>Llevame al Inicio </button>
                    </Link>
                </React.Fragment>
            }
            {
             cart.length > 0 &&
            <Background2>
                <Box2></Box2>
                <DetailBox>
                    <p>Total: </p>
                    <p> $ {totalAmount} </p>
                    <div style={{ border: "solid red 1px", borderRadius: "24px", cursor: "pointer" }} onClick={() => clear()}>
                        <p> Vaciar carrito</p>
                    </div>
                    <Link to="/purchase">
                    <p>Comprar!!</p>
                    </Link>
                </DetailBox>
            </Background2>
            }
        </>
    );
}
export default Cart;

