import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../CartContext";
import ItemCount from "../ItemDetail/ItemCount";
import CartItem from "./CartItem";

const Box = styled.div`
  width: 50%;
  min-height: 120px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
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

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Background2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  justify-content: center;
`;

const Imagen = styled.img`
  width: 120px;
  heigth: 120px;
  margin-right: 120px;
`;

function Cart() {
    const [cart,setCart,aux,setAux, addItem,removeItem,clear,isInCart,updateNumber,replaceItem] =
        useContext(CartContext);


    let totalAmount = 0;
    cart.map((item) => {
        totalAmount = item.price * item.quantity + totalAmount;
    })

    return (
        <>
            {/* Lopear este array*/}

            {
                cart.length > 0 &&

                <React.Fragment>
                    {cart.map((item,index) => {
                        return (
                            <CartItem item={item} index={index} actNumber={updateNumber} rep={replaceItem} remItem={(id) => removeItem(id)}/>)
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

            <Background2>
                <Box2></Box2>
                <DetailBox>
                    <p>Total: </p>
                    <p> $ {totalAmount} </p>
                    <div style={{ border: "solid red 1px", borderRadius: "24px", cursor: "pointer" }} onClick={() => clear()}>
                        <p> Vaciar carrito</p>
                    </div>
                </DetailBox>
            </Background2>
        </>
    );
}
export default Cart;

