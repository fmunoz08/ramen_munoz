import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../CartContext";
import ItemCount from "../ItemDetail/ItemCount";

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
    const [cart, setCart, addItem, removeItem, clear, isInCart] =
        useContext(CartContext);

    let totalAmount = 0;
    cart.map((item) => {
        totalAmount = item.price * item.quantity + totalAmount;
    })

    function BorrarItem(id) {

        removeItem(id);

    }
    return (
        <>
            {/* Lopear este array*/}

            {
                cart.length > 0 &&

                <React.Fragment>
                    {cart.map((item) => {
                        return (
                            <React.Fragment>
                                <Background>
                                    <Box>
                                        <Imagen src={item.image} />
                                        <div style={{ alignSelf: "center" }}>
                                            <h3> {item.name}</h3>
                                            <p> Cantidad : {item.quantity}</p>
                                            <div style={{border: "solid red 1px", borderRadius:"24px",cursor:"pointer"}} onClick={() => BorrarItem(item.id)}>
                                                <p > Eliminar del carro</p>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </Box>
                                    <DetailBox>
                                        <p> Precio unidad : {item.price}</p>
                                        <p> Precio Total: {item.price * item.quantity}</p>
                                    </DetailBox>
                                </Background>

                            </React.Fragment>)
                    })}
                </React.Fragment>

            }

            {
                cart.length === 0 &&
                <p>no tienes items compraaa</p>
            }

            <Background2>
                <Box2></Box2>
                <DetailBox>
                    <p>Total: </p>
                    <p> $ {totalAmount} </p>
                    <div style={{border: "solid red 1px", borderRadius:"24px",cursor:"pointer"}} onClick={() => clear()}>
                        <p> Vaciar carrito</p>
                    </div>
                </DetailBox>
            </Background2>
        </>
    );
}
export default Cart;

