import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../CartContext";
import CartItem from "./CartItem";


const DetailBox = styled.div`
  align-self: center;
`;

const Background2 = styled.div`
background: white;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  padding: 16px;
  box-shadow: 0px -4px 8px 0px rgba(52, 69, 89, 0.2);
`;

function Cart() {
    // eslint-disable-next-line no-unused-vars
    const [cart,setCart,aux,setAux,addItem,removeItem,clear,isInCart,updateNumber,replaceItem,] = useContext(CartContext);

    let totalAmount = 0;
    cart.forEach((element) => {
        totalAmount = element.price * element.quantity + totalAmount;
    });

    return (
        <>
            {cart.length > 0 && (
                <div style={{ paddingBottom: "30%" }}>
                    {cart.map((item, index) => {
                        return (
                            <CartItem
                                item={item}
                                index={index}
                                actNumber={updateNumber}
                                rep={replaceItem}
                                remItem={(id) => removeItem(id)}
                            />
                        );
                    })}
                    <Background2>
                        <DetailBox>

                            <p > Subtotal: ${totalAmount} clp </p>
                            <p> Envio: $1000 clp </p>
                            <p> Total: ${totalAmount + 1000} clp </p>

                            <Link to="/purchase">
                                <div
                                    style={{
                                        border: "solid red 1px",
                                        borderRadius: "24px",
                                        cursor: "pointer",
                                        color: "#000000"
                                    }}
                                >
                                    <p> Ir a pagar</p>
                                </div>
                            </Link>
                            <p style={{ cursor: "pointer", color: "gray" }} onClick={() => clear()}>Vaciar carrito</p>

                        </DetailBox>
                    </Background2>
                </div>
            )}
            {cart.length === 0 && (
                <React.Fragment>
                    <h2>Tu carrito esta Vacio :( </h2>
                    <Link to="/">
                        <button>Llevame al Inicio </button>
                    </Link>
                </React.Fragment>
            )}
        </>
    );
}
export default Cart;
