import React from "react";
import styled from "styled-components";

import ItemCount from "./ItemCount";

const Title = styled.h1`
    text-align: center;
`;


const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


const ItemListContainer = ({greeting, addcart}) => {


    return(
        <Background>
        <Title>{greeting}</Title>
        <ItemCount stock={5} initial={1} onAdd={(number) => addcart(number) } />
        </Background>
    );
}

export default ItemListContainer;