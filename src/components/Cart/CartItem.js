import React, { useState } from "react";
import styled from "styled-components";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Box = styled.div`
  width: 70%;
  min-height: 120px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DetailBox = styled.div`
  width: 20%;
  align-self: center;
  margin: 0 30px;
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

const NumberBox = styled.div`
    border: 1px solid black;
    align-self: center;
    padding: 3px;
    background: white;
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
                    <div style={{ alignSelf: "center", width: "160px" }}>
                        <h3> {dato.name}</h3>
                        <div style={{ margin: "10px",display: "flex", justifyContent: "center", height: "24px" }}>
                            <button style={{margin: " 0 5px"}} onClick={() => lessItem()}>-</button>
                            <NumberBox>{dato.quantity}</NumberBox>
                            <button style={{margin: " 0 5px"}} onClick={() => moreItem()}>+</button>
                        </div>

                        <DeleteOutlineIcon style={{ cursor: "pointer" }} onClick={() => BorrarItem(item.id)} />
                    </div>

                    <DetailBox>
                    <p> Precio: $ {dato.price} clp</p>
                </DetailBox>
                </Box>               
            </Background>
        </React.Fragment>
    )
}
export default CartItem;


// ingresa tus datos para continuar tu compra