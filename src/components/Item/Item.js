import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid black;
    background: white;
    margin: 4px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 480px;
    border-radius: 12px;
    box-shadow: 0px -4px 8px 0px rgba(52, 69, 89, 0.2);
`;

const Bar = styled.div`
    border: 1px solid gray;
    width: 100%;
`;

const Boton = styled.button`
    border: 1px solid cyan;
    padding: 8px;
    margin: 16px;
    border-radius: 12px;
    box-shadow: 0px -4px 8px 0px rgba(52, 69, 89, 0.2);
`;

const Imagen = styled.img`
    width: 240px;
    heigth: 240px;
    margin: 4px;
`;

const Titulo = styled.h1`
word-wrap: break-word;

`;

const SubTitulo = styled.p`
word-wrap: break-word;
font-size:12px;
`;


function Item({ Data }) {


    return (
        <>
            <Card>
                <React.Fragment>
                    <Titulo>{Data.title}</Titulo>
                    <Bar />
                    <Imagen src={Data.pictureUrl} alt="" />
                    <div style={{ display: "inline-block" }}>
                        <SubTitulo>{Data.description}</SubTitulo>
                    </div>
                    <Boton>VER DETALLE DEL PRODUCTO</Boton>
                    <Bar />
                    <SubTitulo>Stock Disponible: {Data.stock}</SubTitulo>
                </React.Fragment>
            </Card>
        </>
    );

}
export default Item;