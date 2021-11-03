import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin: auto;
gap: 20px;
width: 80%;
padding: 20px;

`;
function ItemList({ Items, addcart }) {

    console.log(Items);
    return (
        <>
            <Wrapper>
                {
                    Items.map((item, index) =>
                        <Link to={`/item/${item.id}`}>
                            <Item addcart={addcart} key={index} Data={item} id={index}></Item>
                        </Link>
                    )
                }
            </Wrapper>
        </>
    );
}
export default ItemList;