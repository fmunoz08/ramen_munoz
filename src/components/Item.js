import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 2px solid black;
    background: white;
    margin: 4px;
`;

const Bar = styled.div`
    border: 1px solid gray;
    width: 100%;
`;

const Boton = styled.button`
    border: 2px solid cyan;
    padding: 8px;
    margin: 16px;
`;

const Imagen = styled.img`
    width: 240px;
    heigth: 240px;
    margin: 4px;
`;

const Titulo = styled.h1`

`;

const SubTitulo = styled.p`

`;


function Item ({ Data, index }) {

    return (

        <>
        <Card>
            <Titulo>{Data.title}</Titulo>
            <Bar/>
            <Imagen src={Data.pictureUrl} alt=""/>
            <SubTitulo>{Data.description}</SubTitulo>
            <SubTitulo>{Data.price}</SubTitulo>

            <Boton>VER DETALLE DEL PRODUCTO</Boton>

            <Bar/>
            <SubTitulo>Stock Disponible: 1</SubTitulo>



        </Card>
        </>
    );

}
export default Item;