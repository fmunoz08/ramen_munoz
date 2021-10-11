import React, { useState } from "react";
import styled from "styled-components";
import ItemDetailContainer from "./ItemDetailContainer";

const Card = styled.div`
    border: 2px solid black;
    background: white;
    margin: 4px;
    display: flex;
    flex-direction: column;
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
word-wrap: break-word;

`;

const SubTitulo = styled.p`
word-wrap: break-word;
font-size:12px;
`;


function Item ({ Data, id,addcart }) {

    const [show,setShow] = useState([true])

    function openModal(){
        setShow(!show);
        
    }

    function closeModal(){
        setShow(!show);
    }


    return (

        <>
        <Card>
            {
                show &&
            <React.Fragment>
            <Titulo>{Data.title}</Titulo>
            <Bar/>
            <Imagen src={Data.pictureUrl} alt=""/>
            <div style={{display: "inline-block"}}>
            <SubTitulo>{Data.description}</SubTitulo>
            </div>     
            <Boton onClick={() => openModal(Number(id))}>VER DETALLE DEL PRODUCTO</Boton>
            <Bar/>
            <SubTitulo>Stock Disponible: {Data.stock}</SubTitulo>
            </React.Fragment>
            }
            {
                !show && 
                <ItemDetailContainer addcart={addcart} close={closeModal}/>
            }



        </Card>
        </>
    );

}
export default Item;