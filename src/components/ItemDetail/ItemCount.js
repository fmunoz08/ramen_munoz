import React, { useState } from "react";
import styled from "styled-components";

const DivControl = styled.div`
    display: flex;
    flex-direction: row;
    
`;

const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;

`;

const Numero = styled.div`
    width: 50%;
    margin: 0 10px;
    text-align: center;

`;

const Boton = styled.button`
    width: 50px;
    color: blue;
    font-size: 18px;
    border-radius: 12px;
    border: 1px solid black;
`;

const LargeBoton = styled.button`
color: blue;
font-size: 18px;
margin: 16px;
font-size: 18px;
    border-radius: 8px;
    border: 1px solid black;
`;

function ItemCount({ stock, initial, alClick }) {

    const [number, setNumber] = useState(initial);

    function AddQuantity() {
        if (number < stock)
            setNumber(number + 1)
    }
    function LessQuantity() {
        if (number > 1)
            setNumber(number - 1)
    }

    return (
        <Background>
            <DivControl>
                <Boton onClick={() => LessQuantity()}> - </Boton>
                <Numero> {number} </Numero>
                <Boton onClick={() => AddQuantity()}> + </Boton>
            </DivControl>
            <LargeBoton onClick={() => alClick(number)} >Agregar al carrito</LargeBoton>
        </Background>
    );
}
export default ItemCount;