import React, { useEffect } from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ItemCount from "./ItemCount";

const Card = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;

const CloseButton = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;

const Bar = styled.div`
    border: 1px solid gray;
    width: 100%;
`;

const Imagen = styled.img`
    width: 240px;
    heigth: 240px;
    margin: 4px;
    align-self: center;
`;

const Titulo = styled.h1`

`;

const SubTitulo = styled.p`
word-wrap: break-word;
font-size:12px;
`;

function ItemDetail ({ Data,addcart }) {

    useEffect(()=>{

    },[]);


    return (

        <>
        <Card>

            <React.Fragment>
            <CloseButton>
            <Titulo>{Data.title}</Titulo>
            </CloseButton>
            <Bar/>
            <Imagen src={Data.pictureUrl} alt=""/>
            <SubTitulo>{Data.description}</SubTitulo>   
            <Row>
            <SubTitulo> Valor </SubTitulo>
            <SubTitulo> ${Data.price}</SubTitulo>
            </Row>
            <ItemCount stock={Data.stock} initial={1} onAdd={(number) => addcart(number) } />     
            <Bar/>
            <SubTitulo>Stock Disponible: {Data.stock}</SubTitulo>
            </React.Fragment>
            
        </Card>
        </>
    );

}
export default ItemDetail;