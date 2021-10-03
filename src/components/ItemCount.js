import { style } from "@mui/system";
import React, {useState} from "react";
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
    border: 1px solid gray;
    border-radius: 16px;
    width: 100px;
    text-align: center;

`;

const Boton = styled.button`
    width: 50px;
    color: blue;
    font-size: 18px;

`;

const LargeBoton = styled.button`
color: blue;
font-size: 18px;
margin: 16px;
`;

function ItemCount ({ stock, initial, onAdd}) {

    const [number, setNumber] = useState(initial);

    function AddQuantity(){
        if (number < stock)
            setNumber(number + 1)

    }

    function LessQuantity(){
        if (number > 0)
            setNumber(number - 1)

    }

    return (
        <Background>
            <p>Lorem Ipsum</p>
            <DivControl>
                <Boton onClick={() => LessQuantity()}> - </Boton>         
                <Numero> {number} </Numero>
                <Boton onClick={() => AddQuantity()}> + </Boton>
            </DivControl>
            <LargeBoton onClick={() => onAdd(number)}>Agregar al carrito</LargeBoton>

            
            
        </Background>
    );
}
export default ItemCount;