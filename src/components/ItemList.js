import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;

`;
function ItemList({Items}) {

    return(
        <>
        <Wrapper>
        {
            Items.map((item,index) => 
                <Item key={index} Data={item} id={index}></Item>
                )
        }
        </Wrapper>
        </>
    );
}
export default ItemList;