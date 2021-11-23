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

const ButtonController = styled.button`
    margin: 0 5px;
`;

const WrapperContainer = styled.div`
    margin: 10px;
    display: flex; 
    justify-content: center;
    height: 24px; 
`;

const Title = styled.h3`

`;

const Paragraph = styled.p`

`;

const WrapperData = styled.div`
align-self: center; 
width: 160px;
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
                    <WrapperData >
                        <Title> {dato.name}</Title>
                        <WrapperContainer >
                            <ButtonController onClick={() => lessItem()}>-</ButtonController>
                            <NumberBox>{dato.quantity}</NumberBox>
                            <ButtonController  onClick={() => moreItem()}>+</ButtonController>
                        </WrapperContainer>

                        <DeleteOutlineIcon style={{ cursor: "pointer" }} onClick={() => BorrarItem(item.id)} />
                    </WrapperData>
                    <DetailBox>
                    <Paragraph> Precio: $ {dato.price} clp</Paragraph>
                </DetailBox>
                </Box>               
            </Background>
        </React.Fragment>
    )
}
export default CartItem;