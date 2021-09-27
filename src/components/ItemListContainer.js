import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
`;

const ItemListContainer = ({greeting}) => {


    return(
        <Title>{greeting}</Title>
    );
}

export default ItemListContainer;