import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";

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

const LargeBoton = styled.button`
color: blue;
font-size: 18px;
margin: 16px;
`;

function ItemDetail({ Data }) {

    const [show, setShow] = useState(true);
    const [cart,setCart,addItem,removeItem,clear,isInCart] = useContext(CartContext);

    
    useEffect(() => {
        console.log(cart);
    }, [cart]);

    function updateCart (number) {
        
        addItem(Data,number);
        console.log(cart);
        setShow(false)

    }


    return (

        <>
            <Card>

                <React.Fragment>
                    <CloseButton>
                        <Titulo>{Data.title}</Titulo>
                    </CloseButton>
                    <Bar />
                    <Imagen src={Data.pictureUrl} alt="" />
                    <SubTitulo>{Data.description}</SubTitulo>
                    <Row>
                        <SubTitulo> Valor </SubTitulo>
                        <SubTitulo> ${Data.price}</SubTitulo>
                    </Row>


                    {show &&
                        <ItemCount stock={Data.stock} alClick={(number) =>updateCart(number)} initial={1}  />
                    }

                    {!show && 
                        <Link to={`/cart`}>
                        <LargeBoton> Finalizar Compra </LargeBoton>
                        </Link>
                    }


                    <Bar />
                    <SubTitulo>Stock Disponible: {Data.stock}</SubTitulo>
                </React.Fragment>

            </Card>
        </>
    );

}
export default ItemDetail;