import React from "react";
import styled from 'styled-components';

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
    min-height: 120px;
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


    return (
        <>
        { /* Lopear este array*/}
            <Background>
                <Box>
                    <Imagen src="https://m.media-amazon.com/images/I/71Y5MLLmknL._SL1500_.jpg"/>
                    <div style={{alignSelf: "center"}}>
                        <h3> Bebida Sprite</h3>
                        <p> Cantidad : 1</p>
                    </div>

                </Box>
                <DetailBox>
                <p> Precio unidad : 1000</p>
                    <p> Precio Total: 1000</p>
                </DetailBox>
            </Background>
            <Background2>
                <Box2>

                </Box2>
                <DetailBox>
                    <p>Total: </p>
                    <p>10.000</p>
                </DetailBox>
            </Background2>
        </>

    )

}
export default Cart;