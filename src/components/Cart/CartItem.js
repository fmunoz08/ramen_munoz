import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 50%;
  min-height: 120px;
  border: 2px solid black;
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

const Imagen = styled.img`
  width: 120px;
  heigth: 120px;
  margin-right: 120px;
`;



function CartItem({ item, index, actNumber, remItem, rep }) {

    const [dato] = useState(item);

    function BorrarItem(id) {
        actNumber();
        remItem(id);
    }

    function moreItem() {
        if (dato.quantity < dato.stock) {
            dato.quantity = dato.quantity + 1;
            actNumber();
            rep(item)
        }
    }

    function lessItem() {
        if (dato.quantity > 0) {
            dato.quantity = dato.quantity - 1;
            actNumber();
            rep(item)
        }
        if (dato.quantity === 0) {
            BorrarItem(dato.id)
        }
    }

    return (
        <React.Fragment>
            <Background key={index}>
                <Box>
                    <Imagen src={dato.image} />
                    <div style={{ alignSelf: "center" }}>
                        <h3> {dato.name}</h3>
                        <p> Cantidad : {dato.quantity}</p>
                        <div style={{ border: "solid red 1px", borderRadius: "24px", cursor: "pointer" }} onClick={() => BorrarItem(item.id)}>
                            <p > Eliminar del carro</p>
                        </div>
                        <div>
                            <p>¿añadir o quitar algo?</p>
                            <button onClick={() => lessItem()}>-</button>
                            <button onClick={() => moreItem()}>+</button>
                        </div>
                    </div>
                    <div>
                        <p>add items</p>
                    </div>
                </Box>
                <DetailBox>
                    <p> Precio unidad: $ {dato.price} clp </p>
                    <p> Precio Total: $ {dato.price * dato.quantity} clp</p>
                </DetailBox>
            </Background>

        </React.Fragment>
    )
}
export default CartItem;