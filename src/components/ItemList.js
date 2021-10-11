import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;

`;
function ItemList({Items,addcart}) {

    return(
        <>
        <Wrapper>
        {
            Items.map((item,index) => 
                <Item addcart={addcart} key={index} Data={item} id={index}></Item>
                )
        }
        </Wrapper>
        </>
    );
}
export default ItemList;